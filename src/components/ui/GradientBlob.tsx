interface Props {
  className?: string;
  variant?: "indigo" | "green" | "sky";
}

/** Soft mesh-gradient blob used as ambient decoration behind hero/CTA sections. */
export function GradientBlob({ className = "", variant = "indigo" }: Props) {
  const stops: Record<string, [string, string]> = {
    indigo: ["#2b3d97", "#29a9e1"],
    green: ["#699b41", "#93c968"],
    sky: ["#29a9e1", "#699b41"],
  };
  const [from, to] = stops[variant];
  const id = `blob-${variant}`;

  return (
    <svg className={className} viewBox="0 0 600 600" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${id})`}
        d="M429.5 91.5Q509 183 462 291.5Q415 400 314 462Q213 524 128 442.5Q43 361 60 244Q77 127 184 65.5Q291 4 360 45Q429 86 429.5 91.5Z"
      />
    </svg>
  );
}
