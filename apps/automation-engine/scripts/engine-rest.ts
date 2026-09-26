// Minimal client for the engine REST API, used by the operations commands.
// ENGINE_URL is the engine's base URL without /engine-rest.

export function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing ${name}. Run the setup wizard or see README.md.`);
  return value;
}

export type EngineClient = ReturnType<typeof createEngineClient>;

export function createEngineClient(options: { url: string; username: string; password: string }) {
  const base = `${options.url.replace(/\/$/, "")}/engine-rest`;
  const authorization = `Basic ${Buffer.from(`${options.username}:${options.password}`).toString("base64")}`;

  async function request<T>(method: string, path: string, body?: unknown): Promise<T> {
    const headers: Record<string, string> = { authorization, accept: "application/json" };
    let payload: RequestInit["body"];
    if (body instanceof FormData) {
      payload = body;
    } else if (body !== undefined) {
      headers["content-type"] = "application/json";
      payload = JSON.stringify(body);
    }
    const response = await fetch(`${base}${path}`, { method, headers, body: payload });
    if (!response.ok) {
      throw new Error(`${method} ${path} returned ${response.status}: ${(await response.text()).slice(0, 500)}`);
    }
    return (response.status === 204 ? undefined : await response.json()) as T;
  }

  return {
    get: <T>(path: string) => request<T>("GET", path),
    post: <T>(path: string, body?: unknown) => request<T>("POST", path, body),
    put: <T>(path: string, body?: unknown) => request<T>("PUT", path, body),
  };
}
