import Link from "next/link";
import { RefreshButton } from "../refresh-button";

export function SubmissionListError({
  invalid,
  basePath,
}: {
  invalid: boolean;
  basePath: string;
}) {
  return (
    <div role="alert" className="space-y-3 py-8">
      <h2 className="text-lg font-semibold">
        {invalid
          ? "Invalid submission list link"
          : "Could not load Assessment Submissions"}
      </h2>
      <p className="text-sm text-muted-foreground">
        {invalid
          ? "Reset the list to see the newest submissions."
          : "Use Refresh results to try again."}
      </p>
      {invalid ? (
        <Link
          href={basePath}
          className="inline-block py-2 text-sm underline underline-offset-4 focus-ring"
        >
          Reset list
        </Link>
      ) : (
        <RefreshButton pendingSince={null} />
      )}
    </div>
  );
}
