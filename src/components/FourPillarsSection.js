import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pillars = [
  {
    id: 'management',
    label: 'Project Management',
    title: 'End-to-End Project Management',
    subtitle: 'Every stage handled with precision, from concept to completion.',
    description:
      'One team manages your project from start to finish — drawings, approvals, procurement, site works and handover — so you always know what is happening and when.',
    features: [
      'End-to-End Project Management',
      'Coordination & Procurement',
      'On-Schedule Milestone Delivery',
    ],
  },
  {
    id: 'quality',
    label: 'Quality Control',
    title: 'Quality Control at Every Stage',
    subtitle: 'Checked at every stage, on every residential and commercial project.',
    description:
      'Our engineers and supervisors inspect the work at each stage — foundations, structure, MEP and finishes — so that every project meets the approved drawings and UAE standards.',
    features: [
      'Quality Control at Every Stage',
      'Approved Materials & Suppliers',
      'Rigorous Inspection Protocols',
    ],
  },
  {
    id: 'handover',
    label: 'Final Handover',
    title: 'Seamless Final Handover',
    subtitle: 'Your property, delivered as agreed — no surprises.',
    description:
      'Before we hand over your building, we walk through it with you, resolve every snag and provide the warranty documents, so you have peace of mind long after completion.',
    features: [
      'Seamless Final Handover',
      'Full Walk-Through & Snag Resolution',
      'Comprehensive Post-Handover Warranty',
    ],
  },
];

export default function FourPillarsSection() {
  const [activeId, setActiveId] = useState('management');
  const activePillar = pillars.find((p) => p.id === activeId) || pillars[0];

  return (
    <section className="py-24 md:py-32 bg-[#E2E8F0] text-[#0B2D5B] relative overflow-hidden" id="pillars-section">

      {/* Subtle gold ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full bg-[#3E6FB5]/15 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 md:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#3E6FB5]/60" />
            <span className="text-xs md:text-sm uppercase tracking-[0.45em] text-[#3E6FB5] font-bold">The Foundation</span>
            <span className="w-8 h-px bg-[#3E6FB5]/60" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#0B2D5B] font-light leading-[1.08] tracking-tight">
            Three Core Services.{' '}
            <em className="not-italic font-normal text-[#3E6FB5] block">One Complete Building Solution.</em>
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-16">
          {pillars.map((pillar) => {
            const isActive = pillar.id === activeId;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveId(pillar.id)}
                className={`px-7 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] transition-all duration-300 rounded-full border ${
                  isActive
                    ? 'border-[#3E6FB5] bg-[#3E6FB5] text-white shadow-sm'
                    : 'border-[#0B2D5B]/20 bg-white/50 text-[#0B2D5B]/70 hover:border-[#3E6FB5] hover:bg-white hover:text-[#0B2D5B]'
                }`}
              >
                {pillar.label}
              </button>
            );
          })}
        </div>

        {/* Active Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl mx-auto text-center"
          >
            {/* Title */}
            <h3 className="font-serif text-2xl md:text-3xl text-[#0B2D5B] font-light mb-3 tracking-tight">
              {activePillar.title}
            </h3>

            {/* Subtitle */}
            <p className="text-[13px] text-[#3E6FB5] font-semibold mb-6 tracking-wide italic">
              {activePillar.subtitle}
            </p>

            {/* Divider */}
            <div className="mx-auto w-12 h-px bg-[#3E6FB5]/40 mb-8" />

            {/* Description */}
            <p className="text-sm md:text-base text-[#64748B] font-normal leading-[1.9] mb-10 tracking-wide">
              {activePillar.description}
            </p>

            {/* Highlighted Feature Tags */}
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 mt-8">
              {activePillar.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-x-4">
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold text-[#3E6FB5]">
                    {feat}
                  </span>
                  {idx < activePillar.features.length - 1 && (
                    <span className="w-1.5 h-1.5 bg-[#3E6FB5]/60 rounded-full" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
