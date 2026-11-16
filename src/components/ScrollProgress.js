import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className="scroll-progress" style={{ width: `${width}%`, background: 'linear-gradient(90deg, #3E6FB5, #A9C1E3)', boxShadow: '0 0 10px rgba(62, 111, 181, 0.5)' }} />;
}
