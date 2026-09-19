import { Suspense } from "react";
import { notFound } from "next/navigation";
import { staffUser } from "@/lib/crm/auth";
import { getPersonWithAssessmentSubmissions } from "@/lib/crm/people";
import { InvalidSubmissionList } from "@/lib/crm/submissions";
import { StaffAccessRequired } from "../../staff-access-required";
import { SubmissionList } from "../../submissions/submission-list";
import { SubmissionListError } from "../../submissions/list-error";

export const metadata = {
  title: "Person",
  robots: "noindex, nofollow",
};

export default function PersonPage({
  params,
  searchParams,
}: {
  params: Promise<{ personId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <Suspense
      fallback={
        <p role="status" className="text-sm text-muted-foreground">
          Loading Person…
        </p>
      }
    >
      <PersonContent params={params} searchParams={searchParams} />
    </Suspense>
  );
}

async function PersonContent({
  params,
  searchParams,
}: {
  params: Promise<{ personId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const staff = await staffUser();
  if (!staff) return <StaffAccessRequired />;

  const { personId } = await params;
  const { environment, cursor } = await searchParams;
  const basePath = `/crm/people/${encodeURIComponent(personId)}`;
  let record;
  try {
    record = await getPersonWithAssessmentSubmissions(personId, {
      environment,
      cursor,
    });
  } catch (error) {
    return (
      <SubmissionListError
        invalid={error instanceof InvalidSubmissionList}
        basePath={basePath}
      />
    );
  }
  if (!record) notFound();

  return (
    <div className="space-y-8">
      <section aria-labelledby="person-name" className="space-y-3">
        <div>
          <h1
            id="person-name"
            className="text-2xl font-semibold tracking-tight"
          >
            {record.person.firstName} {record.person.lastName}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">Person record</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <a
            href={`mailto:${record.person.email}`}
            className="underline underline-offset-4 focus-ring [overflow-wrap:anywhere]"
          >
            {record.person.email}
          </a>
          {record.person.phone ? (
            <a
              href={`tel:${record.person.phone}`}
              className="underline underline-offset-4 focus-ring"
            >
              {record.person.phone}
            </a>
          ) : null}
        </div>
      </section>
      <div>
        <h2 className="text-lg font-semibold">Assessment Submissions</h2>
        <SubmissionList
          page={{ items: record.submissions, nextCursor: record.nextCursor }}
          basePath={basePath}
          liveOnly={environment === "live"}
          hasCursor={cursor !== undefined}
        />
      </div>
    </div>
  );
}
