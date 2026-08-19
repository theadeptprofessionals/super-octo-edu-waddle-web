import { PortalShell } from "@/components/portal-shell";
import type { ReactNode } from "react";

const links = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/cohorts", label: "Cohorts" },
  { href: "/admin/announcements", label: "Announcements" },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <PortalShell
      title="Admin portal"
      description="Manage cohorts, programs, and announcements from one workspace."
      links={links}
    >
      {children}
    </PortalShell>
  );
}
