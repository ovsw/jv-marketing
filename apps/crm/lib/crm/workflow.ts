// One step label for where a test inquiry is in its workflow.
//
// The row in our database is the source of truth for the outcome. A Trigger.dev
// run snapshot only explains a row whose job has not finished: it tells queued
// from running, and it exposes a run that died before the task could record
// the failure. Nothing here reads the network.

export type RunSnapshot = { status: string; error: string | null } | null;

export type WorkflowStep =
  | "saved"
  | "dispatched"
  | "queued"
  | "running"
  | "email_sent"
  | "complete"
  | "failed";

export type WorkflowState = "in_progress" | "complete" | "failed";

export type Workflow = {
  step: WorkflowStep;
  label: string;
  state: WorkflowState;
  // One sentence for the detail panel.
  detail: string;
  // Set when the step has not moved for a while. Shown next to the step.
  warning: string | null;
};

// A healthy job finishes in seconds. After this long on one step, staff need
// to know that something is holding it.
export const STUCK_AFTER_MS = 2 * 60 * 1000;

const QUEUED = new Set(["PENDING_VERSION", "QUEUED", "DELAYED"]);
const RUNNING = new Set(["DEQUEUED", "EXECUTING", "WAITING", "COMPLETED"]);
const RUN_FAILED = new Set([
  "FAILED",
  "CRASHED",
  "SYSTEM_FAILURE",
  "CANCELED",
  "EXPIRED",
  "TIMED_OUT",
]);

export function waitLabel(ms: number) {
  const minutes = Math.floor(ms / 60_000);
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  return `${hours} hr`;
}

export function describeWorkflow(
  row: {
    jobStatus: string;
    runId: string | null;
    emailId: string | null;
    lastError: string | null;
    updatedAt: Date;
  },
  run: RunSnapshot,
  now = Date.now(),
): Workflow {
  if (row.jobStatus === "complete")
    return {
      step: "complete",
      label: "Complete",
      state: "complete",
      detail: "Resend accepted the email and the SMS was simulated.",
      warning: null,
    };

  const waited = Math.max(0, now - row.updatedAt.getTime());
  const stuck = waited >= STUCK_AFTER_MS;
  const since = waitLabel(waited);

  // The run died before the task could write its own failure.
  if (run && RUN_FAILED.has(run.status))
    return {
      step: "failed",
      label: "Failed",
      state: "failed",
      detail: `The job stopped on Trigger.dev (${run.status.toLowerCase()}).${
        run.error ? ` ${run.error}` : ""
      }`,
      warning: null,
    };

  // A retried failure keeps its failed status until the worker reports back.
  // While its new run is queued or running, show that instead of the old error.
  if (run && QUEUED.has(run.status))
    return {
      step: "queued",
      label: "Queued",
      state: "in_progress",
      detail: "Waiting for a worker to pick up the job.",
      warning: stuck
        ? `No worker has picked up this job in ${since}. Start the Trigger.dev worker.`
        : null,
    };
  if (run && RUNNING.has(run.status))
    return {
      step: "running",
      label: "Running",
      state: "in_progress",
      detail: "A worker is sending the confirmations.",
      warning: stuck
        ? `Still running after ${since}. Check the run on Trigger.dev.`
        : null,
    };

  if (row.jobStatus === "failed")
    return {
      step: "failed",
      label: "Failed",
      state: "failed",
      detail: row.lastError ?? "The job failed.",
      warning: null,
    };

  // From here the row is pending and Trigger.dev gave no usable status.
  if (!row.runId) {
    // Dispatch takes well under a second. A row with no run after this long
    // was never handed to Trigger.dev, and nothing will ever pick it up.
    if (stuck)
      return {
        step: "failed",
        label: "Failed",
        state: "failed",
        detail: "The job was not dispatched. Retry this inquiry.",
        warning: null,
      };
    return {
      step: "saved",
      label: "Saved",
      state: "in_progress",
      detail: "Saved in the test database. Dispatching the job.",
      warning: null,
    };
  }
  if (row.emailId)
    return {
      step: "email_sent",
      label: "Email sent",
      state: "in_progress",
      detail: "Resend accepted the email. Simulating the SMS.",
      warning: stuck
        ? `The SMS simulation has not finished in ${since}. Check the run on Trigger.dev.`
        : null,
    };
  return {
    step: "dispatched",
    label: "Dispatched",
    state: "in_progress",
    detail: "Handed to Trigger.dev. Waiting for its status.",
    warning: stuck
      ? `No status from Trigger.dev in ${since}. Refresh, or check the run on Trigger.dev.`
      : null,
  };
}
