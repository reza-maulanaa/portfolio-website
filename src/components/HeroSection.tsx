import FadeIn from './FadeIn';

const NAV_LINKS = [
  { label: 'Tentang', href: '#about' },
  { label: 'Layanan', href: '#price' },
  { label: 'Proyek', href: '#projects' },
  { label: 'Kontak', href: '#contact' },
];

export default function HeroSection() {
  return (
    <section className="sticky top-0 flex h-screen flex-col" style={{ overflowX: 'clip' }}>
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

      <div className="relative z-10 overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading mt-6 text-center text-[16vw] font-black uppercase leading-[0.95] tracking-tight md:whitespace-nowrap md:text-[10vw] md:leading-none">
            Hai, saya reza
          </h1>
        </FadeIn>
      </div>

      <FadeIn
        delay={0.45}
        x={-60}
        y={0}
        className="absolute bottom-[38%] left-[8%] hidden w-[90px] -rotate-12 sm:block md:left-[14%] md:w-[130px]"
      >
        <img src="/stack/vscode.svg" alt="" className="w-full" />
      </FadeIn>
      <FadeIn
        delay={0.55}
        x={60}
        y={0}
        className="absolute bottom-[30%] right-[8%] hidden w-[80px] rotate-12 sm:block md:right-[14%] md:w-[115px]"
      >
        <img src="/stack/github.svg" alt="" className="w-full" />
      </FadeIn>

      <FadeIn delay={0.25} y={40} className="absolute inset-x-0 bottom-0 flex justify-center">
        <img
          src="/projects/reza.png"
          alt="Foto Reza Maulana"
          className="h-[62vh] max-w-[90vw] rounded-t-full object-cover object-top md:h-[80vh]"
        />
      </FadeIn>

      <div className="relative z-10 mt-5 md:absolute md:bottom-10 md:left-10 md:mt-0">
        <FadeIn delay={0.35} y={20}>
          <p
            className="mx-auto max-w-[240px] text-center font-light uppercase leading-snug tracking-wide text-[#2C3440] md:mx-0 md:max-w-[260px] md:text-left"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            freelancer web developer dari Indramayu. membangun website untuk bisnis yang ingin dianggap serius di internet
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
