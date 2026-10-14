"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function MobileNav({
  links,
  menuLabel,
  closeLabel,
}: {
  links: { href: string; label: string }[];
  menuLabel: string;
  closeLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? closeLabel : menuLabel}
        onClick={() => setOpen((v) => !v)}
        className="-mr-2 flex size-11 items-center justify-center rounded hover:bg-mist"
      >
        <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
          {open ? (
            <path d="m5 5 12 12M17 5 5 17" stroke="currentColor" strokeWidth="1.8" />
          ) : (
            <path d="M3 6.5h16M3 11h16M3 15.5h16" stroke="currentColor" strokeWidth="1.8" />
          )}
        </svg>
      </button>
      <nav
        id="mobile-nav"
        aria-label={menuLabel}
        hidden={!open}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-var(--header-h))] overflow-y-auto border-b border-line bg-paper"
      >
        <ul className="wrap py-2">
          {links.map((link) => (
            <li key={link.href} className="border-b border-line last:border-0">
              <Link
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className="flex min-h-13 items-center text-lg text-ink no-underline aria-[current]:font-semibold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
