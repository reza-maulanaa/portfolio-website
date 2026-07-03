import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
  useEffect(() => {
    // ponytail: duration + wheelMultiplier = scroll terasa berat; naikkan wheelMultiplier kalau terlalu lambat
    const lenis = new Lenis({
      duration: 1.5,
      wheelMultiplier: 0.8,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      anchors: true,
    });
    let raf = requestAnimationFrame(function loop(time) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    });
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
  return null;
}
