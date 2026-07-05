export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="32" height="32" rx="9" fill="#4F46E5" />
        <path
          d="M8 19L14 11L18 15L24 7"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="21" cy="20" r="2.2" fill="white" />
      </svg>
      <span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
        SiteLaunch
      </span>
    </span>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect width="32" height="32" rx="9" fill="#4F46E5" />
      <path
        d="M8 19L14 11L18 15L24 7"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="21" cy="20" r="2.2" fill="white" />
    </svg>
  );
}
