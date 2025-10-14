interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  const baseClass =
    "inline-flex items-center gap-2 rounded-full bg-surface px-3 py-2 shadow-card";

  return (
    <div className={`${baseClass} ${className}`} aria-label="VoltSense logo">
      <div className="relative h-8 w-8">
        <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-volt-200 via-volt-500 to-lime-500" />
        <span className="absolute inset-1 rounded-2xl bg-background-subtle" />
        <svg
          viewBox="0 0 24 24"
          className="absolute inset-1 text-volt-200"
          role="presentation"
        >
          <path
            d="M14.92 3.5a1 1 0 0 1 .91 1.41l-1.9 4.43h3.62a1 1 0 0 1 .84 1.54l-7.54 11.5a1 1 0 0 1-1.82-.74l1.72-6.4H6.64a1 1 0 0 1-.88-1.48l4.92-9.88A1 1 0 0 1 11.6 3h3.32Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <span className="font-display text-lg font-semibold text-slate-50">
        VoltSense
      </span>
    </div>
  );
}
