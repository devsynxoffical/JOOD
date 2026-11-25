import { useEffect, useRef } from 'react';

/**
 * Full-screen photo viewer with large previous / next arrows.
 * props:
 *  - items: [{ src, title, category }]
 *  - index: current item index
 *  - onIndex(i): change the current item
 *  - onClose()
 *  - footer(item): optional render function for content under the photo
 */
function Arrow({ dir, onClick }) {
  const isPrev = dir === 'prev';
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      aria-label={isPrev ? 'Previous photo' : 'Next photo'}
      className={`absolute top-1/2 -translate-y-1/2 z-20 ${isPrev ? 'left-2 md:-left-20' : 'right-2 md:-right-20'}
        w-12 h-12 md:w-16 md:h-16 rounded-full bg-white text-[#0B2D5B] shadow-[0_8px_30px_rgba(0,0,0,0.45)]
        flex items-center justify-center border-2 border-white
        hover:bg-[#3E6FB5] hover:text-white hover:scale-110 transition-all duration-300
        focus:outline-none focus-visible:ring-4 focus-visible:ring-[#A9C1E3]`}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {isPrev ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
      </svg>
    </button>
  );
}

export default function Lightbox({ items, index, onIndex, onClose, footer }) {
  const touchX = useRef(null);
  const count = items.length;
  const item = items[index];

  const go = (step) => onIndex((index + step + count) % count);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') onIndex((index + 1) % count);
      else if (e.key === 'ArrowLeft') onIndex((index - 1 + count) % count);
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [index, count, onIndex, onClose]);

  // Preload neighbours so the arrows feel instant
  useEffect(() => {
    if (count < 2) return;
    [items[(index + 1) % count], items[(index - 1 + count) % count]].forEach((it) => {
      const img = new Image();
      img.src = it.src;
    });
  }, [index, count, items]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-3 -right-3 md:-top-5 md:-right-5 z-30 w-11 h-11 rounded-full bg-white text-[#0B2D5B] shadow-xl flex items-center justify-center hover:bg-[#3E6FB5] hover:text-white transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12" /></svg>
        </button>

        <div className="relative bg-[#0B2D5B] overflow-hidden rounded-2xl shadow-2xl">
          <div className="relative bg-black flex items-center justify-center h-[55vh] md:h-[68vh]">
            <img key={item.src} src={item.src} alt={item.title} className="max-w-full max-h-full object-contain" />
            {count > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/60 text-white text-xs font-semibold tracking-wider">
                <span dir="ltr">{index + 1} / {count}</span>
              </div>
            )}
          </div>
          {footer && <div className="p-5 md:p-6">{footer(item)}</div>}
        </div>

        {count > 1 && (
          <>
            <Arrow dir="prev" onClick={() => go(-1)} />
            <Arrow dir="next" onClick={() => go(1)} />
          </>
        )}
      </div>
    </div>
  );
}
