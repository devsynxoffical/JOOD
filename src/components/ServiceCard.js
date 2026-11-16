import TiltCard from './TiltCard';
import Icon from './Icon';
import SmartImage from './SmartImage';
import { Link } from 'react-router-dom';

export default function ServiceCard({ service, onRequest }) {
  return (
    <TiltCard className="group relative h-full rounded-3xl bg-white overflow-hidden border border-[#E2E8F0] hover:border-[#3E6FB5] card-lift shadow-sm">
      <div className="img-zoom relative h-56">
        <SmartImage src={service.image} alt={service.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-500" />
      </div>
      <div className="p-7">
        <h3 className="text-xl font-bold text-[#0B2D5B] mb-3 group-hover:text-[#3E6FB5] transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-[#64748B] font-normal leading-relaxed mb-5">{service.desc}</p>
        {service.link ? (
          <Link
            to={service.link}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#3E6FB5] group-hover:text-[#0B2D5B] transition-colors duration-300"
          >
            <span>View Service</span>
            <Icon name="arrow-right" size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        ) : (
          <button
            onClick={onRequest}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#3E6FB5] group-hover:text-[#0B2D5B] transition-colors duration-300"
          >
            <span>Request Service</span>
            <Icon name="arrow-right" size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        )}
      </div>
      <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[#3E6FB5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-3xl" />
    </TiltCard>
  );
}
