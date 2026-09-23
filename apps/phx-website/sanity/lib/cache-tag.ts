/**
 * Every cached Sanity read carries this tag so the `/api/revalidate` webhook
 * route can mark the whole content cache stale with one `revalidateTag` call.
 * `defineLive` also adds per-query sync tags, but those are only known to the
 * browser-side `<SanityLive />` listener; a Sanity webhook does not get them.
 *
 * Kept in its own module because `live.ts` cannot load outside a React Server
 * Component, and the route handler only needs the tag name.
 */
export const sanityContentCacheTag = "sanity-content";
