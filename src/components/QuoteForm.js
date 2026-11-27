import { useState } from 'react';

export const quoteInputClass =
  'w-full px-4 py-3 rounded-xl bg-white border border-[#E2E8F0] focus:border-[#3E6FB5] focus:ring-2 focus:ring-[#3E6FB5]/20 transition-all duration-300 text-[#0B2D5B] placeholder-[#0B2D5B]/40 shadow-sm';

/**
 * Quote request form shared between the ContactModal and the Contact page.
 * props:
 *  - onSuccess: called after a valid submit (e.g. close modal / show thanks)
 *  - onCancel: optional — renders a Cancel button next to Submit
 */
export default function QuoteForm({ onSuccess, onCancel }) {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSuccess) onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-[#0B2D5B] mb-2">First Name *</label>
              <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required placeholder="Enter your first name" className={quoteInputClass} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#0B2D5B] mb-2">Last Name</label>
              <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Enter your last name" className={quoteInputClass} />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-[#0B2D5B] mb-2">Email *</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="Enter your email" className={quoteInputClass} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#0B2D5B] mb-2">Phone Number *</label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="+971..." className={quoteInputClass} />
            </div>
          </div>
          <div>
            <div>
              <label className="block text-sm font-semibold text-[#0B2D5B] mb-2">Service Required</label>
              <select name="service" value={form.service} onChange={handleChange} className={quoteInputClass}>
                <option value="">Select a service</option>
                <option>Residential Construction</option>
                <option>Commercial Construction</option>
                <option>Industrial Shed</option>
                <option>Labour Camp</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#0B2D5B] mb-2">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows="4" placeholder="Tell us about your project requirements..." className={quoteInputClass} />
          </div>

      <div className="flex gap-4 pt-2">
        <button type="submit" className="btn-gold flex-1 py-4 text-xs font-semibold uppercase tracking-[0.15em] shadow-md">
          <span>Send Message</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
          </svg>
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} className="btn-outline-gold flex-1 py-4 text-xs font-semibold uppercase tracking-[0.15em]">
            <span>Cancel</span>
          </button>
        )}
      </div>
    </form>
  );
}
