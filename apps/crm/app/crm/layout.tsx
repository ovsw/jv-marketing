import { Suspense, type ReactNode } from "react";
import { staffUser } from "@/lib/crm/auth";
import { CrmShell } from "./shell";
import { StaffAccessRequired } from "./staff-access-required";

export default function CrmLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense
      fallback={
        <main className="p-8 text-sm text-muted-foreground">
          Loading workspace…
        </main>
      }
    >
      <StaffWorkspace>{children}</StaffWorkspace>
    </Suspense>
  );
}

async function StaffWorkspace({ children }: { children: ReactNode }) {
  const staff = await staffUser();
  if (!staff) return <StaffAccessRequired />;

  // The shared layout preserves the sidebar and header across CRM routes.
  // Each page and data operation still checks staff access independently.
  return <CrmShell>{children}</CrmShell>;
}
