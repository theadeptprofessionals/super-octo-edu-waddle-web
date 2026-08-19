import Link from "next/link";
import type { ReactNode } from "react";

type PortalLink = {
  href: string;
  label: string;
};

type PortalShellProps = {
  title: string;
  description: string;
  links: PortalLink[];
  children: ReactNode;
};

export function PortalShell({
  title,
  description,
  links,
  children,
}: PortalShellProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Schoolon Africa
            </p>
            <h1 className="text-xl font-semibold">{title}</h1>
            <p className="text-sm text-slate-600">{description}</p>
          </div>
          <div className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Secure portal
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 lg:flex-row">
        <aside className="w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:w-64">
          <nav className="space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </aside>

        <main className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          {children}
        </main>
      </div>
    </div>
  );
}
