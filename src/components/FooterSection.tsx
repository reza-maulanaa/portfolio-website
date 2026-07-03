import FadeIn from './FadeIn';
import ContactButton from './ContactButton';

const NAV_LINKS = [
  { label: 'Tentang', href: '#about' },
  { label: 'Layanan', href: '#price' },
  { label: 'Proyek', href: '#projects' },
];

export default function FooterSection() {
  return (
    <footer id="contact" className="bg-[#FDF6EC] px-5 pb-8 pt-24 sm:px-8 sm:pt-32 md:px-10 md:pt-40">
      <div className="flex flex-col items-center gap-10 sm:gap-12 md:gap-14">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Mari Bekerja Sama
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} y={20}>
          <p
            className="max-w-[480px] text-center font-light leading-relaxed text-[#2C3440] opacity-70"
            style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.2rem)' }}
          >
            Punya usaha dan butuh website? Ceritakan dulu kebutuhannya, nanti kita cari bentuk
            yang masuk akal untuk skala bisnis kamu. Tidak semua usaha butuh fitur mahal, dan
            saya akan bilang terus terang kalau memang tidak perlu.
          </p>
        </FadeIn>

        <FadeIn delay={0.35} y={20} className="flex flex-col items-center gap-4">
          <a
            href="https://wa.me/6287811165612?text=Halo%20Reza%2C%20saya%20tertarik%20bikin%20website%20untuk%20usaha%20saya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ContactButton />
          </a>
          <a
            href="mailto:fauzanbrawlstars@gmail.com"
            className="text-xs font-light tracking-wider text-[#2C3440] opacity-60 transition-opacity duration-200 hover:opacity-100 sm:text-sm"
          >
            atau email: fauzanbrawlstars@gmail.com
          </a>
        </FadeIn>
      </div>

      <div
        className="mt-20 flex flex-col items-center justify-between gap-6 pt-8 sm:mt-24 sm:flex-row md:mt-28"
        style={{ borderTop: '1px solid rgba(44, 52, 64, 0.2)' }}
      >
        <span className="text-xs font-light uppercase tracking-wider text-[#2C3440] opacity-60 sm:text-sm">
          © 2026 Reza Maulana
        </span>

        <nav className="flex gap-6 sm:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium uppercase tracking-wider text-[#2C3440] transition-opacity duration-200 hover:opacity-70 sm:text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <span className="text-xs font-light uppercase tracking-wider text-[#2C3440] opacity-60 sm:text-sm">
          Web Developer — Indonesia
        </span>
      </div>
    </footer>
  );
}
