/**
 * Infinite scrolling marquee strip.
 * props: items: [{ text }], className, reversed
 */
export default function Marquee({ items = [], className = '', dark = false }) {
  const doubled = [...items, ...items];
  return (
    <div className={`relative overflow-hidden py-5 ${dark ? 'bg-[#F1F5F9] border-y border-[#3E6FB5]/20' : 'bg-[#3E6FB5]/10 border-y border-[#3E6FB5]/20'} ${className}`}>
      <div className="marquee-track items-center">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`mx-8 flex items-center gap-8 text-sm md:text-base tracking-[0.25em] uppercase font-bold whitespace-nowrap ${
              dark ? 'text-[#3E6FB5]' : 'text-[#0B2D5B]/85'
            }`}
          >
            {item.text}
            <svg className="w-3 h-3 text-[#3E6FB5]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
