import { createHmac } from "node:crypto";
import { NextRequest } from "next/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const { revalidateTag } = vi.hoisted(() => ({ revalidateTag: vi.fn() }));
vi.mock("next/cache", () => ({ revalidateTag }));

import { POST } from "./route";

const secret = "test-revalidate-secret";
const body = JSON.stringify({ _id: "post-1", _type: "post" });

// Mirrors @sanity/webhook's signature format: "t=<timestamp>,v1=<base64url hmac>".
function sign(payload: string, signingSecret: string) {
  const timestamp = Date.now();
  const digest = createHmac("sha256", signingSecret)
    .update(`${timestamp}.${payload}`, "utf8")
    .digest("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
  return `t=${timestamp},v1=${digest}`;
}

function request(signature?: string) {
  return new NextRequest("http://localhost/api/revalidate", {
    method: "POST",
    body,
    headers: {
      "content-type": "application/json",
      ...(signature ? { "sanity-webhook-signature": signature } : {}),
    },
  });
}

describe("revalidate route", () => {
  beforeEach(() => {
    revalidateTag.mockClear();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("refuses to run when the secret is not configured", async () => {
    vi.stubEnv("SANITY_REVALIDATE_SECRET", "");

    const response = await POST(request(sign(body, secret)));

    expect(response.status).toBe(503);
    expect(revalidateTag).not.toHaveBeenCalled();
  });

  it("rejects a request signed with the wrong secret", async () => {
    vi.stubEnv("SANITY_REVALIDATE_SECRET", secret);

    const response = await POST(request(sign(body, "someone-else")));

    expect(response.status).toBe(401);
    expect(revalidateTag).not.toHaveBeenCalled();
  });

  it("rejects an unsigned request", async () => {
    vi.stubEnv("SANITY_REVALIDATE_SECRET", secret);

    const response = await POST(request());

    expect(response.status).toBe(401);
    expect(revalidateTag).not.toHaveBeenCalled();
  });

  it("marks the shared content tag stale on a valid signature", async () => {
    vi.stubEnv("SANITY_REVALIDATE_SECRET", secret);

    const response = await POST(request(sign(body, secret)));

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({
      revalidated: true,
      tag: "sanity-content",
      documentId: "post-1",
      documentType: "post",
    });
    expect(revalidateTag).toHaveBeenCalledWith("sanity-content", "max");
  });
});
