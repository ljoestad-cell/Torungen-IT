import content from '../data/content'

export default function Services() {
  return (
    <>
      {/* SERVICES */}
      <section id="tjenester" className="relative py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">Hva vi leverer</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Fire tydelige områder. Samme profesjonelle uttrykk.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Torungen IT hjelper små og mellomstore bedrifter med praktiske digitale løsninger som gir kontroll, trygghet og konkret verdi.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {content.focusAreas.map((area) => (
              <Service key={area.href} {...area} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function Service({ icon, title, description, href }) {
  return (
    <a href={href} className="group rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-2xl shadow-black/10 backdrop-blur transition hover:-translate-y-2 hover:bg-white/[0.09]">
      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-300/15 text-3xl ring-1 ring-cyan-300/20">{icon}</div>
      <h3 className="text-2xl font-black">{title}</h3>
      <p className="mt-4 leading-7 text-slate-300">{description}</p>
      <p className="mt-6 font-bold text-cyan-200">Les mer →</p>
    </a>
  )
}
