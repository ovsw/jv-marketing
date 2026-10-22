import { afterEach, beforeEach, expect, test, vi } from "vitest";

import { ALL_CONTENT_CACHE_TAG } from "../../../phx-website/sanity/lib/cache-tags.ts";
import { ALL_CONTENT_SYNC_TAG, handler } from "./index.ts";

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

test("matches the tag the website puts on every cached read", () => {
  // /api/revalidate-tags adds the `sanity:` prefix to every tag it receives.
  expect(`sanity:${ALL_CONTENT_SYNC_TAG}`).toBe(ALL_CONTENT_CACHE_TAG);
});

test("asks the website to expire all cached content", async () => {
  await handler({ context: {}, event: { data: {} } });
  expect(fetch).toHaveBeenCalledWith(
    "https://example.com/api/revalidate-tags",
    expect.objectContaining({ body: JSON.stringify({ tags: [ALL_CONTENT_SYNC_TAG] }) }),
  );
  expect(console.info).toHaveBeenCalled();
  expect(console.error).not.toHaveBeenCalled();
});

test("logs a refused request without claiming success", async () => {
  fetch.mockResolvedValue(new Response("Unauthorized", { status: 401 }));
  await handler({ context: {}, event: { data: {} } });
  expect(console.error).toHaveBeenCalledWith(
    "Website refused revalidation at https://example.com/api/revalidate-tags: HTTP 401 Unauthorized",
  );
  expect(console.info).not.toHaveBeenCalled();
});
