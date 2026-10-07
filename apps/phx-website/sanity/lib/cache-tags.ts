/**
 * Every cached read carries this tag besides its sync tags. Sync tags only
 * reach reads that already contain the changed document, so a newly published
 * post never reached the listings that should now show it. The Studio's
 * `refresh-post-listings` function posts `all-content` to
 * `/api/revalidate-tags` whenever a post changes, and that route adds the
 * `sanity:` prefix, which expires every cached read at once.
 */
export const ALL_CONTENT_CACHE_TAG = "sanity:all-content";
