export default function LiveProjectButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border-2 border-[#2C3440] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#2C3440] transition-colors duration-200 hover:bg-[#2C3440]/10"
    >
      Lihat Proyek
    </a>
  );
}
