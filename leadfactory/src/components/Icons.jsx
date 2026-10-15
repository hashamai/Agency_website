function Svg({ viewBox, size, className, children }) {
  return (
    <svg
      viewBox={viewBox}
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export const CheckIcon = (p) => (
  <Svg viewBox="0 0 16 16" {...p}><path d="M3 8.5l3.2 3L13 4.5" strokeWidth="2" /></Svg>
);

export const XIcon = (p) => (
  <Svg viewBox="0 0 16 16" {...p}><path d="M4 4l8 8M12 4l-8 8" strokeWidth="1.8" /></Svg>
);

export const ArrowIcon = (p) => (
  <Svg viewBox="0 0 20 20" {...p}><path d="M4 10h12M11 5l5 5-5 5" strokeWidth="2" /></Svg>
);

export const SearchIcon = (p) => (
  <Svg viewBox="0 0 20 20" {...p}>
    <circle cx="9" cy="9" r="5.5" strokeWidth="2" />
    <path d="M13.2 13.2L17 17" strokeWidth="2" />
  </Svg>
);

// Icons for the "Six ways we're different" cards, keyed by name in content.js.
const featurePaths = {
  search: (<><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>),
  lines: <path d="M4 6h16M4 12h10M4 18h6" />,
  trend: (<><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></>),
  person: (<><circle cx="12" cy="8" r="4" /><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" /></>),
  window: (<><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18" /></>),
  shield: <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" />,
};

export function FeatureIcon({ name }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false">
      {featurePaths[name]}
    </svg>
  );
}
