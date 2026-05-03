import content from '../data/content'

export default function Hero() {
  const { hero, company } = content

  return (
    <section id="top" className="relative isolate overflow-hidden py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 -z-10 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute right-0 top-24 -z-10 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full bg-brand-orange/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            {hero.eyebrow}
          </div>

          <h1 className="max-w-3xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl leading-tight">
            {hero.title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            {hero.text}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#tjenester" className="inline-flex rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-brand-orange px-8 py-4 text-center font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:brightness-105">
              {hero.primaryCta}
            </a>
            <a href={`tel:${company.phone}`} className="inline-flex rounded-full border border-white/15 bg-white/10 px-8 py-4 text-center font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/15">
              {hero.secondaryCta}
            </a>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 text-center">
            <Stat number="4" label="Satsingsområder" />
            <Stat number="M365" label="Oppsett & drift" />
            <Stat number="SMB" label="Spesialist" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-cyan-300/25 to-brand-orange/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-4 shadow-glow backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-slate-950/95 p-6">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-300" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-300">torungen-it.no</span>
              </div>

              <div className="grid gap-4 md:grid-cols-5">
                <div className="rounded-3xl bg-gradient-to-br from-brand-orange via-cyan-300 to-blue-500 p-6 text-slate-950 md:col-span-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em]">Torungen IT</p>
                  <h3 className="mt-8 text-3xl font-black leading-tight">Nettsider, AI, M365 og sikkerhet</h3>
                  <p className="mt-4 text-sm font-medium text-slate-900/90">Fire områder. Samme tydelige profil. Ett trygt IT-miljø.</p>
                </div>
                <div className="space-y-4 md:col-span-2">
                  <MiniPanel title="Nettsider" value="Flere henvendelser" />
                  <MiniPanel title="AI" value="Praktisk verdi" />
                  <MiniPanel title="Sikkerhet" value="Bygget inn" />
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <PanelSquare label="M365" value="Kontroll" accent="text-cyan-200" />
                <PanelSquare label="AI" value="Effekt" accent="text-cyan-200" />
                <PanelSquare label="Status" value="Tryggere" badge />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ number, label }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/80 px-5 py-6 backdrop-blur-sm">
      <p className="text-xl font-black tracking-tight text-cyan-200">{number}</p>
      <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-400">{label}</p>
    </div>
  )
}

function MiniPanel({ title, value }) {
  return (
    <div className="rounded-3xl bg-slate-900/80 p-5">
      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{title}</p>
      <p className="mt-3 text-lg font-semibold text-white">{value}</p>
    </div>
  )
}

function PanelSquare({ label, value, accent, badge }) {
  return (
    <div className="rounded-3xl bg-white/5 p-5 text-left">
      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{label}</p>
      <p className={`mt-5 text-2xl font-black ${accent || 'text-white'}`}>{value}</p>
      {badge && (
        <span className="mt-4 inline-flex rounded-full bg-emerald-400/15 px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
          Tryggere
        </span>
      )}
    </div>
  )
}
