import { revalidateTag } from "next/cache";
import { type NextRequest } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { sanityContentCacheTag } from "@/sanity/lib/cache-tag";

/**
 * Sanity calls this route on every publish, update, or delete. Cached content
 * lives for a year (see `cacheLife` in next.config.mjs) and otherwise only
 * refreshes when a visitor has a page open at the moment the change happens.
 *
 * Both the Sanity webhook and this deployment must share
 * `SANITY_REVALIDATE_SECRET`. Sanity signs each request with it.
 */
type WebhookBody = { _id?: string; _type?: string };

export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;

  if (!secret) {
    return Response.json(
      { error: "Revalidation is not configured" },
      { status: 503 },
    );
  }

  let parsed: Awaited<ReturnType<typeof parseBody<WebhookBody>>>;
  try {
    parsed = await parseBody<WebhookBody>(request, secret);
  } catch {
    return Response.json({ error: "Invalid body" }, { status: 400 });
  }

  if (!parsed.isValidSignature) {
    return Response.json({ error: "Invalid signature" }, { status: 401 });
  }

  revalidateTag(sanityContentCacheTag, "max");

  return Response.json({
    revalidated: true,
    tag: sanityContentCacheTag,
    documentId: parsed.body?._id ?? null,
    documentType: parsed.body?._type ?? null,
  });
}
