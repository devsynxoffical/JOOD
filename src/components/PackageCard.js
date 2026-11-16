import TiltCard from './TiltCard';
import Icon from './Icon';
import SmartImage from './SmartImage';

export default function PackageCard({ pkg, onBook }) {
  const featured = pkg.featured;
  return (
    <TiltCard
      className={`relative h-full rounded-3xl p-7 flex flex-col transition-all duration-500 border ${
        featured ? 'bg-white text-[#0B2D5B] border-[#3E6FB5] shadow-xl scale-[1.02]' : 'bg-white text-[#0B2D5B] border-[#E2E8F0] shadow-sm hover:shadow-md'
      }`}
    >
      {featured && (
        <span className="absolute -top-3 right-6 bg-[#3E6FB5] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-md">
          Most Popular
        </span>
      )}

      <div className="img-zoom relative h-36 rounded-2xl overflow-hidden mb-6 border border-[#E2E8F0]">
        <SmartImage src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
      </div>

      <h3 className="text-2xl font-bold mb-1 text-[#0B2D5B]">{pkg.name}</h3>
      <p className="text-sm font-normal mb-4 text-[#64748B]">{pkg.style}</p>

      <div className="text-xl font-bold mb-2 text-[#3E6FB5]">{pkg.price}</div>
      <p className="text-sm mb-5 font-normal text-[#64748B]">
        Perfect for: {pkg.perfectFor}
      </p>

      <div className="mb-6 flex-grow">
        <div className="text-xs font-bold tracking-wider uppercase mb-3 text-[#3E6FB5]">
          Includes
        </div>
        <ul className="space-y-2.5">
          {pkg.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm font-normal text-[#0B2D5B]/85">
              <span className="mt-0.5 flex items-center justify-center w-4 h-4 rounded-full bg-[#3E6FB5]/15 text-[#3E6FB5]">
                <Icon name="check" size={10} strokeWidth={3.2} />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onBook}
        className={`w-full py-3.5 rounded-full font-semibold text-xs uppercase tracking-[0.15em] transition-all duration-300 ${
          featured ? 'btn-gold shadow-md' : 'btn-outline-gold'
        }`}
      >
        <span>Book {pkg.name}</span>
      </button>
    </TiltCard>
  );
}
