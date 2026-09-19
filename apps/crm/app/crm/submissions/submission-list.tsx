"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useOptimistic, useTransition } from "react";
import type { AssessmentSubmissionPage } from "@/lib/crm/submissions";
import { RefreshButton } from "../refresh-button";
import { Submission } from "./submission";

export function SubmissionList({
  page,
  basePath,
  liveOnly,
  hasCursor,
  showPersonLink = false,
}: {
  page: AssessmentSubmissionPage;
  basePath: string;
  liveOnly: boolean;
  hasCursor: boolean;
  showPersonLink?: boolean;
}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [selectedLiveOnly, setSelectedLiveOnly] = useOptimistic(liveOnly);
  const newest = liveOnly ? `${basePath}?environment=live` : basePath;
  const older = new URLSearchParams(liveOnly ? { environment: "live" } : {});
  if (page.nextCursor) older.set("cursor", page.nextCursor);
  return (
    <section aria-label="Assessment Submissions" aria-busy={pending}>
      <div className="flex flex-wrap items-center justify-between gap-4 border-b py-4">
        <label className="inline-flex min-h-9 cursor-pointer items-center gap-2 text-sm font-medium">
          <input
            type="checkbox"
            checked={selectedLiveOnly}
            disabled={pending}
            className="size-4 accent-primary focus-ring"
            onChange={(event) => {
              const checked = event.currentTarget.checked;
              const next = checked ? `${basePath}?environment=live` : basePath;
              startTransition(() => {
                setSelectedLiveOnly(checked);
                router.push(next);
              });
            }}
          />
          Live only
        </label>
        <RefreshButton pendingSince={null} />
      </div>
      {pending ? (
        <p role="status" className="mt-3 text-sm text-muted-foreground">
          Loading submissions…
        </p>
      ) : null}
      {page.items.length ? (
        <>
          <p className="mt-4 text-sm text-muted-foreground">
            {page.items.length}{" "}
            {page.items.length === 1 ? "submission" : "submissions"} on this
            page · Newest received first · Times in Phoenix
          </p>
          <ol className="divide-y">
            {page.items.map((submission) => (
              <li key={submission.id}>
                <Submission
                  submission={submission}
                  showPersonLink={showPersonLink}
                />
              </li>
            ))}
          </ol>
        </>
      ) : (
        <div className="py-12 text-center">
          <p className="font-medium">
            {hasCursor
              ? "No older Assessment Submissions"
              : liveOnly
                ? "No live Assessment Submissions"
                : "No Assessment Submissions yet"}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {hasCursor
              ? "Return to the newest submissions."
              : liveOnly
                ? "Clear Live only to see preview or test submissions."
                : "Saved website assessments will appear here."}
          </p>
        </div>
      )}
      <nav
        aria-label="Submission pages"
        className="flex flex-wrap items-center justify-between gap-4 border-t pt-4 text-sm"
      >
        {hasCursor ? (
          <Link
            href={newest}
            className="py-2 underline underline-offset-4 focus-ring"
          >
            Back to newest
          </Link>
        ) : (
          <span />
        )}
        {page.nextCursor ? (
          <Link
            href={`${basePath}?${older}`}
            className="py-2 underline underline-offset-4 focus-ring"
          >
            Older submissions
          </Link>
        ) : page.items.length ? (
          <p className="text-muted-foreground">
            End of submissions{liveOnly ? " matching Live only" : ""}.
          </p>
        ) : null}
      </nav>
    </section>
  );
}
