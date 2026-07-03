import { useEffect, useRef, useState } from "react";

const IMAGES = [
  "/projects/zazstore",
  "/projects/notesapp",
  "/projects/zazstore",
  "/projects/notesapp",
];

function Row({ images, offset }: { images: string[]; offset: number }) {
  const tripled = [...images, ...images, ...images];
  return (
    <div
      className="flex gap-3"
      style={{
        transform: `translateX(${offset - 600}px)`,
        willChange: "transform",
      }}
    >
      {tripled.map((src, i) => (
        <picture key={i} className="shrink-0">
          <source media="(min-width: 768px)" srcSet={`${src}-pc.png`} />
          <img
            src={`${src}-mobile.png`}
            alt=""
            loading="lazy"
            className="aspect-[533/830] rounded-2xl object-cover md:aspect-[1900/1040]"
            style={{ width: "clamp(240px, 60vw, 420px)" }}
          />
        </picture>
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
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={ref}
      className="flex flex-col gap-3 rounded-t-[40px] bg-[#FDF6EC] pb-10 pt-24 shadow-[0_-24px_60px_rgba(44,52,64,0.18)] sm:rounded-t-[50px] sm:pt-32 md:rounded-t-[60px] md:pt-40"
    >
      <Row images={IMAGES} offset={offset} />
    </section>
  );
}
