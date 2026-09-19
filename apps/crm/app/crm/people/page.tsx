import { Suspense } from "react";
import { staffUser } from "@/lib/crm/auth";
import { listPeople } from "@/lib/crm/people";
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
        <p role="status" className="text-sm text-muted-foreground">
          Loading People…
        </p>
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
  );
}
