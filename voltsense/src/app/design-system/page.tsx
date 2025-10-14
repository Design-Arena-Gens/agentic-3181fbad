import type { CSSProperties } from "react";
import { designSystem } from "@/lib/design-system";

const colorEntries = Object.entries(designSystem.colors);
const spacingEntries = Object.entries(designSystem.spacing);
const typographyEntries = Object.entries(
  designSystem.typography,
) as [string, Record<string, string | number>][];

export default function DesignSystemPage() {
  return (
    <div className="space-y-20 pb-24">
      <section className="container-page space-y-6 py-16">
        <span className="pill max-w-fit">Design foundations</span>
        <h1 className="font-display text-4xl font-semibold text-slate-100">
          VoltSense design system
        </h1>
        <p className="max-w-3xl text-lg text-slate-300">
          Unified tokens for color, typography, spacing, and component patterns
          keep product and marketing experiences cohesive. Every token maps to a
          Tailwind utility or CSS variable used throughout this site.
        </p>
      </section>

      <section className="container-page space-y-12">
        <div>
          <h2 className="text-2xl font-semibold text-slate-100">Color</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            Brand colors blend deep-night neutrals with vibrant electric teals
            and lime accents. Tokens are available via Tailwind theme extensions
            (e.g. <code className="text-volt-200">bg-volt-500</code>).
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {colorEntries.map(([group, shades]) => (
              <article key={group} className="card-surface space-y-4 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
                  {group}
                </h3>
                <div className="grid gap-3">
                  {Object.entries(shades as Record<string, string>).map(
                    ([token, value]) => (
                      <div key={token} className="flex items-center gap-4">
                        <span
                          className="h-12 w-12 rounded-xl border border-slate-800"
                          style={{ backgroundColor: value }}
                        />
                        <div>
                          <p className="font-medium text-slate-100">
                            {group}.{token}
                          </p>
                          <p className="text-xs text-slate-500">{value}</p>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-slate-100">Typography</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            Display typography uses Space Grotesk for expressive headlines, with
            Inter providing legible UI-friendly body copy. Tailwind utilities map
            to these tokens (e.g. <code className="text-volt-200">font-display</code>).
          </p>
          <div className="mt-6 space-y-4">
            {typographyEntries.map(([token, styles]) => (
              <div
                key={token}
                className="card-surface flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                    {token}
                  </p>
                  <p className="text-xs text-slate-500">
                    {Object.entries(styles)
                      .map(([key, value]) => `${key}: ${value}`)
                      .join(" • ")}
                  </p>
                </div>
                {(() => {
                  const previewStyles: CSSProperties = {
                    fontSize: styles.fontSize as string,
                    lineHeight: styles.lineHeight as string,
                    fontWeight: Number(styles.fontWeight ?? 400),
                  };

                  if (styles.letterSpacing) {
                    previewStyles.letterSpacing = styles.letterSpacing as string;
                  }
                  if (styles.textTransform) {
                    previewStyles.textTransform =
                      styles.textTransform as CSSProperties["textTransform"];
                  }

                  return (
                    <p className="text-slate-100" style={previewStyles}>
                      VoltSense energy intelligence
                    </p>
                  );
                })()}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-slate-100">Spacing</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            Modular spacing steps provide consistent rhythm across layouts and
            components.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {spacingEntries.map(([token, value]) => (
              <div key={token} className="card-surface flex items-center gap-4 p-5">
                <span className="rounded-full bg-volt-500/10 px-3 py-1 text-xs font-semibold text-volt-200">
                  {token}
                </span>
                <div className="flex-1">
                  <div
                    className="rounded-full bg-volt-500/40"
                    style={{ height: value }}
                  />
                </div>
                <span className="text-xs text-slate-400">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="card-surface space-y-4 p-6">
            <h2 className="text-2xl font-semibold text-slate-100">Buttons</h2>
            <p className="text-sm text-slate-400">
              Primary buttons use neon teal fills for clear hierarchy while
              secondary and ghost buttons rely on outlined treatments.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className={designSystem.components.button.default}>
                Primary
              </button>
              <button className={designSystem.components.button.secondary}>
                Secondary
              </button>
              <button className={designSystem.components.button.ghost}>
                Ghost
              </button>
            </div>
          </article>
          <article className="card-surface space-y-4 p-6">
            <h2 className="text-2xl font-semibold text-slate-100">Cards & fields</h2>
            <p className="text-sm text-slate-400">
              Reusable shells enforce rounded radii, ambient shadows, and
              accessible focus rings.
            </p>
            <div className="space-y-4">
              <div className={designSystem.components.card.base}>
                <h3 className="text-sm font-semibold text-slate-200">Card</h3>
                <p className="text-xs text-slate-400">
                  `card-surface` utility pairs dark surfaces with a subtle glow
                  and border.
                </p>
              </div>
              <div className="space-y-2">
                <label className={designSystem.components.field.label}>
                  Field label
                </label>
                <input
                  className={designSystem.components.field.base}
                  placeholder="Placeholder copy"
                />
                <p className={designSystem.components.field.hint}>
                  Hint text sits at 12px with muted slate color.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
