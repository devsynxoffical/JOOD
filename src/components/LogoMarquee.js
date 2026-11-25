/**
 * Infinite scrolling strip of logos.
 * props: logos: [{ src, name }]
 */
export default function LogoMarquee({ logos = [], className = '' }) {
  const repeated = [...logos, ...logos, ...logos, ...logos];
  return (
    <div className={`relative overflow-hidden bg-white border-y border-[#3E6FB5]/20 py-6 md:py-8 ${className}`} dir="ltr">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />
      <div className="marquee-track items-center">
        {repeated.map((logo, i) => (
          <div key={i} className="mx-10 md:mx-16 flex items-center shrink-0">
            <img
              src={logo.src}
              alt={logo.name}
              title={logo.name}
              loading="lazy"
              className={`${logo.tall ? 'h-[72px] md:h-[104px]' : 'h-14 md:h-20'} w-auto object-contain`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
