import Icon from './Icon';
import SmartImage from './SmartImage';

export default function ProjectCard({ project }) {
  return (
    <div className="group rounded-3xl bg-[#E2E8F0] p-5 hover:shadow-deep transition-shadow duration-500">
      <h4 className="text-center font-bold text-[#1E293B] text-lg mb-5 tracking-wide">{project.title}</h4>
      <div className="relative grid grid-cols-2 gap-3">
        <div className="img-zoom relative rounded-2xl overflow-hidden">
          <SmartImage src={project.before} alt={`${project.title} before`} className="w-full h-52 object-cover" />
          <span className="absolute top-2 left-2 text-[10px] tracking-widest uppercase font-bold bg-[#1E293B]/80 text-[#F8FAFC] px-2.5 py-1 rounded-md">Before</span>
        </div>
        <div className="img-zoom relative rounded-2xl overflow-hidden">
          <SmartImage src={project.after} alt={`${project.title} after`} className="w-full h-52 object-cover" />
          <span className="absolute top-2 left-2 text-[10px] tracking-widest uppercase font-bold bg-[#8FB0DD] text-[#1E293B] px-2.5 py-1 rounded-md">After</span>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#8FB0DD] text-[#1E293B] flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 shadow-xl">
          <Icon name="arrow-right" size={20} strokeWidth={2.4} />
        </div>
      </div>
    </div>
  );
}
