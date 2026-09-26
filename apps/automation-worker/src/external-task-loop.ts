// The Worker's side of the engine's external-task API: fetch and lock work
// with long polling, run the topic's handler, then complete the task or
// report the failure. Retries and incidents stay with the engine.

export type TypedValue = { value: unknown; type: string };
export type Variables = Record<string, TypedValue>;

export type LockedTask = {
  id: string;
  topicName: string;
  businessKey: string | null;
  processInstanceId: string;
  retries: number | null;
  variables?: Variables;
};

export type TaskHandler = (task: LockedTask) => Promise<Variables | void>;

export type ExternalTaskLoopOptions = {
  engineRestUrl: string;
  username: string;
  password: string;
  workerId: string;
  handlers: Record<string, TaskHandler>;
  signal: AbortSignal;
  lockDurationMs?: number;
  longPollMs?: number;
  maxBackoffMs?: number;
  log?: Pick<Console, "info" | "error">;
};

// Retries a failed task gets before the engine raises an incident.
const FIRST_FAILURE_RETRIES = 2;
const RETRY_TIMEOUT_MS = 60_000;

export async function runExternalTaskLoop(options: ExternalTaskLoopOptions): Promise<void> {
  const {
    engineRestUrl,
    workerId,
    handlers,
    signal,
    lockDurationMs = 60_000,
    longPollMs = 30_000,
    maxBackoffMs = 30_000,
    log = console,
  } = options;
  const authorization = `Basic ${Buffer.from(`${options.username}:${options.password}`).toString("base64")}`;
  const topics = Object.keys(handlers).map((topicName) => ({ topicName, lockDuration: lockDurationMs }));

  async function post(path: string, body: unknown): Promise<Response> {
    const response = await fetch(`${engineRestUrl}${path}`, {
      method: "POST",
      headers: { authorization, "content-type": "application/json" },
      body: JSON.stringify(body),
      signal,
    });
    if (!response.ok) {
      throw new Error(`POST ${path} returned ${response.status}: ${await response.text()}`);
    }
    return response;
  }

  async function runTask(task: LockedTask): Promise<void> {
    try {
      const variables = (await handlers[task.topicName](task)) ?? {};
      await post(`/external-task/${task.id}/complete`, { workerId, variables });
      log.info(`completed ${task.topicName} task ${task.id} (business key ${task.businessKey})`);
    } catch (error) {
      if (signal.aborted) return;
      const retries = task.retries === null ? FIRST_FAILURE_RETRIES : Math.max(task.retries - 1, 0);
      log.error(`${task.topicName} task ${task.id} failed, ${retries} retries left: ${messageOf(error)}`);
      await post(`/external-task/${task.id}/failure`, {
        workerId,
        errorMessage: messageOf(error).slice(0, 600),
        errorDetails: error instanceof Error ? error.stack : undefined,
        retries,
        retryTimeout: RETRY_TIMEOUT_MS,
      }).catch((reportError: unknown) => {
        // The lock expires and the engine hands the task out again.
        log.error(`could not report failure of task ${task.id}: ${messageOf(reportError)}`);
      });
    }
  }

  log.info(`worker ${workerId} polling ${engineRestUrl} for ${topics.map((t) => t.topicName).join(", ")}`);
  let backoffMs = 0;
  while (!signal.aborted) {
    let tasks: LockedTask[];
    try {
      const response = await post("/external-task/fetchAndLock", {
        workerId,
        maxTasks: 5,
        usePriority: true,
        asyncResponseTimeout: longPollMs,
        topics,
      });
      tasks = (await response.json()) as LockedTask[];
      backoffMs = 0;
    } catch (error) {
      if (signal.aborted) break;
      backoffMs = Math.min(backoffMs === 0 ? 1_000 : backoffMs * 2, maxBackoffMs);
      log.error(`fetchAndLock failed, retrying in ${backoffMs} ms: ${messageOf(error)}`);
      await sleep(backoffMs, signal);
      continue;
    }
    for (const task of tasks) await runTask(task);
  }
  log.info(`worker ${workerId} stopped`);
}

function messageOf(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

function sleep(ms: number, signal: AbortSignal): Promise<void> {
  return new Promise((resolve) => {
    const timer = setTimeout(done, ms);
    signal.addEventListener("abort", done, { once: true });
    function done() {
      clearTimeout(timer);
      signal.removeEventListener("abort", done);
      resolve();
    }
  });
}
