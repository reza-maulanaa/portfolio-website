import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';

const ABOUT_TEXT =
  'Saya membangun website yang cepat, aman, dan gampang dikelola untuk bisnis kecil. Teknologinya sama dengan yang dipakai perusahaan besar: Next.js, TypeScript, dan infrastruktur modern.';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 py-20 sm:px-8 md:px-10"
    >
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute left-[2%] top-[6%] w-[70px] -rotate-12 md:left-[5%] md:w-[110px]"
      >
        <img src="/stack/nextjs.svg" alt="Next.js" className="w-full" />
      </FadeIn>
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute bottom-[10%] left-[4%] w-[70px] rotate-6 md:left-[8%] md:w-[100px]"
      >
        <img src="/stack/postgresql.svg" alt="PostgreSQL" className="w-full" />
      </FadeIn>
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute right-[2%] top-[6%] w-[70px] rotate-12 md:right-[5%] md:w-[110px]"
      >
        <img src="/stack/typescript.svg" alt="TypeScript" className="w-full" />
      </FadeIn>
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute bottom-[10%] right-[4%] w-[80px] -rotate-6 md:right-[8%] md:w-[115px]"
      >
        <img src="/stack/tailwind.svg" alt="Tailwind CSS" className="w-full" />
      </FadeIn>

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Tentang Saya
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-10 sm:gap-12">
          <AnimatedText
            text={ABOUT_TEXT}
            className="max-w-[560px] text-center font-medium leading-relaxed text-[#2C3440]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />

          <FadeIn delay={0.1} y={30}>
            <p
              className="max-w-[480px] text-center font-light leading-relaxed text-[#2C3440] opacity-70"
              style={{ fontSize: 'clamp(0.9rem, 1.7vw, 1.15rem)' }}
            >
             
            </p>
          </FadeIn>

          <ContactButton />
        </div>
      </div>
    </section>
  );
}
