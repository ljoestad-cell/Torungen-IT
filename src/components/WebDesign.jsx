export default function WebDesign() {
  return (
    <section id="webdesign" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold tracking-[0.35em] text-cyan-300">Webdesign</p>
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
            href="mailto:ljoestad@gmail.com?subject=Synlighet"
            className="mt-8 inline-flex rounded-full bg-gradient-to-r from-brand-orange via-[#fb923c] to-[#f97316] px-7 py-4 font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:brightness-110"
          >
            Vi hjelper deg med synlighet på Google og sosiale medier!
          </a>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-4 shadow-glow backdrop-blur-sm">
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-gray-100 text-slate-900 shadow-inner">
            {/* Browser chrome */}
            <div className="flex items-center gap-3 border-b border-gray-200 bg-gray-200 px-4 py-3">
              <div className="flex gap-1.5 shrink-0">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 rounded-full bg-white px-4 py-1 text-xs text-gray-400 text-center border border-gray-300">
                www.din-bedrift.no
              </div>
            </div>
            {/* Nettside-innhold */}
            <div className="bg-slate-900 text-white">
              {/* Navbar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
                <div className="h-3 w-20 rounded-full bg-white/70" />
                <div className="flex gap-4">
                  <div className="h-2 w-10 rounded-full bg-white/30" />
                  <div className="h-2 w-10 rounded-full bg-white/30" />
                  <div className="h-2 w-10 rounded-full bg-white/30" />
                </div>
                <div className="h-6 w-20 rounded-full bg-brand-orange/90" />
              </div>
              {/* Hero-seksjon */}
              <div className="px-5 py-7 bg-gradient-to-br from-slate-800 to-slate-900">
                <div className="h-2 w-28 rounded-full bg-cyan-300/50 mb-3" />
                <div className="h-4 w-4/5 rounded-full bg-white/80 mb-2" />
                <div className="h-4 w-2/3 rounded-full bg-white/60 mb-5" />
                <div className="h-2.5 w-full rounded-full bg-white/20 mb-1.5" />
                <div className="h-2.5 w-5/6 rounded-full bg-white/20 mb-5" />
                <div className="h-8 w-32 rounded-full bg-brand-orange" />
              </div>
              {/* Tjenestekort */}
              <div className="px-5 py-5 bg-slate-950">
                <div className="h-2.5 w-36 rounded-full bg-white/40 mb-4" />
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { accent: 'bg-cyan-300/25' },
                    { accent: 'bg-brand-orange/25' },
                    { accent: 'bg-blue-400/25' },
                  ].map((card, i) => (
                    <div key={i} className="rounded-2xl bg-slate-800/80 p-3">
                      <div className={`h-6 w-6 rounded-xl ${card.accent} mb-2`} />
                      <div className="h-2 w-14 rounded-full bg-white/50 mb-2" />
                      <div className="h-2 w-full rounded-full bg-white/20 mb-1" />
                      <div className="h-2 w-3/4 rounded-full bg-white/20" />
                    </div>
                  ))}
                </div>
              </div>
              {/* CTA-stripe */}
              <div className="mx-5 mb-5 rounded-2xl bg-gradient-to-r from-brand-orange to-[#fb923c] p-4 flex items-center justify-between">
                <div className="space-y-1.5">
                  <div className="h-2.5 w-36 rounded-full bg-white/80" />
                  <div className="h-2 w-28 rounded-full bg-white/50" />
                </div>
                <div className="h-8 w-24 rounded-full bg-slate-900/80 shrink-0" />
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
