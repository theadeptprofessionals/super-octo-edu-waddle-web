import { PortalShell } from "@/components/portal-shell";
import type { ReactNode } from "react";

const links = [
  { href: "/mentor/dashboard", label: "Dashboard" },
  { href: "/mentor/students/1", label: "Students" },
  { href: "/mentor/reviews", label: "Reviews" },
];

export default function MentorLayout({ children }: { children: ReactNode }) {
  return (
    <PortalShell
      title="Mentor portal"
      description="Coordinate weekly student reviews and intervention notes."
      links={links}
    >
      {children}
    </PortalShell>
  );
}
