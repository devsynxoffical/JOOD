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
  testimonials,
} from '../data/content';

export default function HomePage() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="font-sans overflow-x-hidden bg-[#F8FAFC] text-[#0B2D5B]">
      {/* Navbar */}
      <Navbar links={navLinks} onContactClick={() => setShowContact(true)} isDarkHero={true} />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F8FAFC]">
        {/* Background image (light) */}
        <img
          src="/images/jood/hero-home-light.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        />
        {/* Soft light wash behind the centred text */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 60% 55% at 50% 45%, rgba(248,250,252,0.85) 0%, rgba(248,250,252,0.55) 55%, rgba(248,250,252,0) 100%)' }}
        />

        {/* Left edge social */}
        <div className="hidden xl:flex flex-col items-center gap-6 absolute left-8 top-1/2 -translate-y-1/2 z-20">
          <div className="w-[1px] h-20 bg-[#0B2D5B]/30" />
          <a href="https://www.instagram.com/joodcontractinguae" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/70 backdrop-blur border border-[#0B2D5B]/30 flex items-center justify-center text-[#0B2D5B] hover:bg-[#0B2D5B] hover:text-white transition-all duration-300">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
          </a>
          <div className="w-[1px] h-20 bg-[#0B2D5B]/30" />
        </div>

        {/* Centered content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 pt-28 pb-16 max-w-[980px]">
          <h1
            className="font-serif text-[#0B2D5B] font-light leading-[1.05] tracking-tight mb-4"
            style={{ fontSize: 'clamp(40px, 6.5vw, 92px)' }}
          >
            Jood Building Contracting
          </h1>
          <h2
            className="font-serif italic text-[#3E6FB5] mb-8"
            style={{ fontSize: 'clamp(22px, 3.2vw, 42px)' }}
          >
            Built well, built on time
          </h2>
          <div
            className="text-[#0B2D5B] uppercase font-semibold tracking-[0.3em] mb-8 -mt-3"
            style={{ fontSize: 'clamp(11px, 1.3vw, 15px)' }}
          >
            Quality, Punctuality and Honesty
          </div>
          <p
            className="text-[#1E293B] font-medium leading-[1.8] max-w-[680px] mb-9"
            style={{ fontSize: 'clamp(13px, 1.4vw, 17px)' }}
          >
            Jood Building Contracting delivers high-quality residential and commercial projects across the UAE, built on trust, expertise, and attention to detail.
          </p>
          <div
            className="text-[#0B2D5B] uppercase font-semibold tracking-[0.3em] mb-6"
            style={{ fontSize: 'clamp(10px, 1.2vw, 13px)' }}
          >
            Quality you trust. Results you see
          </div>
          <div className="flex items-center gap-4 mb-8" aria-hidden="true">
            <span className="block w-[60px] h-px bg-[#0B2D5B]/50" />
            <span className="block w-[6px] h-[6px] bg-[#0B2D5B] rotate-45" />
            <span className="block w-[60px] h-px bg-[#0B2D5B]/50" />
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#0B2D5B] text-white font-sans text-xs font-semibold tracking-[0.2em] uppercase px-10 py-4 rounded-full transition-all duration-300 hover:bg-[#3E6FB5] hover:shadow-[0_10px_30px_rgba(11,45,91,0.35)] hover:-translate-y-1"
          >
            Book a Free Consultation
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-70">
          <span className="text-[9px] tracking-[0.3em] uppercase text-[#0B2D5B]">Scroll</span>
          <div className="w-[1px] h-8 bg-[#0B2D5B]/60 animate-pulse" />
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
