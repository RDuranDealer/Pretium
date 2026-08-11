type P = { className?: string };

const base = "h-6 w-6";

export function Icon({ name, className }: { name: string; className?: string }) {
  const icons: Record<string, React.ReactNode> = {
    layers: (
      <>
        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 17 9 5 9-5" />
      </>
    ),
    spark: (
      <>
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 5 6v6c0 4.4 3 8.2 7 9 4-.8 7-4.6 7-9V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
        <path d="M16 5.5a3 3 0 0 1 0 5.9" />
        <path d="M18 14.5a6.5 6.5 0 0 1 3.5 5.5" />
      </>
    ),
    book: (
      <>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v14H6.5A2.5 2.5 0 0 0 4 19.5v-14Z" />
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H19v4H6.5A2.5 2.5 0 0 1 4 19.5Z" />
      </>
    ),
    check: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8.5 12.5 2.5 2.5 4.5-5" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3.5 7 8.5 6 8.5-6" />
      </>
    ),
    phone: (
      <path d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4 5.2 2 2 0 0 1 6 3Z" />
    ),
    pin: (
      <>
        <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M3.5 20.5 5 16.4A8.2 8.2 0 1 1 8.1 19.4l-4.6 1.1Z" />
        <path d="M9 9.2c.3 1 1 2.2 1.9 3 .9.9 2 1.6 3 1.9l1-1.2 2 .9v1.6c-1.9.5-4.4-.7-6.1-2.4C9 11.3 7.9 8.9 8.3 7h1.6l.9 2L9 9.2Z" />
      </>
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7.5 10.5V17M7.5 7.2v.1M11.5 17v-3.6a2.2 2.2 0 0 1 4.4 0V17" />
      </>
    ),
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? base}
      aria-hidden="true"
    >
      {icons[name] ?? icons.check}
    </svg>
  );
}

export function Logo({ className = "h-9 w-auto", light = false }: P & { light?: boolean }) {
  const main = light ? "#ffffff" : "#173a63";
  const soft = light ? "#84addb" : "#2f6bb0";
  return (
    <svg viewBox="0 0 240 48" className={className} role="img" aria-label="Pretium Consulting">
      <g>
        <path d="M6 8h14a11 11 0 0 1 0 22h-7v10H6V8Z" fill={main} />
        <path d="M13 15h6.5a4 4 0 0 1 0 8H13v-8Z" fill="#fff" />
        <path d="M28 30h6l6 10h-8l-4-10Z" fill={soft} />
      </g>
      <text
        x="54"
        y="26"
        fontFamily="system-ui, sans-serif"
        fontSize="19"
        fontWeight="700"
        letterSpacing="0.5"
        fill={main}
      >
        PRETIUM
      </text>
      <text
        x="55"
        y="39"
        fontFamily="system-ui, sans-serif"
        fontSize="10.5"
        fontWeight="500"
        letterSpacing="3.6"
        fill={soft}
      >
        CONSULTING
      </text>
    </svg>
  );
}
