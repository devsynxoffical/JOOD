import Icon from './Icon';
import QuoteForm from './QuoteForm';

export default function ContactModal({ open, onClose }) {
  if (!open) return null;

  const handleSuccess = () => {
    alert(document.documentElement.lang === 'ar' ? 'شكراً لتواصلكم معنا! سيتصل بكم فريقنا خلال 24 ساعة.' : 'Thank you for your inquiry! Our team will contact you within 24 hours.');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="modal-backdrop absolute inset-0 bg-[#0E2F5C]/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="modal-card relative bg-[#F8FAFC] rounded-3xl p-6 md:p-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-deep">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gold-gradient rounded-t-3xl" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#1E293B]/5 hover:bg-[#1E293B] hover:text-[#F8FAFC] text-[#1E293B] flex items-center justify-center transition-all duration-300 group"
          aria-label="Close"
        >
          <Icon name="close" size={18} strokeWidth={2.4} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>

        <div className="mb-8 pr-12">
          <div className="ornament text-[11px] tracking-[0.3em] uppercase text-[#2F5E9E] font-semibold mb-3">
            Free Consultation
          </div>
          <h2 className="section-heading text-3xl md:text-4xl text-[#1E293B]">
            Let’s Talk About Your Project
          </h2>
          <p className="text-[#1E293B]/60 mt-3 font-light text-sm">
            Tell us what you need — new construction, renovation, or design and build. We reply within 24 hours.
          </p>
        </div>

        <QuoteForm onSuccess={handleSuccess} onCancel={onClose} />

        <div className="mt-8 pt-6 border-t border-[#8FB0DD]/20">
          <div className="grid grid-cols-2 gap-4 text-sm text-[#1E293B]/70">
            <p><span className="block text-[10px] uppercase tracking-widest text-[#2F5E9E] font-semibold mb-1">Phone</span>+971 58 929 9581</p>
            <p><span className="block text-[10px] uppercase tracking-widest text-[#2F5E9E] font-semibold mb-1">Email</span>info@joodbuildingcontracting.ae</p>
            <p><span className="block text-[10px] uppercase tracking-widest text-[#2F5E9E] font-semibold mb-1">Website</span>www.joodbuildingcontracting.ae</p>
            <p><span className="block text-[10px] uppercase tracking-widest text-[#2F5E9E] font-semibold mb-1">Response</span>Within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}
