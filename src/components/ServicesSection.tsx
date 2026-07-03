import FadeIn from './FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'Katalog Produk & Admin Dashboard',
    description:
      'Etalase produk online dengan dashboard admin, jadi kamu bisa tambah, ubah, dan sembunyikan produk sendiri tanpa perlu memanggil developer setiap ada perubahan.',
  },
  {
    number: '02',
    name: 'Company Profile / Landing Page',
    description:
      'Website profil usaha yang cepat dan rapi: siapa kamu, apa yang kamu tawarkan, dan cara menghubungimu. Dirancang supaya pengunjung langsung tahu harus klik apa.',
  },
  {
    number: '03',
    name: 'Sistem Booking / Reservasi',
    description:
      'Pelanggan pilih jadwal dan booking sendiri dari HP-nya, kamu tinggal terima notifikasi. Tidak perlu lagi balas chat satu per satu untuk mengatur janji.',
  },
  {
    number: '04',
    name: 'Undangan Digital',
    description:
      'Undangan pernikahan atau acara berbentuk website: peta lokasi, RSVP, galeri foto, dan hitung mundur. Tinggal kirim link-nya lewat WhatsApp.',
  },
  {
    number: '05',
    name: 'Menu Digital QR Code',
    description:
      'Untuk kafe, resto, dan warung: pelanggan scan QR di meja, menu langsung terbuka di HP mereka. Ganti harga atau menu kapan saja tanpa cetak ulang.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="price"
      className="rounded-t-[40px] bg-[#FDF6EC] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
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
          <FadeIn key={service.number} delay={i * 0.08} x={i % 2 === 0 ? -100 : 100} y={0} duration={0.9}>
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
