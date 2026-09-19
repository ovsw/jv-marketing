import { Suspense } from "react";
import { randomUUID } from "node:crypto";
import { staffUser } from "@/lib/crm/auth";
import { listTestInquiries } from "@/lib/crm/inquiries";
import { InquiryWorkspace } from "./inquiry-workspace";
import { StaffAccessRequired } from "../staff-access-required";

export const metadata = {
  title: "Test inquiries",
  robots: "noindex, nofollow",
};

export default function CrmPage() {
  return (
    <Suspense
      fallback={
        <p role="status" className="text-sm text-muted-foreground">
          Loading inquiries…
        </p>
      }
    >
      <CrmContent />
    </Suspense>
  );
}

async function CrmContent() {
  const staff = await staffUser();
  if (!staff) return <StaffAccessRequired />;
  const inquiries = await listTestInquiries();
  return (
    <InquiryWorkspace
      inquiryId={randomUUID()}
      staffEmail={staff.email}
      inquiries={inquiries.map(
        ({
          id,
          recipient,
          createdAt,
          jobStatus,
          emailId,
          smsStatus,
          lastError,
          updatedAt,
          sms,
          workflow,
        }) => ({
          id,
          recipient,
          createdAt: createdAt.toISOString(),
          jobStatus,
          emailId,
          smsStatus,
          lastError,
          updatedAt: updatedAt.toISOString(),
          workflow,
          sms: sms && {
            recipient: sms.recipient,
            message: sms.message,
            simulatedAt: sms.simulatedAt.toISOString(),
          },
        }),
      )}
    />
  );
}
