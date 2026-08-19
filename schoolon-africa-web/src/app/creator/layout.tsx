import { PortalShell } from "@/components/portal-shell";
import type { ReactNode } from "react";

const links = [
  { href: "/creator/dashboard", label: "Dashboard" },
  { href: "/creator/content", label: "Content" },
  { href: "/creator/earnings", label: "Earnings" },
];

export default function CreatorLayout({ children }: { children: ReactNode }) {
  return (
    <PortalShell
      title="Creator portal"
      description="Manage uploads, learner-facing content, and payouts."
      links={links}
    >
      {children}
    </PortalShell>
  );
}
