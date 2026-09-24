import {
  defineBlueprint,
  defineDocumentFunction,
  defineSyncTagInvalidateFunction,
} from "@sanity/blueprints";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
if (!projectId) {
  throw new Error(
    "SANITY_STUDIO_PROJECT_ID is required to scope the blueprint's functions to a dataset.",
  );
}

/**
 * One Sync Tag Invalidate Function per dataset, each pointed at the site that
 * reads that dataset (see "Branches and deployments" in the README). Sanity
 * warns against more than one such function per dataset.
 *
 * `REVALIDATE_TAGS_SECRET` (and `VERCEL_PROTECTION_BYPASS` for the Preview
 * site) are set on the deployed function with `sanity functions env add`.
 */
function invalidateCacheFunction(dataset: string, siteUrl: string) {
  return defineSyncTagInvalidateFunction({
    name: `invalidate-cache-${dataset}`,
    src: "./functions/invalidate-cache",
    memory: 1,
    timeout: 30,
    event: { resource: { type: "dataset", id: `${projectId}.${dataset}` } },
    env: { REVALIDATE_URL: `${siteUrl}/api/revalidate-tags` },
  });
}

export default defineBlueprint({
  resources: [
    defineDocumentFunction({
      name: "auto-redirect",
      src: "./functions/auto-redirect",
      memory: 2,
      timeout: 30,
      event: {
        on: ["publish"],
        filter:
          '_type in ["page", "post", "category"] && delta::changedAny(slug.current)',
        projection: `{
          "documentId": after()._id,
          "documentType": after()._type,
          "beforeSlug": before().slug.current,
          "slug": after().slug.current
        }`,
      },
    }),
    invalidateCacheFunction("production", "https://phxhomeloan.com"),
    invalidateCacheFunction(
      "development",
      "https://phxhomeloancom-dev.vercel.app",
    ),
  ],
});
