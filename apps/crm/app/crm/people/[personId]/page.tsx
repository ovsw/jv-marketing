import { Suspense } from "react";
import { notFound } from "next/navigation";
import { staffUser } from "@/lib/crm/auth";
import { getPersonWithAssessmentSubmissions } from "@/lib/crm/people";
import { StaffAccessRequired } from "../../staff-access-required";
import { PersonSubmissions } from "./person-submissions";

export const metadata = {
  title: "Person",
  robots: "noindex, nofollow",
};

export default function PersonPage({
  params,
}: {
  params: Promise<{ personId: string }>;
}) {
  return (
    <Suspense
      fallback={
        <p role="status" className="text-sm text-muted-foreground">
          Loading Person…
        </p>
      }
    >
      <PersonContent params={params} />
    </Suspense>
  );
}

async function PersonContent({
  params,
}: {
  params: Promise<{ personId: string }>;
}) {
  const staff = await staffUser();
  if (!staff) return <StaffAccessRequired />;

  const { personId } = await params;
  const record = await getPersonWithAssessmentSubmissions(personId);
  if (!record) notFound();

  return (
    <PersonSubmissions
      person={record.person}
      submissions={record.submissions.map((submission) => ({
        ...submission,
        receivedAt: submission.receivedAt.toISOString(),
      }))}
    />
  );
}
