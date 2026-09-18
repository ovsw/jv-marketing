import { Suspense } from "react";
import { staffUser } from "@/lib/crm/auth";
import { listPeople } from "@/lib/crm/people";
import { CrmShell } from "../shell";
import { StaffAccessRequired } from "../staff-access-required";
import { PeopleList } from "./people-list";

export const metadata = {
  title: "People",
  robots: "noindex, nofollow",
};

export default function PeoplePage() {
  return (
    <Suspense
      fallback={
        <main className="p-8 text-sm text-muted-foreground">
          Loading People…
        </main>
      }
    >
      <PeopleContent />
    </Suspense>
  );
}

async function PeopleContent() {
  const staff = await staffUser();
  if (!staff) return <StaffAccessRequired />;

  const people = await listPeople();

  return (
    <CrmShell currentPage="People" skipLabel="Skip to People" activeNav="people">
      <PeopleList
        people={people.map(
          ({
            id,
            firstName,
            lastName,
            email,
            latestOriginBrand,
            liveSubmissionCount,
            testSubmissionCount,
            lastReceivedAt,
          }) => ({
            id,
            firstName,
            lastName,
            email,
            latestOriginBrand,
            liveSubmissionCount,
            testSubmissionCount,
            lastReceivedAt: lastReceivedAt.toISOString(),
          }),
        )}
      />
    </CrmShell>
  );
}
