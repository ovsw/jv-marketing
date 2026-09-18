import { UserButton } from "@clerk/nextjs";

/** Shown to a signed-in account that is not on the staff list. */
export function StaffAccessRequired() {
  return (
    <main className="mx-auto max-w-lg space-y-4 p-8">
      <h1 className="text-2xl font-semibold">Staff access required</h1>
      <p>This account does not have access to the CRM.</p>
      <UserButton />
    </main>
  );
}
