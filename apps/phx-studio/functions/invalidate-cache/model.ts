export type InvalidateCacheEnv = {
  REVALIDATE_URL?: string;
  REVALIDATE_TAGS_SECRET?: string;
  VERCEL_PROTECTION_BYPASS?: string;
};

export type RevalidateRequest = {
  url: string;
  init: {
    method: "POST";
    headers: Record<string, string>;
    body: string;
  };
};

/**
 * Build the request that tells the website which cached reads went stale.
 * `REVALIDATE_URL` is set in the blueprint; the secrets are set on the deployed
 * function with `sanity functions env add`, never committed.
 */
export function buildRevalidateRequest(
  env: InvalidateCacheEnv,
  syncTags: readonly string[],
): RevalidateRequest {
  const url = env.REVALIDATE_URL?.trim();
  if (!url) throw new Error("REVALIDATE_URL is not set on this function");

  const secret = env.REVALIDATE_TAGS_SECRET?.trim();
  if (!secret) throw new Error("REVALIDATE_TAGS_SECRET is not set on this function");

  const headers: Record<string, string> = {
    "content-type": "application/json",
    authorization: `Bearer ${secret}`,
  };
  // Preview deployments sit behind Vercel Authentication; the bypass header
  // lets the function through without a browser session.
  const bypass = env.VERCEL_PROTECTION_BYPASS?.trim();
  if (bypass) headers["x-vercel-protection-bypass"] = bypass;

  return {
    url,
    init: { method: "POST", headers, body: JSON.stringify({ tags: syncTags }) },
  };
}
