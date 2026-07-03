import FadeIn from './FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'Pengembangan Frontend',
    description:
      'Membangun antarmuka web yang responsif, cepat, dan interaktif dengan teknologi modern seperti React, Astro, dan Tailwind CSS.',
  },
  {
    number: '02',
    name: 'Pengembangan Backend',
    description:
      'Merancang API, database, dan logika server yang aman, skalabel, dan andal untuk menopang aplikasi web dari balik layar.',
  },
  {
    number: '03',
    name: 'Desain UI/UX',
    description:
      'Mendesain tampilan dan alur pengguna yang bersih, modern, dan fokus pada konversi dengan perhatian pada tata letak, tipografi, dan pengalaman pengguna.',
  },
  {
    number: '04',
    name: 'Optimasi Performa & SEO',
    description:
      'Mempercepat waktu muat, memperbaiki Core Web Vitals, dan mengoptimalkan struktur website agar mudah ditemukan di mesin pencari.',
  },
  {
    number: '05',
    name: 'Deployment & Pemeliharaan',
    description:
      'Menangani hosting, CI/CD, dan pemeliharaan berkala agar website tetap aman, terbarui, dan berjalan lancar setiap saat.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="price"
      className="rounded-t-[40px] bg-[#DCE9F5] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="text-center font-black uppercase leading-none tracking-tight text-[#2C3440]"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Layanan
        </h2>
      </FadeIn>

      <div className="mx-auto mt-16 max-w-5xl sm:mt-20 md:mt-28">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1}>
            <div
              className="flex items-start gap-6 py-8 sm:gap-10 sm:py-10 md:gap-14 md:py-12"
              style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(44, 52, 64, 0.2)' }}
            >
              <span
                className="font-black leading-none text-[#2C3440]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </span>
              <div className="flex flex-col gap-3 pt-2">
                <h3
                  className="font-medium uppercase text-[#2C3440]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed text-[#2C3440]"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
