export default function Navbar() {
  return (
    <>
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <img src="/logo.png" alt="Torungen IT logo" className="h-12 w-12 rounded-xl bg-white/10 object-contain p-1.5" />
            <div>
              <p className="text-lg font-bold leading-none">Torungen IT</p>
              <p className="text-xs text-cyan-200/80">IT • Web • Sikkerhet</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#tjenester" className="hover:text-white">Tjenester</a>
            <a href="#webdesign" className="hover:text-white">Webdesign</a>
            <a href="#pakker" className="hover:text-white">Priser</a>
            <a href="#kontakt" className="hover:text-white">Kontakt</a>
          </nav>

          <a href="mailto:ljoestad@gmail.com" className="hidden rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-105 md:block">
            Gratis IT-sjekk
          </a>
        </div>
      </header>
    </>
  )
}
