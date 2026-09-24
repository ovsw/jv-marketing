import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const { revalidateTag } = vi.hoisted(() => ({ revalidateTag: vi.fn() }));
vi.mock("next/cache", () => ({ revalidateTag }));

import { POST } from "./route";

const secret = "test-revalidate-tags-secret";

function request({
  body = JSON.stringify({ tags: ["s1:abc", "s1:def"] }),
  bearer,
}: { body?: string; bearer?: string } = {}) {
  return new Request("http://localhost/api/revalidate-tags", {
    method: "POST",
    body,
    headers: {
      "content-type": "application/json",
      ...(bearer ? { authorization: `Bearer ${bearer}` } : {}),
    },
  });
}

describe("revalidate-tags route", () => {
  beforeEach(() => {
    revalidateTag.mockClear();
    vi.stubEnv("SANITY_REVALIDATE_TAGS_SECRET", secret);
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("refuses to run when the secret is not configured", async () => {
    vi.stubEnv("SANITY_REVALIDATE_TAGS_SECRET", "");

    const response = await POST(request({ bearer: secret }));

    expect(response.status).toBe(503);
    expect(revalidateTag).not.toHaveBeenCalled();
  });

  it("rejects a missing or wrong bearer secret", async () => {
    expect((await POST(request())).status).toBe(401);
    expect((await POST(request({ bearer: "someone-else" }))).status).toBe(401);
    expect(revalidateTag).not.toHaveBeenCalled();
  });

  it("rejects a body without a non-empty list of tags", async () => {
    expect(
      (await POST(request({ bearer: secret, body: "not json" }))).status,
    ).toBe(400);
    expect(
      (await POST(request({ bearer: secret, body: JSON.stringify({ tags: [] }) })))
        .status,
    ).toBe(400);
    expect(
      (await POST(request({ bearer: secret, body: JSON.stringify({ tags: [1] }) })))
        .status,
    ).toBe(400);
    expect(revalidateTag).not.toHaveBeenCalled();
  });

  it("expires every sync tag immediately with the sanity prefix", async () => {
    const response = await POST(request({ bearer: secret }));

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({
      revalidated: ["s1:abc", "s1:def"],
    });
    expect(revalidateTag).toHaveBeenCalledTimes(2);
    expect(revalidateTag).toHaveBeenCalledWith("sanity:s1:abc", { expire: 0 });
    expect(revalidateTag).toHaveBeenCalledWith("sanity:s1:def", { expire: 0 });
  });
});
