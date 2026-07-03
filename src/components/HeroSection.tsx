import FadeIn from './FadeIn';

const NAV_LINKS = [
  { label: 'Tentang', href: '#about' },
  { label: 'Harga', href: '#price' },
  { label: 'Proyek', href: '#projects' },
  { label: 'Kontak', href: '#contact' },
];

export default function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col" style={{ overflowX: 'clip' }}>
      <FadeIn delay={0} y={-20}>
        <nav className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider text-[#2C3440] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </FadeIn>

      <div className="overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading mt-6 whitespace-nowrap text-center text-[10vw] font-black uppercase leading-none tracking-tight">
            Hai, saya reza
          </h1>
        </FadeIn>
      </div>

      <div className="mt-auto px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#2C3440] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            web developer yang berdedikasi membangun website yang cepat, modern, dan tak terlupakan
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
