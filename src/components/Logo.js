/**
 * JOOD logo: building mark stacked above the "JOOD" wordmark, drawn as shapes so it
 * looks the same everywhere. Uses currentColor (navy on light, white on dark).
 * showTagline adds "BUILDING CONTRACTING" underneath.
 */
export default function Logo({ className = '', showTagline = false, title = 'Jood Building Contracting' }) {
  return (
    <svg
      viewBox={showTagline ? '0 0 200 172' : '0 0 200 146'}
      className={className}
      fill="currentColor"
      direction="ltr"
      style={{ direction: 'ltr', unicodeBidi: 'isolate' }}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      {/* Building mark */}
      <g>
        <polygon points="56,82 56,52 73,44 73,82" />
        <polygon points="76,82 76,30 93,19 93,82" />
        <polygon points="96,82 96,13 113,0 113,82" />
        <polygon points="116,82 116,10 131,21 131,82" opacity="0.82" />
        <polygon points="134,82 134,42 147,49 147,82" />
      </g>
      {/* JOOD wordmark */}
      <g fill="none" stroke="currentColor" strokeWidth="9" strokeLinejoin="round">
        <path d="M34 98.5 V124 Q34 137.5 21 137.5 H15 Q4.5 137.5 4.5 126" strokeLinecap="butt" />
        <rect x="49.5" y="103" width="40" height="34.5" rx="12" />
        <rect x="103.5" y="103" width="40" height="34.5" rx="12" />
        <path d="M157.5 103 H180 Q195.5 103 195.5 120.25 Q195.5 137.5 180 137.5 H157.5 Z" />
      </g>
      {showTagline && (
        <text
          x="100"
          y="165"
          textAnchor="middle"
          fontFamily="'Montserrat', sans-serif"
          fontWeight="600"
          fontSize="13.5"
          letterSpacing="2.6"
        >
          BUILDING CONTRACTING
        </text>
      )}
    </svg>
  );
}
