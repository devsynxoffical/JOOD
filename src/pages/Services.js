import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';

import { navLinks } from '../data/content';

const J = '/images/jood/';

/* ---------- Design & Construction pillars ---------- */
function PlanIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="8" y="8" width="48" height="48" rx="3" />
      <path d="M8 26h22v30M30 40h26M42 8v18M42 26h14" />
      <circle cx="19" cy="17" r="3" />
    </svg>
  );
}
function BlueprintIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 54V22l22-14 22 14v32z" />
      <path d="M10 54h44M24 54V36h16v18M32 8v6" />
      <path d="M4 58l8-8M60 58l-8-8" />
    </svg>
  );
}
function CraneIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 58V10M24 58V10M18 10h40M18 16h34M52 16v14" />
      <path d="M18 22l6 6M24 22l-6 6M18 34l6 6M24 34l-6 6" />
      <rect x="46" y="30" width="12" height="10" />
      <path d="M10 58h22M8 10h10" />
    </svg>
  );
}

const pillars = [
  {
    icon: <PlanIcon />,
    title: 'Planning Tailored to Your Project',
    desc: 'Every project begins with a clear brief. We sit with you to understand your goals, budget, plot and timeline — whether it is a private villa, an industrial shed, a labour camp or another commercial building — and turn them into a practical plan that is ready to build.',
  },
  {
    icon: <BlueprintIcon />,
    title: 'Architectural Design, Engineering & Approvals',
    desc: 'Our architects and engineers prepare detailed architectural, structural and MEP drawings, and we manage the authority approvals and NOCs for you. The result is a design that balances appearance, function, cost and long-term durability.',
  },
  {
    icon: <CraneIcon />,
    title: 'Construction & Turnkey Delivery',
    desc: 'We turn approved drawings into finished residential and commercial buildings. From foundations and structure to finishing and handover, our site teams work to a clear programme with strict quality control.',
  },
];

/* ---------- Showcase ---------- */
const showcase = [
  { image: '/images/projects/villa-saif/01.webp', title: 'Villa Saif', tag: 'Residential' },
  { image: '/images/projects/shed-shady/01.webp', title: 'Shed Shady', tag: 'Commercial' },
  { image: `${J}labour-camp.webp`, title: 'Labour Camp', tag: 'Commercial' },
  { image: '/images/projects/villa-harmodi/01.webp', title: 'Villa Harmodi', tag: 'Residential' },
  { image: `${J}labour-camp-courtyard.webp`, title: 'Labour Accommodation', tag: 'Commercial' },
  { image: '/images/projects/villa-complex/01.webp', title: 'Villa Complex', tag: 'Residential' },
  { image: '/images/projects/shed-ideal/01.webp', title: 'Shed Ideal', tag: 'Commercial' },
];

/* ---------- Journey ---------- */
const journey = [
  { title: 'Concept & Planning', image: `${J}design-planning.webp`, desc: 'Brief, site study, budget and programme agreed with you.' },
  { title: 'Design & Approvals', image: '/images/projects/shed-shady/06.webp', desc: 'Architectural, structural and MEP drawings, plus authority approvals.' },
  { title: 'Construction', image: '/images/projects/shed-shady/05.webp', desc: 'Foundations, structure and MEP, built to a clear schedule.' },
  { title: 'Finishing & Handover', image: '/images/projects/sham-07-amal-ghareeb/01.webp', desc: 'Finishes, testing, snagging and a smooth handover of your keys.' },
];

function JourneySlider() {
  const [active, setActive] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setInterval(() => setActive((a) => (a + 1) % journey.length), 6000);
    return () => clearInterval(timer.current);
  }, []);

  const go = (i) => {
    clearInterval(timer.current);
    setActive((i + journey.length) % journey.length);
  };

  return (
    <div className="relative w-full h-[70vh] min-h-[460px] max-h-[760px] overflow-hidden bg-[#06172F]">
      {journey.map((s, i) => (
        <img
          key={s.title}
          src={s.image}
          alt={s.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === active ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

      <button
        type="button"
        onClick={() => go(active - 1)}
        aria-label="Previous step"
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/35 backdrop-blur text-white flex items-center justify-center hover:bg-[#3E6FB5] transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
      </button>
      <button
        type="button"
        onClick={() => go(active + 1)}
        aria-label="Next step"
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/35 backdrop-blur text-white flex items-center justify-center hover:bg-[#3E6FB5] transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
      </button>

      <div className="absolute bottom-0 left-0 right-0 px-5 md:px-24 pb-8 md:pb-12">
        <p className="text-white/85 text-sm md:text-base max-w-xl mb-6 min-h-[3rem]">{journey[active].desc}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4">
          {journey.map((s, i) => (
            <button
              key={s.title}
              type="button"
              onClick={() => go(i)}
              className="text-left group"
            >
              <span className="block h-[2px] bg-white/30 mb-3 overflow-hidden">
                <span className={`block h-full bg-white transition-all duration-700 ${i === active ? 'w-full' : 'w-0'}`} />
              </span>
              <span className={`font-serif text-base md:text-2xl font-light transition-colors ${i === active ? 'text-white' : 'text-white/55 group-hover:text-white/80'}`}>
                {s.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="font-sans overflow-x-hidden bg-white text-[#0B2D5B]">
      <Navbar links={navLinks} onContactClick={() => setShowContact(true)} isDarkHero={true} />

      {/* ================= HERO ================= */}
      <section className="relative h-[88vh] min-h-[600px] overflow-hidden bg-[#06172F]">
        <img
          src="/images/jood/hero-design-build.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#071F40]/50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 pt-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#CBD5E1]" />
            <span className="text-[11px] md:text-xs tracking-[0.4em] uppercase text-[#CBD5E1] font-bold">Ajman &amp; Umm Al Quwain</span>
            <span className="w-8 h-px bg-[#CBD5E1]" />
          </div>
          <h1 className="font-serif text-white font-bold leading-[1.1] tracking-tight text-4xl md:text-6xl lg:text-7xl max-w-4xl mb-6">
            Design &amp; Build Services
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-white/90 leading-relaxed">
            From the first drawing to the final handover, we take your project through one seamless
            process — planning, engineering and construction — so every residential and commercial
            project is delivered with care and attention to detail.
          </p>
        </div>
      </section>

      {/* ================= DESIGN & CONSTRUCTION ================= */}
      <section className="pt-10 md:pt-14 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0B2D5B] text-center mb-12">Design &amp; Construction</h2>
          <div className="grid md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <div className={`h-full px-0 md:px-8 py-8 md:py-0 ${i > 0 ? 'border-t md:border-t-0 md:border-l border-[#CBD5E1]' : ''} ${i === 0 ? 'md:pl-0' : ''}`}>
                  <div className="text-[#3E6FB5] mb-7">{p.icon}</div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-[#0B2D5B] leading-snug mb-5">{p.title}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SHOWCASE ================= */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[#0B2D5B] leading-tight">
            Showcasing Our Work:<br />Behind Every Build
          </h2>
          <div>
            <div className="text-[#64748B] mb-2">Follow our work</div>
            <a href="https://www.instagram.com/joodcontractinguae" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#0B2D5B] hover:text-[#3E6FB5] transition-colors">
              <Icon name="instagram" size={18} /> Instagram
            </a>
          </div>
        </div>
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 [scrollbar-width:thin]" style={{ paddingLeft: 'max(1.25rem, calc((100vw - 80rem) / 2 + 2rem))', paddingRight: '1.25rem', scrollPaddingLeft: 'max(1.25rem, calc((100vw - 80rem) / 2 + 2rem))' }}>
          {showcase.map((s) => (
            <Link
              key={s.title}
              to="/portfolio"
              className="group relative shrink-0 snap-start w-[70vw] sm:w-[300px] h-[420px] overflow-hidden bg-[#F1F5F9]"
            >
              <img src={s.image} alt={s.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/75 mb-1">{s.tag}</div>
                <div className="font-serif text-xl text-white font-light">{s.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= JOURNEY ================= */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-4xl mx-auto px-6 text-center mb-10">
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[#0B2D5B] mb-4">Our Design &amp; Build Journey</h2>
          <p className="text-sm text-[#64748B] leading-relaxed">
            From the first drawing to the final handover, we bring your project to life through a seamless
            process that combines planning, precision and quality construction.
          </p>
        </div>
        <JourneySlider />
      </section>

      {/* ================= PROJECT CTA ================= */}
      <section className="pb-24 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto border-t border-[#CBD5E1] pt-16 md:pt-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <h2 className="font-serif text-3xl md:text-5xl font-light text-[#0B2D5B]">Have a project in mind?</h2>
          <button
            type="button"
            onClick={() => setShowContact(true)}
            className="self-start md:self-auto border border-[#0B2D5B] text-[#0B2D5B] hover:bg-[#0B2D5B] hover:text-white transition-colors text-xs uppercase tracking-[0.25em] px-10 py-4"
          >
            Contact
          </button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer onContactClick={() => setShowContact(true)} />

      {/* ================= CONTACT MODAL ================= */}
      <ContactModal open={showContact} onClose={() => setShowContact(false)} />
    </div>
  );
}
