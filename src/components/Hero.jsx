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
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-glow">
            <img
              src="/advokatfullmektig.png"
              alt="Profesjonell i arbeid"
              className="h-[540px] w-full object-cover object-[55%_12%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-slate-950/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 via-transparent to-slate-950/10" />
            <div className="absolute inset-0 bg-cyan-950/15 mix-blend-multiply" />
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
      <p className="mt-2 text-xs tracking-[0.3em] text-slate-400">{label}</p>
    </div>
  )
}

