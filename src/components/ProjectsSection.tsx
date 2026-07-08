import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import FadeIn from "./FadeIn";
import LiveProjectButton from "./LiveProjectButton";

interface Project {
  number: string;
  name: string;
  category: string;
  url: string;
  image: string;
  description: string;
}

const PROJECTS: Project[] = [
  {
    number: "01",
    name: "Topup Zazstore",
    category: "Project Klien Pertama",
    url: "https://zazstore.my.id",
    image: "/projects/zazstore",
    description:
      "Website top-up game untuk klien UMKM. Scope disesuaikan dengan pasar klien yang mayoritas COD: admin CRUD, SEO, dan perapian UI.",
  },
  {
    number: "02",
    name: "Notes App",
    category: "Lab Belajar Fullstack",
    url: "https://notes-app-five-khaki.vercel.app/notes",
    image: "/projects/notesapp",
    description:
      "Aplikasi catatan yang saya bangun untuk menguasai fundamental fullstack. Autentikasi lengkap dengan credentials, OAuth, dan verifikasi email",
  },
  {
    number: "03",
    name: "Booking Lapangan Futsal",
    category: "Aplikasi Booking Online",
    url: "https://court-booking-sable.vercel.app/",
    image: "/projects/booking-futsal",
    description:
      "Platform booking lapangan futsal tanpa ribet: cek jam kosong, pilih slot, langsung main. Konfirmasi cepat tanpa telepon-teleponan.",
  },
];

function ProjectCard({
  project,
  index,
  totalCards,
  progress,
}: {
  project: Project;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(
    progress,
    [index / totalCards, 1],
    [1, targetScale],
  );

  return (
    <div className="mb-20 min-h-[90vh] last:mb-0 md:mb-32">
      <motion.div
        className="sticky top-24 border-2 border-[#2C3440] bg-[#F5E7DA] p-4 sm:rounded-[50px] sm:p-6 md:top-32 md:rounded-[60px] md:p-8"
        style={{ scale, top: `calc(6rem + ${index * 28}px)` }}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 md:pb-8">
          <div className="flex items-center gap-5 md:gap-8">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-light uppercase tracking-widest text-[#2C3440] opacity-60 sm:text-sm">
                {project.category}
              </span>
              <span
                className="font-medium uppercase text-[#2C3440]"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
              >
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton href={project.url} />
        </div>

        <p
          className="max-w-3xl pb-6 font-light leading-relaxed text-[#2C3440] opacity-70 md:pb-8"
          style={{ fontSize: "clamp(0.85rem, 1.5vw, 1.1rem)" }}
        >
          {project.description}
        </p>

        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={`${project.image}-pc.png`}
          />
          <img
            src={`${project.image}-mobile.png`}
            alt={`${project.name} pratinjau`}
            loading="lazy"
            className="aspect-[533/830] w-full object-cover sm:rounded-[50px] md:aspect-auto md:h-[clamp(300px,40vw,580px)] md:rounded-[60px]"
          />
        </picture>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative z-10 -mt-10 bg-[#FDF6EC] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Proyek
        </h2>
      </FadeIn>

      <div className="mx-auto mt-16 max-w-6xl sm:mt-20 md:mt-28">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            totalCards={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
