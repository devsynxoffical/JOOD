/**
 * JOOD Building Contracting wordmark: building-bars mark + "JOOD" + "BUILDING CONTRACTING".
 * Uses currentColor so it can be white over dark heroes and navy on light backgrounds.
 */
export default function Logo({ className = '', showTagline = true, title = 'Jood Building Contracting' }) {
  return (
    <svg
      viewBox="0 0 218 64"
      className={className}
      fill="currentColor"
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      {/* Building mark */}
      <g>
        <path d="M2 50 L2 30 L9 26 L9 50 Z" opacity="0.55" />
        <path d="M12 50 L12 20 L19 14 L19 50 Z" opacity="0.75" />
        <path d="M22 50 L22 8 L30 2 L30 50 Z" />
        <path d="M33 50 L33 16 L40 21 L40 50 Z" opacity="0.75" />
        <rect x="0" y="52" width="42" height="2.4" />
      </g>
      {/* Wordmark */}
      <text
        x="52"
        y="38"
        fontFamily="'Montserrat', sans-serif"
        fontWeight="700"
        fontSize="34"
        letterSpacing="1.5"
      >
        JOOD
      </text>
      {showTagline && (
        <text
          x="53"
          y="54"
          fontFamily="'Montserrat', sans-serif"
          fontWeight="600"
          fontSize="8.6"
          letterSpacing="2.4"
        >
          BUILDING CONTRACTING
        </text>
      )}
    </svg>
  );
}
