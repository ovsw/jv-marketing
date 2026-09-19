"use client";

import { useState } from "react";
import Link from "next/link";
import { FlaskConical } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { receivedTime } from "../format";

export type PersonListRow = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  latestOriginBrand: string;
  liveSubmissionCount: number;
  testSubmissionCount: number;
  lastReceivedAt: string;
};

/** A Person who has only ever sent test-environment submissions. */
function isTestOnly(person: PersonListRow) {
  return person.liveSubmissionCount === 0;
}

export function PeopleList({ people }: { people: PersonListRow[] }) {
  const [liveOnly, setLiveOnly] = useState(false);
  const hasTestSubmissions = people.some((person) => person.testSubmissionCount > 0);
  const visiblePeople = liveOnly
    ? people.filter((person) => !isTestOnly(person))
    : people;

  return (
    <section aria-labelledby="people-heading" className="space-y-4">
      <div className="flex flex-col gap-4 border-b pb-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 id="people-heading" className="text-2xl font-semibold tracking-tight">
            People
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Everyone who has completed an Assessment, including submissions from
            preview websites. Newest submission first.
          </p>
        </div>
        {hasTestSubmissions ? (
          <label className="inline-flex min-h-9 cursor-pointer items-center gap-2 text-sm font-medium">
            <input
              type="checkbox"
              checked={liveOnly}
              onChange={(event) => setLiveOnly(event.currentTarget.checked)}
              className="size-4 rounded border-input accent-primary focus-ring"
            />
            Live only
          </label>
        ) : null}
      </div>

      {visiblePeople.length === 0 ? (
        <div className="py-12 text-center">
          <p className="font-medium">
            {people.length === 0 ? "No People yet" : "No live People"}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {people.length === 0
              ? "A Person appears here after their first Assessment Submission."
              : "Clear Live only to see People with preview or test submissions."}
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-muted-foreground">
              <tr className="border-b">
                <th scope="col" className="py-2 pr-4 font-medium">
                  Name
                </th>
                <th scope="col" className="py-2 pr-4 font-medium">
                  Email
                </th>
                <th scope="col" className="py-2 pr-4 font-medium">
                  Latest Origin Brand
                </th>
                <th scope="col" className="py-2 pr-4 text-right font-medium">
                  Submissions
                </th>
                <th scope="col" className="py-2 font-medium">
                  Last received
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {visiblePeople.map((person) => (
                <tr key={person.id} data-testid="person">
                  <td className="py-3 pr-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <Link
                        href={`/crm/people/${person.id}`}
                        className="font-medium underline-offset-4 hover:underline focus-ring"
                      >
                        {person.firstName} {person.lastName}
                      </Link>
                      {isTestOnly(person) ? (
                        <Badge variant="outline" className="gap-1">
                          <FlaskConical aria-hidden="true" className="size-3" />
                          Preview / test
                        </Badge>
                      ) : null}
                    </div>
                  </td>
                  <td className="py-3 pr-4">{person.email}</td>
                  <td className="py-3 pr-4">{person.latestOriginBrand}</td>
                  <td className="py-3 pr-4 text-right tabular-nums">
                    {person.liveSubmissionCount +
                      (liveOnly ? 0 : person.testSubmissionCount)}
                  </td>
                  <td className="py-3 whitespace-nowrap">
                    <time dateTime={person.lastReceivedAt}>
                      {receivedTime.format(new Date(person.lastReceivedAt))}
                    </time>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
