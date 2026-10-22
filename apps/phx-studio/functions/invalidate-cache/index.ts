import { syncTagInvalidateEventHandler } from "@sanity/functions";

import { buildRevalidateRequest } from "./model.ts";

/**
 * Server-side half of Sanity Live. Sanity runs this on its own infrastructure
 * after every content change and hands over the sync tags that went stale.
 * The website's `/api/revalidate-tags` route marks those tags stale, so a
 * publish reaches cached pages even when no visitor has a page open.
 *
 * `done` must always run: with `waitFor="function"` on `<SanityLive />`,
 * Sanity holds the live event back until this function reports completion.
 * If the website could not be told, `done` still runs so the event reaches
 * connected browsers, whose own `<SanityLive />` action then revalidates;
 * withholding `done` would block that fallback for every visitor.
 */

/** Leaves room inside the 30s function timeout for `done` and its logging. */
const WEBSITE_REQUEST_TIMEOUT_MS = 20_000;
export const handler = syncTagInvalidateEventHandler(
  async ({ event, done }) => {
    const { syncTags } = event.data;

    try {
      const request = buildRevalidateRequest(process.env, syncTags);
      const response = await fetch(request.url, {
        ...request.init,
        signal: AbortSignal.timeout(WEBSITE_REQUEST_TIMEOUT_MS),
      });
      if (response.ok) {
        console.info(
          `Revalidated ${syncTags.length} sync tags at ${request.url} (HTTP ${response.status})`,
        );
      } else {
        console.error(
          `Website refused revalidation at ${request.url}: HTTP ${response.status} ${await response.text()}`,
        );
      }
    } catch (error) {
      console.error("Could not reach the website revalidation route", error);
    } finally {
      try {
        const response = await done(syncTags);
        if (response.ok) {
          console.info(`Reported completion to Sanity (HTTP ${response.status})`);
        } else {
          console.error(
            `Sanity refused completion (HTTP ${response.status})`,
          );
        }
      } catch (error) {
        console.error("Could not report completion to Sanity", error);
      }
    }
  },
);
