"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-background/80 backdrop-blur">
      <div className="container-page flex items-center justify-between py-4">
        <Link href="/" className="transition-transform hover:-translate-y-0.5">
          <Logo className="bg-background-subtle/80 shadow-none" />
        </Link>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-surface p-2 text-slate-200 transition hover:border-volt-500 hover:text-volt-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt-400 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                menuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-2 py-1 transition-colors ${
                  isActive
                    ? "text-volt-100"
                    : "text-slate-300 hover:text-volt-100"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
                {isActive ? (
                  <span className="absolute inset-x-1 bottom-0 block h-0.5 rounded-full bg-volt-300" />
                ) : null}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-full border border-volt-500/60 bg-volt-500/10 px-5 py-2 text-sm font-semibold text-volt-100 transition hover:bg-volt-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:inline-flex"
        >
          <span>Get Started</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M5 12h14m0 0-6-6m6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
      {menuOpen ? (
        <nav className="border-t border-slate-800/80 bg-background-subtle/95 md:hidden">
          <ul className="container-page space-y-1 py-4 text-base text-slate-200">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 transition ${
                      isActive
                        ? "bg-surface text-volt-100"
                        : "hover:bg-surface/60 hover:text-volt-100"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{link.label}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="m9 5 7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 rounded-full bg-volt-500/15 px-4 py-3 font-semibold text-volt-100 transition hover:bg-volt-500/25"
              >
                Get Started
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14m0 0-6-6m6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
