import { PortalShell } from "@/components/portal-shell";
import type { ReactNode } from "react";

const links = [
  { href: "/parent/dashboard", label: "Dashboard" },
  { href: "/parent/children/1", label: "Children" },
  { href: "/parent/attendance", label: "Attendance" },
  { href: "/parent/results", label: "Results" },
  { href: "/parent/billing", label: "Billing" },
];

export default function ParentLayout({ children }: { children: ReactNode }) {
  return (
    <PortalShell
      title="Parent portal"
      description="Track attendance, progress, and billing with a child-focused view."
      links={links}
    >
      {children}
    </PortalShell>
  );
}
