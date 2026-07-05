export function ServiceIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    design: (
      <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    responsive: (
      <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
        <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 18h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    forms: (
      <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 9h10M7 13h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    seo: (
      <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    domain: (
      <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    support: (
      <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
        <path d="M12 3a6 6 0 00-6 6v3l-2 2v1h16v-1l-2-2V9a6 6 0 00-6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M10 20a2 2 0 004 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  };

  return icons[name] ?? icons.design;
}
