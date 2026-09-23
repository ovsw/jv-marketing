import { timingSafeEqual } from "node:crypto";
import { revalidateTag } from "next/cache";

/**
 * Called by the Sanity Sync Tag Invalidate Function (see
 * `apps/phx-studio/functions/invalidate-cache`) whenever published content
 * changes. It is the server-side half of Sanity Live: `<SanityLive />` only
 * hears about changes while a visitor has a page open, so this route is what
 * keeps cached pages fresh when nobody is watching.
 *
 * `sanityFetch` from `defineLive` tags every cached read with `sanity:<tag>`,
 * so the same prefix is added here. `revalidateTag(tag, "max")` serves the
 * stale page once while the fresh one renders in the background.
 */
export async function POST(request: Request) {
  const expectedSecret = process.env.SANITY_REVALIDATE_TAGS_SECRET;
  if (!expectedSecret) {
    return Response.json(
      { error: "Revalidation is not configured" },
      { status: 503 },
    );
  }

  const authorization = request.headers.get("authorization") ?? "";
  const providedSecret = authorization.startsWith("Bearer ")
    ? authorization.slice("Bearer ".length)
    : "";
  const expectedBuffer = Buffer.from(expectedSecret);
  const providedBuffer = Buffer.from(providedSecret);
  if (
    expectedBuffer.length !== providedBuffer.length ||
    !timingSafeEqual(expectedBuffer, providedBuffer)
  ) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  let tags: unknown;
  try {
    ({ tags } = (await request.json()) as { tags?: unknown });
  } catch {
    return Response.json({ error: "Body must be JSON" }, { status: 400 });
  }

  if (
    !Array.isArray(tags) ||
    tags.length === 0 ||
    !tags.every((tag) => typeof tag === "string" && tag.length > 0)
  ) {
    return Response.json(
      { error: "`tags` must be a non-empty array of strings" },
      { status: 400 },
    );
  }

  for (const tag of tags) {
    revalidateTag(`sanity:${tag}`, "max");
  }

  return Response.json({ revalidated: tags });
}
