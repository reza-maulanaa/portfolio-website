import { useEffect, useRef, useState } from 'react';

const IMAGES = [
  '/projects/zazstore-1.png',
  '/projects/notesapp-1.png',

];

const ROW_1 = IMAGES.slice(0, 3);
const ROW_2 = IMAGES.slice(3);

function Row({ images, offset, direction }: { images: string[]; offset: number; direction: 1 | -1 }) {
  const tripled = [...images, ...images, ...images];
  return (
    <div
      className="flex gap-3"
      style={{
        transform: `translateX(${direction * (offset - 200)}px)`,
        willChange: 'transform',
      }}
    >
      {tripled.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          loading="lazy"
          className="rounded-2xl object-cover"
          style={{ width: 'clamp(240px, 60vw, 420px)', aspectRatio: '14 / 9', flexShrink: 0 }}
        />
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const sectionTop = ref.current.offsetTop;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      ref={ref}
      className="flex flex-col gap-3 rounded-t-[40px] bg-[#FDF6EC] pb-10 pt-24 shadow-[0_-24px_60px_rgba(44,52,64,0.18)] sm:rounded-t-[50px] sm:pt-32 md:rounded-t-[60px] md:pt-40"
    >
      <Row images={ROW_1} offset={offset} direction={1} />
      <Row images={ROW_2} offset={offset} direction={-1} />
    </section>
  );
}
