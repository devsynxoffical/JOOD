import TiltCard from './TiltCard';
import Icon from './Icon';

export default function ProductCard({ product, onQuote }) {
  return (
    <TiltCard className="group h-full rounded-3xl bg-white border border-[#E2E8F0] hover:border-[#3E6FB5] overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 flex flex-col">
      <div className="h-1.5 bg-gold-gradient" />
      <div className="p-6 flex flex-col flex-grow">
        <h4 className="text-lg font-bold text-[#0B2D5B] mb-0.5">{product.name}</h4>
        <p className="text-xs text-[#64748B] mb-4 tracking-wide uppercase font-semibold">{product.code}</p>

        <div className="flex items-baseline gap-2 mb-5">
          <span className="text-xs line-through text-[#64748B]/60 font-medium">{product.normalPrice}</span>
          <span className="text-2xl font-bold text-[#3E6FB5]">{product.salePrice}</span>
        </div>

        <div className="space-y-2.5 text-sm mb-6 flex-grow">
          {[
            { k: "Colour Option", v: product.color },
            { k: "Warranty", v: product.warranty },
            { k: "Density", v: product.density },
          ].map((row) => (
            <div key={row.k} className="flex justify-between items-center border-b border-[#E2E8F0] pb-2">
              <span className="text-[#64748B] font-normal">{row.k}</span>
              <span className="font-semibold text-[#0B2D5B] text-right">{row.v}</span>
            </div>
          ))}
        </div>

        <div className="bg-[#F1F5F9] rounded-xl p-3 mb-5 border border-[#E2E8F0]">
          <div className="text-xs font-bold text-[#0B2D5B] mb-2 tracking-wide uppercase">Additional Options</div>
          <div className="space-y-1 text-xs text-[#64748B] font-normal">
            <p>Fitting Accessories: 60 AED SQM</p>
            <p>Installation Price: 75 AED SQM</p>
            <p>L Profiles If Needed: 45 AED LM</p>
            <p className="font-semibold text-[#3E6FB5]">All Above Plus VAT</p>
          </div>
        </div>

        <button
          onClick={() => onQuote(product.name)}
          className="w-full bg-[#0B2D5B] text-white py-3.5 rounded-full font-semibold text-xs uppercase tracking-[0.15em] hover:bg-[#3E6FB5] transition-all duration-300 shadow-sm flex items-center justify-center gap-2 mt-auto"
        >
          <Icon name="whatsapp" size={16} />
          Get Quote
        </button>
      </div>
    </TiltCard>
  );
}
