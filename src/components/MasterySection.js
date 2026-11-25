import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import Lightbox from './Lightbox';

const galleryItems = projects.map((p, i) => ({
  id: i + 1,
  title: p.title,
  category: p.category,
  image: p.images[0],
}));

const categories = ['All', 'Commercial', 'Residential'];

function ProjectCard({ item, onClick, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className="group relative overflow-hidden cursor-pointer"
      style={{ borderRadius: '4px' }}
      onClick={() => onClick(item)}
    >
      <div className="relative h-[280px] md:h-[340px] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            // Fallback to a known-good image if this one fails to load
            e.target.src = '/images/projects/villa-saif/01.webp';
          }}
        />

        {/* Hover arrow */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-[#3E6FB5] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 10L10 2M10 2H4M10 2V8" stroke="#0B2D5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function MasterySection({ onContactClick }) {
  const [selectedCat, setSelectedCat] = useState('All');
  const [activeIndex, setActiveIndex] = useState(null);

  const filtered = selectedCat === 'All'
    ? galleryItems
    : galleryItems.filter((i) => i.category === selectedCat);

  // Every photo of the projects in the current filter, in order
  const photos = projects
    .filter((p) => selectedCat === 'All' || p.category === selectedCat)
    .flatMap((p) => p.images.map((src) => ({ src, title: p.title, category: p.category })));
  const openProject = (item) => {
    const i = photos.findIndex((ph) => ph.src === item.image);
    setActiveIndex(i < 0 ? 0 : i);
  };

  return (
    <section className="py-24 md:py-32 bg-[#F8FAFC] text-[#0B2D5B] relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(62, 111, 181,0.3) 60px, rgba(62, 111, 181,0.3) 61px)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#3E6FB5]/50" />
            <span className="text-xs md:text-sm uppercase tracking-[0.45em] text-[#3E6FB5] font-bold">Our Projects</span>
            <span className="w-8 h-px bg-[#3E6FB5]/50" />
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-[#0B2D5B] leading-[1.08] font-light tracking-tight mb-4">
            What We Build <br />
            <span className="font-light italic text-[#3E6FB5]">Residential &amp; Commercial</span>
          </h2>
          <p className="text-sm md:text-base text-[#64748B] font-normal max-w-xl mx-auto tracking-wide leading-relaxed">
            A selection of our completed residential and commercial projects — villas, industrial sheds and labour camps in Ajman and Umm Al Quwain.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = cat === selectedCat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] transition-all duration-300 rounded-full border ${
                  isActive
                    ? 'bg-[#3E6FB5] text-white border-[#3E6FB5] shadow-sm'
                    : 'bg-white text-[#0B2D5B]/70 border-[#0B2D5B]/20 hover:border-[#3E6FB5] hover:text-[#0B2D5B]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Masonry-style Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCat}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Row 1: 2 columns */}
            {filtered.length > 0 && (
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {filtered.slice(0, 2).map((item, idx) => (
                  <ProjectCard key={item.id} item={item} onClick={openProject} delay={idx * 0.1} />
                ))}
              </div>
            )}

            {/* Row 2: 3 columns (if enough items) */}
            {filtered.length > 2 && (
              <div className={`grid gap-4 ${filtered.length - 2 === 1 ? 'md:grid-cols-1 max-w-2xl mx-auto' : filtered.length - 2 === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
                {filtered.slice(2, 5).map((item, idx) => (
                  <ProjectCard key={item.id} item={item} onClick={openProject} delay={idx * 0.08} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox: browse every photo of the visible projects */}
      {activeIndex !== null && (
        <Lightbox
          items={photos}
          index={activeIndex}
          onIndex={setActiveIndex}
          onClose={() => setActiveIndex(null)}
          footer={(photo) => (
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#A9C1E3] font-semibold">{photo.category}</span>
                <h3 className="font-serif text-2xl text-white font-light mt-1 tracking-tight">
                  <span translate="no" className="notranslate">{photo.title}</span>
                </h3>
              </div>
              <button
                onClick={() => { setActiveIndex(null); onContactClick(); }}
                className="btn-gold text-[10px] uppercase tracking-[0.25em] px-7 py-3 shrink-0"
              >
                Inquire Similar Build
              </button>
            </div>
          )}
        />
      )}
    </section>
  );
}
