import { useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import Marquee from '../components/Marquee';
import QuoteForm from '../components/QuoteForm';
import CTA from '../components/CTA';
import SectionFlip from '../components/SectionFlip';

import { navLinks, heroImages, contactInfo } from '../data/content';

const contactChannels = [
  { icon: 'phone', title: 'Call Us', desc: contactInfo.phone, href: `tel:${contactInfo.phoneRaw}` },
  { icon: 'whatsapp', title: 'WhatsApp', desc: contactInfo.phone, href: `https://wa.me/${contactInfo.whatsappRaw}` },
  { icon: 'mail', title: 'Email Us', desc: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: 'globe', title: 'Website', desc: contactInfo.website, href: null },
];

export default function ContactPage() {
  const [showContact, setShowContact] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSuccess = () => {
    setSent(true);
  };

  return (
    <div className="font-sans overflow-x-hidden bg-[#F8FAFC] text-[#0B2D5B]">
      <Navbar links={navLinks} onContactClick={() => setShowContact(true)} />

      {/* ================= CUSTOM CONTACT HERO ================= */}
      <section className="min-h-[70vh] h-auto pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden bg-[#F1F5F9] border-b border-[#0B2D5B]/10">
        <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-[#3E6FB5]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-white/40 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 h-full flex flex-col md:flex-row items-center justify-between gap-16">
          
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left z-10 w-full">
            <div className="entrance-fade-up d-1 text-[10px] tracking-[0.35em] uppercase text-[#0B2D5B]/50 mb-6 font-mono flex items-center justify-center md:justify-start gap-2 font-semibold">
              <span className="text-[#3E6FB5]">Home</span>
              <span className="text-[#0B2D5B]/30">/</span>
              <span className="font-medium text-[#0B2D5B]/80">Contact</span>
            </div>
            
            <div className="entrance-fade-up d-2 flex items-center justify-center md:justify-start gap-3 mb-6">
              <span className="w-8 h-px bg-[#3E6FB5]/50" />
              <span className="text-[11px] md:text-xs tracking-[0.4em] uppercase text-[#3E6FB5] font-bold">
                Get In Touch
              </span>
              <span className="w-8 h-px bg-[#3E6FB5]/50 md:hidden" />
            </div>

            <h1 className="section-heading text-4xl md:text-5xl lg:text-[60px] text-[#0B2D5B] leading-[1.1] mb-6 font-serif font-light tracking-tight">
              Let's Talk About<br/>
              <span className="block text-[#3E6FB5] italic font-medium mt-2">
                Your Project.
              </span>
            </h1>

            <p className="entrance-fade-up d-4 text-sm md:text-lg text-[#64748B] font-normal leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
              Whether it's a new villa, building or warehouse, or the renovation of an existing property — we reply within 24 hours to get you started.
            </p>

            <div className="entrance-fade-up d-5 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href={`tel:${contactInfo.phoneRaw}`} className="btn-gold px-8 py-4 text-xs uppercase tracking-[0.2em] shadow-md rounded-full">
                <span>Call Now</span>
                <Icon name="phone" size={14} />
              </a>
              <a
                href={`https://wa.me/${contactInfo.phoneRaw}?text=Hello!%20I%27m%20interested%20in%20your%20services.`}
                target="_blank"
                rel="noreferrer"
                className="btn-outline-gold px-8 py-4 text-xs uppercase tracking-[0.2em] bg-white rounded-full"
              >
                <span>WhatsApp Us</span>
                <Icon name="whatsapp" size={14} />
              </a>
            </div>
          </div>

          {/* Right Content (Quick Info Card) */}
          <div className="flex-1 w-full max-w-md mx-auto md:max-w-none relative z-10 pt-8 md:pt-0">
            <div className="entrance-fade-up d-7 bg-white border border-[#E2E8F0] rounded-3xl p-8 shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3E6FB5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-xl font-serif text-[#3E6FB5] mb-8 relative z-10 font-bold">Direct Contact</h3>
              
              <div className="space-y-6 relative z-10">
                <a href={`tel:${contactInfo.phoneRaw}`} className="flex items-start gap-5 group/item">
                  <div className="w-10 h-10 rounded-full border border-[#3E6FB5]/40 flex items-center justify-center text-[#3E6FB5] bg-[#F8FAFC] group-hover/item:bg-[#3E6FB5] group-hover/item:text-white transition-all shadow-sm">
                    <Icon name="phone" size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#0B2D5B]/50 mb-1 font-semibold">Phone</p>
                    <p className="text-sm font-semibold text-[#0B2D5B] group-hover/item:text-[#3E6FB5] transition-colors">{contactInfo.phone}</p>
                  </div>
                </a>

                <a href={`mailto:${contactInfo.email}`} className="flex items-start gap-5 group/item">
                  <div className="w-10 h-10 rounded-full border border-[#3E6FB5]/40 flex items-center justify-center text-[#3E6FB5] bg-[#F8FAFC] group-hover/item:bg-[#3E6FB5] group-hover/item:text-white transition-all shadow-sm">
                    <Icon name="mail" size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#0B2D5B]/50 mb-1 font-semibold">Email</p>
                    <p className="text-sm font-semibold text-[#0B2D5B] group-hover/item:text-[#3E6FB5] transition-colors">{contactInfo.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-5 group/item">
                  <div className="w-10 h-10 rounded-full border border-[#3E6FB5]/40 flex items-center justify-center text-[#3E6FB5] bg-[#F8FAFC] group-hover/item:bg-[#3E6FB5] group-hover/item:text-white transition-all shadow-sm">
                    <Icon name="clock" size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#0B2D5B]/50 mb-1 font-semibold">Hours</p>
                    <p className="text-sm font-semibold text-[#0B2D5B] group-hover/item:text-[#3E6FB5] transition-colors">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* ================= MARQUEE ================= */}
      <Marquee
        dark={false}
        items={[
          { text: "We Reply Within 24 Hours" },
          { text: "Free Consultation" },
          { text: "Call +971 58 929 9581" },
          { text: "info@joodbuildingcontracting.ae" },
        ]}
      />

      {/* ================= CONTACT SECTION ================= */}
      <SectionFlip id="contact-form">
        <section className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-[#3E6FB5]/10 blur-3xl pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-5 md:px-6">
            <SectionHeading
              light={false}
              kicker="Contact Us"
              title="Tell Us About Your Project"
              subtitle="Fill in the form and our team will get back to you within 24 hours."
            />

            <div className="grid lg:grid-cols-5 gap-8 items-start">
              {/* INFO COLUMN */}
              <Reveal direction="left" className="lg:col-span-2">
                <div className="space-y-4">
                  {contactChannels.map((c) => (
                    <div key={c.title} className="flex items-start gap-5 p-6 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#3E6FB5] transition-all duration-300 shadow-sm group">
                      <span className="w-12 h-12 shrink-0 rounded-2xl bg-gold-gradient flex items-center justify-center text-white group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-md">
                        <Icon name={c.icon} size={20} strokeWidth={2.2} />
                      </span>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.25em] text-[#3E6FB5] font-bold mb-1">{c.title}</div>
                        {c.href ? (
                          <a href={c.href} target={c.icon === 'whatsapp' ? '_blank' : undefined} rel="noreferrer" className="text-[#0B2D5B] font-semibold hover:text-[#3E6FB5] transition-colors">
                            {c.desc}
                          </a>
                        ) : (
                          <span className="text-[#0B2D5B] font-semibold">{c.desc}</span>
                        )}
                      </div>
                    </div>
                  ))}

                  <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] relative overflow-hidden shadow-md">
                    <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#3E6FB5]/10 blur-2xl pointer-events-none" />
                    <div className="relative">
                      <div className="text-[10px] uppercase tracking-[0.25em] text-[#3E6FB5] font-bold mb-2">Working Hours</div>
                      <div className="text-xl font-bold mb-1 text-[#0B2D5B]">{contactInfo.hours}</div>
                      <div className="text-sm text-[#64748B] font-normal">Emergency maintenance available 24/7.</div>
                      <a href={`tel:${contactInfo.phoneRaw}`} className="mt-5 inline-flex items-center gap-2 text-[#3E6FB5] hover:text-[#0B2D5B] transition-colors text-sm font-bold">
                        <Icon name="phone" size={15} />
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0]">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-[#3E6FB5] font-bold mb-3">Explore</div>
                    <div className="flex flex-wrap gap-2">
                      {navLinks.filter((l) => l.to !== '/contact').map((l) => (
                        <Link
                          key={l.to}
                          to={l.to}
                          className="text-xs px-4 py-2 rounded-full bg-[#F8FAFC] text-[#0B2D5B] hover:bg-[#3E6FB5] hover:text-white transition-all duration-300 border border-[#E2E8F0]"
                        >
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* FORM COLUMN */}
              <Reveal direction="right" className="lg:col-span-3">
                <div className="relative rounded-3xl bg-white p-6 md:p-10 shadow-xl overflow-hidden border border-[#E2E8F0]">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient" />
                  {sent ? (
                    <div className="py-16 text-center">
                      <div className="mx-auto w-20 h-20 rounded-full bg-gold-gradient flex items-center justify-center text-white mb-6 animate-bounce shadow-md">
                        <Icon name="check" size={36} strokeWidth={3} />
                      </div>
                      <h3 className="font-serif text-3xl text-[#0B2D5B] mb-3">Thank You!</h3>
                      <p className="text-[#64748B] font-normal max-w-md mx-auto">
                        Your message has been received. Our team will contact you within 24 hours.
                      </p>
                      <button onClick={() => setSent(false)} className="btn-outline-gold mt-8 px-8 py-3.5 text-xs uppercase tracking-widest rounded-full">
                        <span>Send Another Message</span>
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="mb-8">
                        <span className="ornament text-[11px] tracking-[0.3em] uppercase text-[#3E6FB5] font-bold mb-3 inline-flex">
                          Send a Message
                        </span>
                        <h3 className="font-serif text-2xl md:text-3xl text-[#0B2D5B]">
                          Request a Free Quote
                        </h3>
                      </div>
                      <QuoteForm variant="home" onSuccess={handleSuccess} />
                    </>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </SectionFlip>

      {/* ================= CTA ================= */}
      <SectionFlip>
        <CTA
          image={heroImages[1]}
          kicker="Prefer to Talk?"
          title="We're One Call Away"
          subtitle="Speak directly with a specialist for a free, no-obligation consultation."
          primaryLabel="Call +971 58 929 9581"
          onPrimary={() => {
            window.location.href = `tel:${contactInfo.phoneRaw}`;
          }}
        />
      </SectionFlip>

      {/* ================= FOOTER ================= */}
      <Footer onContactClick={() => setShowContact(true)} />

      {/* ================= CONTACT MODAL ================= */}
      <ContactModal open={showContact} onClose={() => setShowContact(false)} variant="home" />
    </div>
  );
}
