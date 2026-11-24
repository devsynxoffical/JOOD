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
        <polygon points="56.6,82 56.6,66 69.9,60.7 69.9,82" />
        <polygon points="61.4,60.6 61.4,51.7 85.4,28.2 85.4,82 72.6,82 72.6,56.1" />
        <polygon points="92.3,82 92.3,13.8 109.9,0 109.9,82" />
        <polygon points="116.2,82 116.2,14.9 123.2,18.6 123.2,28.8 129.6,40.5 129.6,82" />
        <polygon points="131.9,82 131.9,52.2 143.4,57.5 143.4,82" />
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
