import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'العربية', soon: true },
];

function LanguageMenu({ className = '', mobile = false, onSelect }) {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState('en');

  return (
    <div className={`relative ${mobile ? 'w-full' : ''}`} onMouseLeave={() => !mobile && setOpen(false)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`inline-flex items-center gap-1.5 ${className}`}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span>Language</span>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
      </button>
      {open && (
        <div className={`${mobile ? 'mt-2' : 'absolute right-0 top-full pt-3'} min-w-[160px] z-[95]`}>
          <ul role="listbox" className="bg-white rounded-xl border border-[#3E6FB5]/20 shadow-xl overflow-hidden">
            {LANGUAGES.map((l) => (
              <li key={l.code}>
                <button
                  type="button"
                  disabled={l.soon}
                  onClick={() => { setLang(l.code); setOpen(false); onSelect && onSelect(l.code); }}
                  className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 text-xs tracking-wider normal-case text-left transition-colors ${lang === l.code ? 'text-[#0B2D5B] font-semibold bg-[#F1F5F9]' : 'text-[#0B2D5B]/80 hover:bg-[#F1F5F9]'} ${l.soon ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <span>{l.label}</span>
                  {l.soon && <span className="text-[9px] uppercase tracking-widest text-[#64748B]">Soon</span>}
                  {lang === l.code && !l.soon && <span className="text-[#3E6FB5]">✓</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/**
 * Sticky navbar with blur-on-scroll and mobile drawer.
 * props:
 *  - links: [{ label, to (router path) or href (anchor) }]
 *  - onContactClick
 */
export default function Navbar({ links = [], onContactClick, isDarkHero = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const solid = scrolled || mobileMenuOpen;
  const isActive = (to) => (to === '/' ? location.pathname === '/' : location.pathname.startsWith(to));

  // Determine text and component styles based on scroll and dark hero state
  let headerBgClass = '';
  let navLinkClass = '';
  let whatsappBtnClass = '';
  let hamburgerLineClass = '';

  if (solid) {
    // Scrolled or mobile menu open: light background, dark text
    headerBgClass = 'bg-white/95 backdrop-blur-xl border-b border-[#3E6FB5]/30 shadow-[0_10px_30px_rgba(0,0,0,0.05)] py-3.5';
    navLinkClass = 'text-[#0B2D5B]/80 hover:text-[#3E6FB5]';
    whatsappBtnClass = 'border border-[#0B2D5B] text-[#0B2D5B] hover:bg-[#0B2D5B] hover:text-white';
    hamburgerLineClass = 'bg-[#0B2D5B]';
  } else {
    // Top of page (not scrolled)
    if (isDarkHero) {
      // Over a dark hero background: transparent background, white/gold text
      headerBgClass = 'bg-gradient-to-b from-black/60 to-transparent py-5';
      navLinkClass = 'text-white/90 hover:text-[#A9C1E3]';
      whatsappBtnClass = 'border border-white text-white hover:bg-white hover:text-[#0B2D5B]';
      hamburgerLineClass = 'bg-white';
    } else {
      // Over a light hero background: translucent white background, dark text
      headerBgClass = 'bg-gradient-to-b from-white/90 via-white/40 to-transparent py-5';
      navLinkClass = 'text-[#0B2D5B]/80 hover:text-[#3E6FB5]';
      whatsappBtnClass = 'border border-[#0B2D5B] text-[#0B2D5B] hover:bg-[#0B2D5B] hover:text-white';
      hamburgerLineClass = 'bg-[#0B2D5B]';
    }
  }

  return (
    <>
      <header className={`fixed w-full top-0 z-[90] transition-all duration-500 ${headerBgClass}`}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <div className="flex-1">
            <Link to="/" className="group inline-flex items-center" aria-label="Jood Building Contracting — Home">
              <Logo
                className={`h-10 md:h-12 w-auto transition-colors duration-500 ${!solid && isDarkHero ? 'text-white' : 'text-[#0B2D5B]'}`}
              />
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center justify-center space-x-7 font-medium flex-[2]">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`nav-link whitespace-nowrap text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${isActive(link.to)
                  ? `${!solid && isDarkHero ? 'text-white border-b border-white' : 'text-[#0B2D5B] border-b border-[#0B2D5B]'} pb-1 font-semibold`
                  : navLinkClass
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <LanguageMenu className={`nav-link whitespace-nowrap text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${navLinkClass}`} />
          </nav>

          <div className="flex-1 flex items-center justify-end gap-4 lg:gap-6">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/971558344467"
              target="_blank"
              rel="noreferrer"
              className={`hidden sm:inline-flex items-center gap-2 font-sans text-[11px] font-semibold tracking-[0.2em] uppercase px-6 py-3 transition-all ${whatsappBtnClass}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.847L.057 23.882a.5.5 0 0 0 .614.614l6.035-1.467A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.5-5.243-1.376l-.375-.217-3.882.944.965-3.795-.232-.391A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Contact Us
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-full border border-[#3E6FB5]/40 shadow-sm transition-all ${solid ? 'bg-white/90' : 'bg-black/20 backdrop-blur-sm'}`}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-[1.5px] transition-all duration-300 ${hamburgerLineClass} ${mobileMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-[#3E6FB5] transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-[1.5px] transition-all duration-300 ${hamburgerLineClass} ${mobileMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[85] lg:hidden transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="absolute inset-0 bg-[#0B2D5B]/40 backdrop-blur-md" onClick={() => setMobileMenuOpen(false)} />
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white border-l border-[#3E6FB5]/20 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="p-8 pt-24 flex flex-col h-full">
            <div className="text-[#3E6FB5] text-xs tracking-[0.4em] uppercase font-semibold mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#3E6FB5]" />
              Navigation
            </div>
            <nav className="flex flex-col space-y-1">
              {links.map((link, i) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-4 border-b border-[#3E6FB5]/10 transition-all duration-300 text-base uppercase tracking-widest font-medium ${isActive(link.to)
                    ? 'text-[#3E6FB5] pl-2 font-semibold'
                    : 'text-[#0B2D5B]/80 hover:text-[#3E6FB5] hover:pl-2'
                    }`}
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <span>{link.label}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#3E6FB5]">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              ))}
              <div className="py-4 border-b border-[#3E6FB5]/10">
                <LanguageMenu mobile className="text-base uppercase tracking-widest font-medium text-[#0B2D5B]/80 hover:text-[#3E6FB5]" />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
