import { Link } from 'react-router-dom';
import Icon from './Icon';
import Logo from './Logo';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Design and Build', to: '/services' },
  { label: 'Projects', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
];

const serviceLinks = [
  { label: 'Villa Construction', to: '/services' },
  { label: 'Building Construction', to: '/services' },
  { label: 'Warehouse Construction', to: '/services' },
  { label: 'Renovation', to: '/services' },
  { label: 'Design & Build', to: '/services' },
];

const socials = [
  { label: 'WhatsApp', href: 'https://wa.me/971564455996', icon: 'whatsapp' },
  { label: 'Instagram', href: 'https://www.instagram.com/joodcontractinguae', icon: 'instagram' },
  // Add the profile URLs to show these icons
  { label: 'TikTok', href: '', icon: 'tiktok' },
  { label: 'LinkedIn', href: '', icon: 'linkedin' },
].filter((s) => s.href);

export default function Footer({ onContactClick }) {
  const contactBtnClass =
    'self-start lg:self-auto border border-white text-white hover:bg-white hover:text-[#0B2D5B] transition-colors text-xs uppercase tracking-[0.25em] px-10 py-4';

  return (
    <footer className="bg-[#0B2D5B] text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-20 pb-10">
        {/* Top: inquiry + contact */}
        <div className="grid lg:grid-cols-2 gap-10 pb-14 border-b border-white/15">
          <div>
            <Logo className="h-12 w-auto text-white mb-10" />
            <p className="text-white/60 text-sm mb-2">For project inquiries, please contact us at</p>
            <a
              href="mailto:info@joodbuildingcontracting.ae"
              className="font-serif text-lg sm:text-2xl md:text-3xl font-light text-white hover:text-[#A9C1E3] transition-colors break-words"
            >
              info@joodbuildingcontracting.ae
            </a>
            <div className="mt-3">
              <a href="tel:+971589299581" className="text-white/80 hover:text-white text-base tracking-wide">
                +971 58 929 9581
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:items-end justify-end gap-8">
            {onContactClick ? (
              <button type="button" onClick={onContactClick} className={contactBtnClass}>
                Contact
              </button>
            ) : (
              <Link to="/contact" className={contactBtnClass}>
                Contact
              </Link>
            )}
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-white/75 hover:text-white transition-colors text-sm"
                >
                  <Icon name={s.icon} size={16} />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14">
          <div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              New construction and renovation across the UAE — villas, buildings and warehouses,
              delivered by one accountable team.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-white/50 font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-white/85 hover:text-white transition-colors text-sm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-white/50 font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-white/85 hover:text-white transition-colors text-sm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-white/50 font-semibold mb-6">Location</h4>
            <p className="text-white/85 text-sm leading-relaxed">Dubai, United Arab Emirates</p>
            <p className="text-white/60 text-sm mt-4">Projects across the UAE</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/15 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/55 tracking-wide">
            &copy; {new Date().getFullYear()} Jood Building Contracting. All Rights Reserved.
          </p>
          <p className="text-xs text-white/55 tracking-wide">Quality you trust. Results you see.</p>
        </div>
      </div>
    </footer>
  );
}
