import content from '../data/content'

export default function ServicePage({ page }) {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute left-1/2 top-0 -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute right-0 top-40 -z-10 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <a href="/" className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-cyan-100 transition hover:bg-white/10">
          ← Til forsiden
        </a>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_.75fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">{page.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight sm:text-6xl">{page.title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">{page.intro}</p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {page.sections.map((section) => (
                <article key={section.heading} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-2xl shadow-black/10 backdrop-blur">
                  <h2 className="text-2xl font-black">{section.heading}</h2>
                  <p className="mt-4 leading-7 text-slate-300">{section.text}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-7 shadow-2xl shadow-cyan-950/30 backdrop-blur lg:sticky lg:top-28">
            <h2 className="text-2xl font-black">Dette kan vi hjelpe med</h2>
            <ul className="mt-6 space-y-4 text-slate-200">
              {page.bullets.map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-sm font-black text-slate-950">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-[1.5rem] bg-slate-950/70 p-6 ring-1 ring-white/10">
              <h3 className="text-xl font-black">{page.ctaTitle}</h3>
              <p className="mt-3 leading-7 text-slate-300">{page.ctaText}</p>
              <a href={`mailto:${content.company.email}?subject=${encodeURIComponent(page.eyebrow)}`} className="mt-6 block rounded-full bg-cyan-300 px-6 py-4 text-center font-black text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-200">
                Kontakt Torungen IT
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
