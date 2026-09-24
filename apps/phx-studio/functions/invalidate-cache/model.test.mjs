import assert from "node:assert/strict";
import { test } from "vitest";

import { buildRevalidateRequest } from "./model.ts";

test("posts the sync tags to the website with the shared secret", () => {
  const request = buildRevalidateRequest(
    {
      REVALIDATE_URL: "https://phxhomeloan.com/api/revalidate-tags",
      REVALIDATE_TAGS_SECRET: "shh",
    },
    ["s1:abc"],
  );
  assert.equal(request.url, "https://phxhomeloan.com/api/revalidate-tags");
  assert.equal(request.init.method, "POST");
  assert.equal(request.init.headers.authorization, "Bearer shh");
  assert.equal(request.init.headers["x-vercel-protection-bypass"], undefined);
  assert.deepEqual(JSON.parse(request.init.body), { tags: ["s1:abc"] });
});

test("adds the Vercel protection bypass header only when configured", () => {
  const request = buildRevalidateRequest(
    {
      REVALIDATE_URL: "https://phxhomeloancom-dev.vercel.app/api/revalidate-tags",
      REVALIDATE_TAGS_SECRET: "shh",
      VERCEL_PROTECTION_BYPASS: "bypass-me",
    },
    ["s1:abc"],
  );
  assert.equal(request.init.headers["x-vercel-protection-bypass"], "bypass-me");
});

test("fails loudly when the function is not configured", () => {
  assert.throws(
    () => buildRevalidateRequest({ REVALIDATE_TAGS_SECRET: "shh" }, ["s1:abc"]),
    /REVALIDATE_URL/,
  );
  assert.throws(
    () => buildRevalidateRequest({ REVALIDATE_URL: "https://x" }, ["s1:abc"]),
    /REVALIDATE_TAGS_SECRET/,
  );
});
