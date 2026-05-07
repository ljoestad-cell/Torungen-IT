import content from '../data/content'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5 lg:px-8">
        <div className="flex items-center gap-3">
          <img src="/torungen_it_icon_transparent.png" alt="Torungen IT" className="h-14 w-14 object-contain" />
          <img src="/torungen_it_text_transparent.png" alt="Torungen IT" className="h-14 w-auto object-contain" />
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          <a href="/#tjenester" className="transition hover:text-white">Tjenester</a>
          {content.focusAreas.map((area) => (
            <a key={area.href} href={area.href} className="transition hover:text-white">
              {area.shortTitle}
            </a>
          ))}
        </nav>

        <a href={`mailto:${content.company.email}?subject=Gratis%20IT-sjekk`} className="hidden rounded-full bg-gradient-to-r from-brand-orange via-[#f97316] to-[#fb923c] px-5 py-3 text-sm font-semibold text-white shadow-glow transition duration-300 hover:scale-[1.02] md:inline-flex">
          Gratis IT-sjekk
        </a>
      </div>
    </header>
  )
}
