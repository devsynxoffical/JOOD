import { motion } from 'framer-motion';

const steps = [
  {
    num: '1',
    phase: 'Phase I',
    title: 'Survey & Approvals',
    desc: 'We study your plot, prepare the drawings and costing, and secure the authority approvals needed before construction starts.',
  },
  {
    num: '2',
    phase: 'Phase II',
    title: 'Construction Works',
    desc: 'Our site teams carry out the foundations, structure, MEP and finishing works to a clear schedule, with quality checks at every stage.',
  },
  {
    num: '3',
    phase: 'Phase III',
    title: 'Inspection & Handover',
    desc: 'Every project ends with a full inspection, snagging, final cleaning and handover, followed by after-care support.',
  },
];

export default function ProcessTimelineSection({ onContactClick }) {
  return (
    <section className="py-24 md:py-32 bg-[#E2E8F0] text-[#0B2D5B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-xs md:text-sm uppercase tracking-[0.45em] text-[#3E6FB5] font-bold mb-4 flex items-center justify-center gap-3">
            <span className="w-6 h-px bg-[#3E6FB5]/80" />
            <span>How We Work</span>
            <span className="w-6 h-px bg-[#3E6FB5]/80" />
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-[#0B2D5B] font-light leading-[1.08] tracking-tight">
            Spaces That Speak <span className="italic font-medium text-[#3E6FB5]">Volumes</span>
          </h2>
          <p className="text-sm md:text-base text-[#64748B] font-normal mt-3 tracking-wide">
            One clear three-stage process for every residential and commercial project.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-[#3E6FB5]/60 to-transparent -z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative z-10 bg-white rounded-3xl p-8 border border-[#E2E8F0] hover:border-[#3E6FB5] shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center group"
            >
              {/* Number Circle */}
              <div className="w-14 h-14 rounded-full bg-[#0B2D5B] text-white font-serif text-xl font-normal flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-[#3E6FB5] group-hover:text-white transition-all duration-300 shadow-md">
                {step.num}
              </div>

              <span className="text-[10px] uppercase font-bold tracking-[0.35em] text-[#3E6FB5] mb-2">
                {step.phase}
              </span>

              <h3 className="font-serif text-xl text-[#0B2D5B] font-semibold mb-3 tracking-tight">
                {step.title}
              </h3>

              <p className="text-xs md:text-sm text-[#64748B] font-normal leading-relaxed tracking-wide">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
