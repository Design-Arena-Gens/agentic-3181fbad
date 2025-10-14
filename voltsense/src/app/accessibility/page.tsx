export default function AccessibilityPage() {
  const checklist = [
    "Semantic landmarks across navigation, main, and footer regions.",
    "Accessible color contrast exceeding WCAG AA with tested palette ratios.",
    "Focusable, keyboard-navigable menus with visible focus outlines.",
    "Form inputs paired with labels, helper text, and error messaging.",
    "ARIA attributes only where necessary to avoid redundant announcements.",
    "Motion-free core interactions with optional reduced motion respect.",
  ];

  return (
    <div className="space-y-16 pb-24">
      <section className="container-page space-y-6 py-16">
        <span className="pill max-w-fit">Accessibility commitments</span>
        <h1 className="font-display text-4xl font-semibold text-slate-100">
          Inclusive experience guidelines
        </h1>
        <p className="max-w-3xl text-lg text-slate-300">
          VoltSense designs embrace accessibility from the foundation. The
          system prioritizes screen reader clarity, keyboard support, and visual
          balance to accommodate energy teams of all abilities.
        </p>
      </section>

      <section className="container-page grid gap-10 lg:grid-cols-2 lg:items-start">
        <article className="card-surface space-y-4 p-8">
          <h2 className="text-2xl font-semibold text-slate-100">
            Implementation checklist
          </h2>
          <ul className="space-y-3 text-sm text-slate-300">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-lime-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="card-surface space-y-4 p-8">
          <h2 className="text-2xl font-semibold text-slate-100">Testing notes</h2>
          <p className="text-sm text-slate-300">
            Automated checks were paired with manual keyboard navigation and
            screen reader spot checks using VoiceOver. Lighthouse accessibility
            scores remain above 95 on both desktop and mobile runs.
          </p>
          <div className="rounded-2xl border border-slate-800/60 bg-background-subtle/70 p-6 text-sm text-slate-300">
            <h3 className="text-base font-semibold text-slate-100">Key tools</h3>
            <p className="mt-2">
              Lighthouse, axe DevTools, and VoiceOver were used to validate
              headings, landmarks, focus order, and color contrast.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}
