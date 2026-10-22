import { afterEach, beforeEach, expect, test, vi } from "vitest";

import { handler } from "./index.ts";

const syncTags = ["s1:test"];

beforeEach(() => {
  vi.stubEnv("REVALIDATE_URL", "https://example.com/api/revalidate-tags");
  vi.stubEnv("REVALIDATE_TAGS_SECRET", "test-secret");
  vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(null, { status: 200 })));
  vi.spyOn(console, "info").mockImplementation(() => {});
  vi.spyOn(console, "error").mockImplementation(() => {});
});

afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
});

test("logs completion only when Sanity accepts it", async () => {
  const done = vi.fn().mockResolvedValue(new Response(null, { status: 204 }));
  await handler({ event: { data: { syncTags } }, done });
  expect(done).toHaveBeenCalledWith(syncTags);
  expect(console.info).toHaveBeenCalledWith("Reported completion to Sanity (HTTP 204)");
  expect(console.error).not.toHaveBeenCalled();
});

test("reports a rejected completion without claiming success", async () => {
  const done = vi.fn().mockResolvedValue(new Response(null, { status: 503 }));
  await handler({ event: { data: { syncTags } }, done });
  expect(console.error).toHaveBeenCalledWith("Sanity refused completion (HTTP 503)");
  expect(console.info).not.toHaveBeenCalledWith("Reported completion to Sanity (HTTP 503)");
});

test("still releases browser updates if the website cannot be reached", async () => {
  fetch.mockRejectedValue(new Error("Connection failed"));
  const done = vi.fn().mockResolvedValue(new Response(null, { status: 204 }));
  await handler({ event: { data: { syncTags } }, done });
  expect(done).toHaveBeenCalledWith(syncTags);
  expect(console.error).toHaveBeenCalledWith(
    "Could not reach the website revalidation route",
    expect.any(Error),
  );
});
