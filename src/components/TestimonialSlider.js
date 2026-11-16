import { useEffect, useState } from 'react';
import Reveal from './Reveal';
import Icon from './Icon';

export default function TestimonialSlider({ testimonials }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const active = testimonials[current];

  return (
    <Reveal direction="zoom">
      <div className="relative">
        <div className="absolute -top-8 left-4 text-[#3E6FB5]/20 select-none">
          <Icon name="quote" size={72} filled />
        </div>

        <div key={current} className="entrance-fade-up text-center px-4 md:px-16">
          <div className="flex justify-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((s) => (
              <Icon key={s} name="star" size={16} filled className="text-[#3E6FB5]" />
            ))}
          </div>
          <p className="font-serif text-2xl md:text-4xl text-[#0B2D5B] font-light leading-relaxed mb-8 tracking-tight">
            "{active.text}"
          </p>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-white text-[#3E6FB5] border border-[#3E6FB5]/40 font-serif text-lg font-bold flex items-center justify-center mb-3 shadow-sm">
              {active.initials}
            </div>
            <div className="font-medium text-[#0B2D5B] tracking-wide text-sm">{active.name}</div>
            <div className="text-xs text-[#3E6FB5] font-semibold uppercase tracking-[0.2em] mt-1">{active.role}</div>
          </div>
        </div>

        <div className="flex justify-center gap-2.5 mt-9">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === current ? 'w-8 bg-[#3E6FB5]' : 'w-2 bg-[#0B2D5B]/20 hover:bg-[#0B2D5B]/40'
              }`}
            />
          ))}
        </div>
      </div>
    </Reveal>
  );
}
