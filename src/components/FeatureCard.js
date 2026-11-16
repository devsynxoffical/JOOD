import TiltCard from './TiltCard';
import Icon from './Icon';

export default function FeatureCard({ feature }) {
  return (
    <TiltCard className="group h-full rounded-3xl bg-white p-8 border border-[#E2E8F0] hover:border-[#3E6FB5] shadow-sm hover:shadow-md transition-all duration-500">
      <div className="w-14 h-14 mb-6 rounded-2xl bg-gold-gradient flex items-center justify-center text-white shadow-md group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
        <Icon name={feature.icon} size={26} strokeWidth={2.2} />
      </div>
      <h3 className="text-xl font-bold text-[#0B2D5B] mb-3 group-hover:text-[#3E6FB5] transition-colors duration-300">
        {feature.title}
      </h3>
      <p className="text-[#64748B] font-normal leading-relaxed">{feature.description}</p>
    </TiltCard>
  );
}
