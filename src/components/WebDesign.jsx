export default function WebDesign() {
  return (
    <>
      {/* WEB DESIGN */}
      <section id="webdesign" className="bg-slate-50 py-24 text-slate-950">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-700">Webdesign</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">En nettside skal ikke bare være pen. Den skal skaffe henvendelser.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Vi bygger nettsider med tydelig budskap, god mobilopplevelse og konkrete kontaktpunkter. Perfekt for lokale bedrifter som vil se mer seriøse ut og få flere kunder.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Check text="Mobiloptimalisert" />
              <Check text="Tydelig CTA" />
              <Check text="Rask lastetid" />
              <Check text="SEO-klar struktur" />
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-5 shadow-2xl ring-1 ring-slate-200">
            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-950 text-white">
              <div className="flex items-center justify-between border-b border-white/10 p-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-300" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-slate-400">Eksempel på kundeside</span>
              </div>
              <div className="p-6">
                <div className="rounded-3xl bg-gradient-to-br from-cyan-300 to-blue-500 p-8 text-slate-950">
                  <p className="font-bold uppercase tracking-widest">Din bedrift</p>
                  <h3 className="mt-16 text-4xl font-black">Få flere kunder med en bedre nettside</h3>
                  <button className="mt-6 rounded-full bg-slate-950 px-6 py-3 font-bold text-white">Kontakt oss</button>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div className="h-24 rounded-2xl bg-white/10" />
                  <div className="h-24 rounded-2xl bg-white/10" />
                  <div className="h-24 rounded-2xl bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Check({ text }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100 font-black text-cyan-800">✓</span>
      <span className="font-bold">{text}</span>
    </div>
  );
}
