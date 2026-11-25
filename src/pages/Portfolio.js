import { useState } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import SectionHeading from '../components/SectionHeading';
import LogoMarquee from '../components/LogoMarquee';
import { partnerLogos } from '../data/partners';
import CTA from '../components/CTA';
import SectionFlip from '../components/SectionFlip';

import { navLinks } from '../data/content';
import { projects, projectCategories } from '../data/projects';
import Lightbox from '../components/Lightbox';

export default function PortfolioPage() {
  const [showContact, setShowContact] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [category, setCategory] = useState('All');

  const visibleProjects = projects.filter((p) => category === 'All' || p.category === category);
  const photos = visibleProjects.flatMap((p) => p.images.map((src) => ({ src, title: p.title, category: p.category })));
  const openPhoto = (src) => setLightbox(Math.max(0, photos.findIndex((ph) => ph.src === src)));

  return (
    <div className="font-sans overflow-x-hidden bg-[#F8FAFC] text-[#0B2D5B]">
      <Navbar links={navLinks} onContactClick={() => setShowContact(true)} isDarkHero={true} />

      {/* ================= CUSTOM PORTFOLIO HERO ================= */}
      <section className="min-h-[75vh] h-auto pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden flex items-center bg-[#06172F]">
        {/* Background Image */}
        <img
          src="/images/jood/hero-projects.webp"
          alt="Jood Building Contracting Portfolio Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#071F40]/55" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 h-full flex flex-col items-center justify-center text-center w-full z-10 py-10">
          
          {/* Centered Content with Radial Gradient Backdrop */}
          <div
            className="w-full max-w-4xl flex flex-col items-center"
            style={{
              padding: '3.5rem 2rem',
              borderRadius: '100px',
            }}
          >
            <div className="entrance-fade-up d-2 flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#CBD5E1]" />
              <span
                className="text-[11px] md:text-xs tracking-[0.45em] uppercase text-[#CBD5E1] font-bold"
                style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.9), 0 0 8px rgba(0, 0, 0, 0.6)' }}
              >
                JOOD BUILDING CONTRACTING • PROJECTS
              </span>
              <span className="w-8 h-px bg-[#CBD5E1]" />
            </div>

            <h1
              className="section-heading text-3xl md:text-4xl lg:text-[40px] xl:text-[46px] lg:whitespace-nowrap text-white leading-[1.15] mb-6 font-serif font-light tracking-tight text-center"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.6)' }}
            >
              OUR WORK{' '}
              <span
                className="text-[#A9C1E3] italic font-medium"
                style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.5)' }}
              >
                SPEAKS FOR ITSELF
              </span>
            </h1>

            <p
              className="entrance-fade-up d-4 text-sm md:text-lg text-white font-normal leading-relaxed mb-10 max-w-2xl text-center"
              style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.9), 0 0 10px rgba(0, 0, 0, 0.7)' }}
            >
              Behind every project is a team that cares about the details, from the first foundation to the final finish. See the results for yourself.
            </p>

            <div className="entrance-fade-up d-6 flex justify-center">
              <button
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#3E6FB5] text-white hover:bg-white hover:text-[#0B2D5B] transition-colors text-xs uppercase tracking-[0.2em] px-10 py-4 font-bold shadow-md rounded-full border border-transparent"
              >
                <span>Visit Our Projects</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MARQUEE ================= */}
      <LogoMarquee logos={partnerLogos} />

      {/* ================= GALLERY ================= */}
      <SectionFlip id="gallery">
        <section className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-[#3E6FB5]/10 blur-3xl pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-5 md:px-6">
            <SectionHeading
              kicker="Our Projects"
              title="Project Gallery"
              subtitle="Completed residential and commercial projects in Ajman and Umm Al Quwain."
            />

            <div className="flex flex-wrap justify-center gap-3 mb-14">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-7 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] rounded-full border transition-all duration-300 ${
                    category === cat
                      ? 'bg-[#3E6FB5] text-white border-[#3E6FB5] shadow-sm'
                      : 'bg-white text-[#0B2D5B]/70 border-[#0B2D5B]/20 hover:border-[#3E6FB5] hover:text-[#0B2D5B]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="space-y-16">
              {visibleProjects.map((project) => (
                  <div key={project.slug}>
                    <div className="flex items-end justify-between gap-4 border-b border-[#CBD5E1] pb-4 mb-6">
                      <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#0B2D5B]">
                        <span translate="no" className="notranslate">{project.title}</span>
                      </h3>
                      <span className="shrink-0 text-[10px] uppercase tracking-[0.25em] font-bold text-[#3E6FB5]">{project.category}</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {project.images.map((src, i) => (
                        <button
                          key={src}
                          onClick={() => openPhoto(src)}
                          aria-label={`View project ${i + 1}`}
                          className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-deep transition-shadow duration-500 ${
                            i === 0 ? 'col-span-2 row-span-2' : ''
                          }`}
                        >
                          <img
                            src={src}
                            alt={project.title}
                            loading="lazy"
                            className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                              i === 0 ? 'h-64 md:h-[416px]' : 'h-40 md:h-[200px]'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                    {project.videos && project.videos.length > 0 && (
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        {project.videos.map((v) => (
                          <video
                            key={v.src}
                            controls
                            playsInline
                            preload="none"
                            poster={v.poster}
                            aria-label={`${project.title} video`}
                            className="w-full h-64 md:h-72 rounded-2xl bg-[#06172F] object-contain shadow-md"
                          >
                            <source src={v.src} type="video/mp4" />
                          </video>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </section>
      </SectionFlip>

      {/* ================= CTA ================= */}
      <SectionFlip>
        <CTA
          image="/images/projects/villa-saif/01.webp"
          kicker="Residential • Commercial"
          title="Ready to Start Your Project?"
          subtitle="For residential and commercial projects, call +971 58 929 9581 or email info@joodbuildingcontracting.ae today."
          primaryLabel="Book a Free Consultation"
          onPrimary={() => setShowContact(true)}
        />
      </SectionFlip>

      {/* ================= FOOTER ================= */}
      <Footer onContactClick={() => setShowContact(true)} />

      {/* ================= CONTACT MODAL ================= */}
      <ContactModal open={showContact} onClose={() => setShowContact(false)} />

      {/* ================= LIGHTBOX ================= */}
      {lightbox !== null && (
        <Lightbox
          items={photos}
          index={lightbox}
          onIndex={setLightbox}
          onClose={() => setLightbox(null)}
          footer={(photo) => (
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-serif text-xl md:text-2xl text-white font-light tracking-tight">
                <span translate="no" className="notranslate">{photo.title}</span>
              </h3>
              <span className="text-[10px] uppercase tracking-widest text-[#A9C1E3] font-semibold">{photo.category}</span>
            </div>
          )}
        />
      )}
    </div>
  );
}
