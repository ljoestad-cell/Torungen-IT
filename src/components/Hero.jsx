import content from '../data/content'

export default function Hero() {
  const { hero, company } = content

  return (
    <>
      {/* HERO */}
      <section id="top" className="relative isolate overflow-hidden">
        <div className="absolute left-1/2 top-0 -z-10 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-0 top-24 -z-10 h-96 w-96 rounded-full bg-blue-600/25 blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              {hero.eyebrow}
            </div>

            <h1 className="max-w-3xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              {hero.title}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              {hero.text}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#tjenester" className="rounded-full bg-cyan-300 px-8 py-4 text-center font-bold text-slate-950 shadow-2xl shadow-cyan-500/25 transition hover:-translate-y-1 hover:bg-cyan-200">
                {hero.primaryCta}
              </a>
              <a href={`tel:${company.phone}`} className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-center font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/10">
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
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-cyan-300/30 to-blue-600/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-slate-950/80 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-300" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200">torungen-it.no</span>
                </div>

                <div className="grid gap-4 md:grid-cols-5">
                  <div className="rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-500 p-5 text-slate-950 md:col-span-3">
                    <p className="text-sm font-bold uppercase tracking-widest">Torungen IT</p>
                    <h3 className="mt-10 text-3xl font-black">Nettsider, AI, M365 og sikkerhet</h3>
                    <p className="mt-3 text-sm font-medium text-slate-900/80">Fire områder. Samme tydelige profil. Ett trygt IT-miljø.</p>
                  </div>
                  <div className="space-y-4 md:col-span-2">
                    <MiniPanel title="Nettsider" value="Flere henvendelser" />
                    <MiniPanel title="AI" value="Praktisk verdi" />
                    <MiniPanel title="Sikkerhet" value="Bygget inn" />
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-xs text-slate-400">M365</p>
                    <p className="mt-5 text-2xl font-black text-cyan-200">Kontroll</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-xs text-slate-400">AI</p>
                    <p className="mt-5 text-2xl font-black text-cyan-200">Effekt</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-xs text-slate-400">Status</p>
                    <p className="mt-5 rounded-full bg-green-400/15 px-3 py-2 text-center text-sm font-bold text-green-200">Tryggere</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Stat({ number, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <p className="text-xl font-black text-cyan-200">{number}</p>
      <p className="mt-1 text-xs text-slate-400">{label}</p>
    </div>
  )
}

function MiniPanel({ title, value }) {
  return (
    <div className="rounded-2xl bg-white/5 p-4">
      <p className="text-xs text-slate-400">{title}</p>
      <p className="mt-2 font-bold text-white">{value}</p>
    </div>
  )
}
