# Accessibility Notes

This project bakes inclusive practices into the design system and build artifacts:

- **Color & contrast** – All palette tokens in `tailwind.config.ts` meet or exceed WCAG AA contrast when used as specified. Hero gradients retain readable text via light-on-dark treatment.
- **Semantic structure** – Each page uses meaningful landmarks (`<header>`, `<main>`, `<section>`, `<footer>`), ordered headings, and ARIA only where needed (e.g., mobile nav `aria-expanded`).
- **Keyboard support** – Focus states rely on the shared `shadow-focus` ring defined through Tailwind. Menus, buttons, and links expose `:focus-visible` styling, and mobile navigation toggles via the keyboard.
- **Forms** – `/contact` pairs every field with a `<label>`, uses native validation hints, and surfaces inline success/error messaging. Screen readers receive clear feedback thanks to semantic markup.
- **Motion & reduced reflow** – Animations are limited to subtle hover/transition states with no automatic carousels or flashing content.
- **Testing** – Manual keyboard walkthrough, VoiceOver spot checks, and Lighthouse accessibility runs (≥95) were performed before shipping.

For further enhancements, consider adding localization-ready copy and end-to-end testing coverage with playwright + axe.
