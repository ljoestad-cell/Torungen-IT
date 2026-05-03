export default function WebDesign() {
  return (
    <section id="webdesign" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Webdesign</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">En nettside skal ikke bare være pen. Den skal skaffe henvendelser.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Vi bygger nettsider med tydelig budskap, god mobilopplevelse og konkrete kontaktpunkter. Perfekt for lokale bedrifter som vil se mer seriøse ut og få flere kunder.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Check text="Mobiloptimalisert" />
            <Check text="Tydelig CTA" />
            <Check text="Rask lastetid" />
            <Check text="SEO-klart innhold" />
          </div>

          <a
            href="mailto:ljoestad@gmail.com?subject=E-markedsføring"
            className="mt-8 inline-flex rounded-full bg-gradient-to-r from-brand-orange via-[#fb923c] to-[#f97316] px-7 py-4 font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:brightness-110"
          >
            Vi hjelper deg også med e-markedsføring!
          </a>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-5 shadow-glow backdrop-blur-sm">
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950 text-white">
            <div className="flex items-center justify-between border-b border-white/10 p-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-300" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs text-slate-400">Eksempel på kundeside</span>
            </div>
            <div className="p-6">
              <div className="rounded-3xl bg-gradient-to-br from-brand-orange via-cyan-300 to-blue-500 p-8 text-slate-950">
                <p className="font-semibold uppercase tracking-[0.3em]">Din bedrift</p>
                <h3 className="mt-16 text-4xl font-black">Få flere kunder med en bedre nettside</h3>
                <button className="mt-6 rounded-full bg-slate-950 px-6 py-3 font-semibold text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-1">
                  Kontakt oss
                </button>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="h-24 rounded-3xl bg-white/10" />
                <div className="h-24 rounded-3xl bg-white/10" />
                <div className="h-24 rounded-3xl bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Check({ text }) {
  return (
    <div className="flex items-center gap-3 rounded-3xl bg-slate-900/80 p-4 shadow-sm ring-1 ring-white/10">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-orange/15 font-black text-brand-orange">✓</span>
      <span className="font-semibold text-white">{text}</span>
    </div>
  );
}
