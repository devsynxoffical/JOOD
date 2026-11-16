import Reveal from './Reveal';

/**
 * Consistent light-theme closing CTA band used across pages.
 */
export default function CTA({
  image,
  kicker = 'Get Started Today',
  title = 'Ready to Transform Your Space?',
  subtitle = 'Book your free consultation today and let our experts bring your vision to life.',
  primaryLabel = 'Book Now — It’s Free',
  onPrimary,
  secondaryLabel,
  onSecondary,
}) {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#E2E8F0] border-t border-b border-[#3E6FB5]/30 text-[#0B2D5B]">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#3E6FB5]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-white/40 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-6 text-center">
        <Reveal direction="zoom">
          {/* Gold Kicker with decorative lines */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#3E6FB5]/60" />
            <span className="text-xs md:text-sm uppercase tracking-[0.45em] text-[#3E6FB5] font-bold">
              {kicker}
            </span>
            <span className="w-8 h-px bg-[#3E6FB5]/60" />
          </div>

          {/* Main Title */}
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#0B2D5B] font-light leading-tight tracking-tight mb-6">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-[#64748B] font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
            {subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={onPrimary}
              className="bg-[#0B2D5B] text-white hover:bg-[#3E6FB5] transition-all duration-300 text-xs uppercase tracking-[0.25em] px-10 py-4 font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>{primaryLabel}</span>
            </button>
            {secondaryLabel && onSecondary && (
              <button
                onClick={onSecondary}
                className="bg-white text-[#0B2D5B] border border-[#0B2D5B]/20 hover:border-[#3E6FB5] hover:text-[#3E6FB5] transition-all duration-300 text-xs uppercase tracking-[0.2em] px-10 py-4 font-bold rounded-full shadow-sm hover:shadow-md"
              >
                <span>{secondaryLabel}</span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
