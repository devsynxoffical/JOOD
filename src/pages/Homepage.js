import { useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';

import FourPillarsSection from '../components/FourPillarsSection';
import SpacesSection from '../components/SpacesSection';
import MasterySection from '../components/MasterySection';
import ProcessTimelineSection from '../components/ProcessTimelineSection';
import TestimonialSlider from '../components/TestimonialSlider';
import SectionFlip from '../components/SectionFlip';

import {
  navLinks,
  servicePackages,
  testimonials,
} from '../data/content';

export default function HomePage() {
  const [showContact, setShowContact] = useState(false);
  const [activePackage, setActivePackage] = useState('Premium');

  return (
    <div className="font-sans overflow-x-hidden bg-[#F8FAFC] text-[#0B2D5B]">
      {/* Navbar */}
      <Navbar links={navLinks} onContactClick={() => setShowContact(true)} isDarkHero={true} />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#06172F]">
        {/* Background image */}
        <img
          src="/images/jood/hero-building-blue.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#071F40]/35" />

        {/* Left edge social */}
        <div className="hidden xl:flex flex-col items-center gap-6 absolute left-8 top-1/2 -translate-y-1/2 z-20">
          <div className="w-[1px] h-20 bg-white/40" />
          <a href="https://www.instagram.com/joodcontractinguae" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/40 flex items-center justify-center text-white hover:bg-[#3E6FB5] transition-all duration-300">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
          </a>
          <div className="w-[1px] h-20 bg-white/40" />
        </div>

        {/* Centered content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 pt-28 pb-16 max-w-[980px]">
          <h1
            className="font-serif text-white font-light leading-[1.05] tracking-tight mb-4"
            style={{ fontSize: 'clamp(40px, 6.5vw, 92px)', textShadow: '2px 2px 6px rgba(7,31,64,0.8), 0 0 24px rgba(7,31,64,0.6)' }}
          >
            Jood Building Contracting
          </h1>
          <h2
            className="font-serif italic text-[#CBD5E1] mb-8"
            style={{ fontSize: 'clamp(22px, 3.2vw, 42px)', textShadow: '1px 1px 4px rgba(7,31,64,0.9)' }}
          >
            Building Trust. Delivering Excellence
          </h2>
          <p
            className="text-white font-medium leading-[1.8] max-w-[680px] mb-9"
            style={{ fontSize: 'clamp(13px, 1.4vw, 17px)', textShadow: '1px 1px 3px rgba(7,31,64,0.95), 0 0 10px rgba(7,31,64,0.7)' }}
          >
            Jood Building Contracting delivers high-quality villas, buildings, and warehouses across the UAE, built on trust, expertise, and attention to detail.
          </p>
          <div
            className="text-white uppercase font-semibold tracking-[0.3em] mb-6"
            style={{ fontSize: 'clamp(10px, 1.2vw, 13px)', textShadow: '1px 1px 3px rgba(7,31,64,0.95)' }}
          >
            Quality you trust. Results you see
          </div>
          <div className="flex items-center gap-4 mb-8" aria-hidden="true">
            <span className="block w-[60px] h-px bg-white/70" />
            <span className="block w-[6px] h-[6px] bg-white rotate-45" />
            <span className="block w-[60px] h-px bg-white/70" />
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#3E6FB5] to-[#0B2D5B] text-white font-sans text-xs font-semibold tracking-[0.2em] uppercase px-10 py-4 rounded-full transition-all duration-300 hover:shadow-[0_10px_30px_rgba(62,111,181,0.5)] hover:-translate-y-1"
          >
            Book a Free Consultation
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-70">
          <span className="text-[9px] tracking-[0.3em] uppercase text-white">Scroll</span>
          <div className="w-[1px] h-8 bg-white/70 animate-pulse" />
        </div>
      </section>

      {/* ================= 2. BEFORE & AFTER TRANSFORMATION SHOWCASE ================= */}


      {/* ================= 3. WE STAND FOR SOPHISTICATED SPACES ================= */}
      <SectionFlip>
        <SpacesSection onContactClick={() => setShowContact(true)} />
      </SectionFlip>

      {/* ================= 4. THE FOUR PILLARS SECTION ================= */}
      <SectionFlip id="pillars-section">
        <FourPillarsSection onContactClick={() => setShowContact(true)} />
      </SectionFlip>

      {/* ================= 5. THE MEDIUMS OUR MASTERY ================= */}
      <SectionFlip>
        <MasterySection onContactClick={() => setShowContact(true)} />
      </SectionFlip>

      {/* ================= 6. SPACES THAT SPEAK VOLUMES (TIMELINE) ================= */}
      <SectionFlip>
        <ProcessTimelineSection onContactClick={() => setShowContact(true)} />
      </SectionFlip>

      {/* ================= 7. PACKAGES & PRICING ================= */}
      <SectionFlip>
        <section className="py-24 md:py-32 bg-[#F8FAFC] text-[#0B2D5B] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-xs md:text-sm uppercase tracking-[0.45em] text-[#3E6FB5] font-semibold mb-4 flex items-center justify-center gap-3">
                <span className="w-6 h-px bg-[#3E6FB5]/50" />
                <span>Clear Pricing</span>
                <span className="w-6 h-px bg-[#3E6FB5]/50" />
              </div>
              <h2 className="font-serif text-4xl md:text-6xl text-[#0B2D5B] font-light leading-[1.08] tracking-tight">
                Construction &amp; Renovation <span className="font-light italic text-[#3E6FB5]">Packages</span>
              </h2>
              <p className="text-sm md:text-base text-[#64748B] font-normal mt-3 tracking-wide">
                Indicative price brackets for new builds and renovations, from standard to fully bespoke finishes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicePackages.map((pkg) => {
                const isSelected = activePackage === pkg.name;
                return (
                  <div
                    key={pkg.name}
                    onClick={() => setActivePackage(pkg.name)}
                    className={`rounded-3xl p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between border ${isSelected
                        ? 'bg-white text-[#0B2D5B] border-[#3E6FB5] shadow-xl'
                        : 'bg-white/80 text-[#0B2D5B] border-[#E2E8F0] hover:border-[#3E6FB5]/40 shadow-sm'
                      }`}
                  >
                    <div>
                      {pkg.featured && (
                        <span className="inline-block px-3 py-1 rounded-full bg-[#3E6FB5] text-white text-[9px] uppercase font-semibold tracking-widest mb-4 shadow-sm">
                          Most Popular
                        </span>
                      )}
                      <h3 className="font-serif text-2xl font-normal mb-1 text-[#0B2D5B] tracking-tight">
                        {pkg.name}
                      </h3>
                      <div className="text-xs text-[#3E6FB5] font-semibold tracking-wide mb-4">
                        {pkg.price}
                      </div>
                      <p className="text-xs mb-6 font-normal text-[#64748B] leading-relaxed">
                        {pkg.style}
                      </p>

                      <div className="space-y-2.5 mb-8">
                        {pkg.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2.5 text-xs font-normal text-[#0B2D5B]/85">
                            <span className="text-[#3E6FB5] font-bold">✓</span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowContact(true);
                      }}
                      className={`w-full py-3 rounded-full text-[10px] uppercase tracking-[0.25em] font-semibold transition-all ${isSelected
                          ? 'btn-gold shadow-md'
                          : 'bg-white text-[#0B2D5B] border border-[#3E6FB5]/40 hover:bg-[#3E6FB5] hover:text-white'
                        }`}
                    >
                      Get Quote
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </SectionFlip>

      {/* ================= 8. TESTIMONIALS SLIDER ================= */}
      <SectionFlip>
        <section className="py-24 bg-[#E2E8F0] text-[#0B2D5B]">
          <div className="max-w-5xl mx-auto px-5 md:px-8 text-center">
            <div className="inline-flex items-center gap-3 text-xs md:text-sm uppercase tracking-[0.35em] text-[#3E6FB5] font-semibold mb-6">
              <span className="w-8 h-[1px] bg-[#3E6FB5]" />
              Client Reviews
              <span className="w-8 h-[1px] bg-[#3E6FB5]" />
            </div>
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </section>
      </SectionFlip>

      {/* Footer & Modal */}
      <Footer onContactClick={() => setShowContact(true)} />
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </div>
  );
}
