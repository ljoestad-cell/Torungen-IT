import content from '../data/content'

export default function Navbar() {
  return (
    <>
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Torungen IT logo"
              className="h-[58px] w-[58px] rounded-xl bg-white/10 object-contain p-1.5"
            />
            <div>
              <p className="text-lg font-bold leading-none">
                Torungen <span className="text-[#f97316]">IT</span>
              </p>
              <p className="text-xs text-cyan-200/80">Nettsider • AI • M365 • Sikkerhet</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="/#tjenester" className="hover:text-white">Tjenester</a>
            {content.focusAreas.map((area) => (
              <a key={area.href} href={area.href} className="hover:text-white">
                {area.shortTitle}
              </a>
            ))}
          </nav>

          <a href={`mailto:${content.company.email}?subject=Gratis%20IT-sjekk`} className="hidden rounded-full bg-[#f97316] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:scale-105 hover:bg-[#fb923c] md:block">
            Gratis IT-sjekk
          </a>
        </div>
      </header>
    </>
  )
}
