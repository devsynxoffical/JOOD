import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function Footer({ onContactClick }) {
  return (
    <footer className="bg-[#EEF2F7] text-[#0B2D5B] relative overflow-hidden border-t border-[#3E6FB5]/30">
      {/* Ambient background glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#3E6FB5]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-[#3E6FB5]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-serif font-bold text-[#0B2D5B] tracking-[0.12em]">
                JOOD <span className="text-[#3E6FB5]">Building Contracting</span>
              </span>
            </div>
            <p className="text-[#64748B] text-sm leading-relaxed max-w-md font-normal">
              Jood Building Contracting delivers high-quality villas, buildings, and warehouses across the UAE, built on trust, expertise, and attention to detail.
            </p>
            <div className="flex gap-3 mt-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-[#3E6FB5]/40 bg-white flex items-center justify-center text-[#3E6FB5] hover:bg-[#3E6FB5] hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm"
              >
                <Icon name="instagram" size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-sm tracking-widest text-[#3E6FB5] mb-6 uppercase border-b border-[#3E6FB5]/30 pb-2 font-semibold">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'About', to: '/about' },
                { label: 'Design and Build', to: '/services' },
                { label: 'Projects', to: '/portfolio' },
                { label: 'Contact', to: '/contact' },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="group inline-flex items-center gap-2 text-[#0B2D5B]/80 hover:text-[#3E6FB5] transition-colors duration-300 text-xs uppercase tracking-widest font-medium">
                    <span className="w-0 group-hover:w-3 h-[1px] bg-[#3E6FB5] transition-all duration-300" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-sm tracking-widest text-[#3E6FB5] mb-6 uppercase border-b border-[#3E6FB5]/30 pb-2 font-semibold">Contact</h4>
            <ul className="space-y-4 text-xs">
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 shrink-0 rounded-full border border-[#3E6FB5]/40 bg-white flex items-center justify-center text-[#3E6FB5] shadow-sm">
                  <Icon name="phone" size={14} />
                </span>
                <div>
                  <div className="text-[#0B2D5B]/60 uppercase tracking-widest text-[10px] mb-0.5 font-medium">Direct Line</div>
                  <a href="tel:+971558344467" className="text-[#0B2D5B] hover:text-[#3E6FB5] transition-colors font-semibold">+971 55 834 4467</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 shrink-0 rounded-full border border-[#3E6FB5]/40 bg-white flex items-center justify-center text-[#3E6FB5] shadow-sm">
                  <Icon name="mail" size={14} />
                </span>
                <div>
                  <div className="text-[#0B2D5B]/60 uppercase tracking-widest text-[10px] mb-0.5 font-medium">Email Inquiry</div>
                  <a href="mailto:info@bkdcontracting.com" className="text-[#0B2D5B] hover:text-[#3E6FB5] transition-colors font-semibold">info@bkdcontracting.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 shrink-0 rounded-full border border-[#3E6FB5]/40 bg-white flex items-center justify-center text-[#3E6FB5] shadow-sm">
                  <Icon name="globe" size={14} />
                </span>
                <div>
                  <div className="text-[#0B2D5B]/60 uppercase tracking-widest text-[10px] mb-0.5 font-medium">Location</div>
                  <span className="text-[#0B2D5B] font-semibold">Dubai, United Arab Emirates</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#3E6FB5]/20 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#0B2D5B]/60 uppercase tracking-widest font-medium">
            &copy; {new Date().getFullYear()} Jood Building Contracting. All rights reserved.
          </p>
          <div className="text-[10px] tracking-[0.35em] text-[#3E6FB5] uppercase font-bold">
            DUBAI • QUALITY • INTEGRITY
          </div>
        </div>
      </div>
    </footer>
  );
}
