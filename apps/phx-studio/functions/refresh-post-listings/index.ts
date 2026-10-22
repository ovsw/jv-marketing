import { documentEventHandler } from "@sanity/functions";

import { buildRevalidateRequest } from "../invalidate-cache/model.ts";

/**
 * Sync tags only expire cached reads that already contain the changed
 * document. A newly published post is in no cached listing yet, so the home
 * page, the blog index and the category archives kept their old lists until
 * an unrelated edit expired them. Whenever a post is published, changed,
 * unpublished or deleted, this function tells the website to expire every
 * cached read; the website tags each one with `sanity:all-content`.
 */
export const ALL_CONTENT_SYNC_TAG = "all-content";

/** Leaves room inside the 30s function timeout for logging. */
const WEBSITE_REQUEST_TIMEOUT_MS = 20_000;

export const handler = documentEventHandler(async () => {
  try {
    const request = buildRevalidateRequest(process.env, [ALL_CONTENT_SYNC_TAG]);
    const response = await fetch(request.url, {
      ...request.init,
      signal: AbortSignal.timeout(WEBSITE_REQUEST_TIMEOUT_MS),
    });
    if (response.ok) {
      console.info(
        `Expired all cached content at ${request.url} (HTTP ${response.status})`,
      );
    } else {
      console.error(
        `Website refused revalidation at ${request.url}: HTTP ${response.status} ${await response.text()}`,
      );
    }
  } catch (error) {
    console.error("Could not reach the website revalidation route", error);
  }
});
