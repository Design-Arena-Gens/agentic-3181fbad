import Link from "next/link";
import { Logo } from "./logo";

const footerLinks = {
  Product: [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Contact", href: "/contact" },
  ],
  Company: [
    { label: "Team", href: "/#how-it-works" },
    { label: "Press", href: "mailto:press@voltsense.io" },
    { label: "Careers", href: "mailto:careers@voltsense.io" },
  ],
  Resources: [
    { label: "Design System", href: "/design-system" },
    { label: "Accessibility", href: "/accessibility" },
    { label: "API Reference", href: "/features#mqtt-example" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800/70 bg-background-subtle">
      <div className="container-page grid gap-12 py-12 md:grid-cols-3">
        <div className="space-y-4">
          <Logo className="bg-surface/60 shadow-none" />
          <p className="max-w-sm text-sm text-slate-300">
            VoltSense delivers adaptive energy intelligence, predictive
            monitoring, and effortless integrations so every household can
            reduce waste without compromising comfort.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <Link href="mailto:hello@voltsense.io">hello@voltsense.io</Link>
            <span aria-hidden="true" className="text-slate-700">
              •
            </span>
            <span>San Francisco & Remote</span>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {Object.entries(footerLinks).map(([section, items]) => (
            <div key={section} className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
                {section}
              </h3>
              <ul className="space-y-2 text-sm text-slate-400">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="transition hover:text-volt-100"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
            Newsletter
          </h3>
          <p className="text-sm text-slate-400">
            Receive monthly insights on energy automation, tariffs, and smart
            home integrations.
          </p>
          <form className="flex w-full max-w-sm flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@home.io"
              className="w-full rounded-full border border-slate-700 bg-background px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-volt-400 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-volt-500 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-volt-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-volt-200"
            >
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-slate-800/60 py-6">
        <div className="container-page flex flex-col gap-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} VoltSense Labs. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="hover:text-volt-100">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-volt-100">
              Terms
            </Link>
            <Link href="/sitemap.xml" className="hover:text-volt-100">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
