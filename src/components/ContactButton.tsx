import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactButton() {
  const ref = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setPos({
      x: (e.clientX - r.left - r.width / 2) * 0.3,
      y: (e.clientY - r.top - r.height / 2) * 0.4,
    });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className="group relative overflow-hidden rounded-full bg-[#2C3440] px-10 py-4 text-xs font-medium uppercase tracking-widest text-[#FDF6EC] sm:px-12 sm:py-5 sm:text-sm md:text-base"
    >
      <span
        aria-hidden
        className="absolute inset-0 translate-y-full rounded-full bg-[#F5E7DA] transition-transform duration-300 ease-out group-hover:translate-y-0"
      />
      <span className="relative flex items-center gap-2">
        <span className="relative block overflow-hidden">
          <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
            Hubungi Saya
          </span>
          <span
            aria-hidden
            className="absolute inset-0 block translate-y-full text-[#2C3440] transition-transform duration-300 ease-out group-hover:translate-y-0"
          >
            Hubungi Saya
          </span>
        </span>
        <span
          aria-hidden
          className="relative block h-[1.1em] w-[1.1em] overflow-hidden transition-colors duration-300 group-hover:text-[#2C3440]"
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="absolute inset-0 transition-transform duration-300 ease-out group-hover:-translate-y-full group-hover:translate-x-full"
          >
            <path d="M4 12L12 4M12 4H6M12 4v6" />
          </svg>
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="absolute inset-0 -translate-x-full translate-y-full transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
          >
            <path d="M4 12L12 4M12 4H6M12 4v6" />
          </svg>
        </span>
      </span>
    </motion.button>
  );
}
