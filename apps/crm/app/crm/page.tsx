import { Suspense } from "react";
import { staffUser } from "@/lib/crm/auth";
import {
  InvalidSubmissionList,
  listAssessmentSubmissions,
} from "@/lib/crm/submissions";
import { StaffAccessRequired } from "./staff-access-required";
import { SubmissionList } from "./submissions/submission-list";
import { SubmissionListError } from "./submissions/list-error";

export const metadata = {
  title: "Assessment Submissions",
  robots: "noindex, nofollow",
};

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default function CrmPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <Suspense
      fallback={
        <p role="status" className="text-sm text-muted-foreground">
          Loading Assessment Submissions…
        </p>
      }
    >
      <CrmContent searchParams={searchParams} />
    </Suspense>
  );
}

async function CrmContent({ searchParams }: { searchParams: SearchParams }) {
  const staff = await staffUser();
  if (!staff) return <StaffAccessRequired />;
  const { environment, cursor } = await searchParams;
  let page;
  try {
    page = await listAssessmentSubmissions({ environment, cursor });
  } catch (error) {
    return (
      <SubmissionListError
        invalid={error instanceof InvalidSubmissionList}
        basePath="/crm"
      />
    );
  }
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold tracking-tight">
        Assessment Submissions
      </h1>
      <p className="text-sm text-muted-foreground">
        Saved website assessments across People. Open a submission to read its
        contact details, answers, and consent.
      </p>
      <SubmissionList
        page={page}
        basePath="/crm"
        liveOnly={environment === "live"}
        hasCursor={cursor !== undefined}
        showPersonLink
      />
    </div>
  );
}
