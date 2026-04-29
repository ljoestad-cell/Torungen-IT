export default function CTA() {
  return (
    <>
      {/* CTA */}
      <section id="kontakt" className="relative overflow-hidden bg-cyan-300 py-24 text-slate-950">
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="text-4xl font-black tracking-tight sm:text-6xl">Klar for en enklere IT-hverdag?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-slate-800">
            Ta kontakt for en uforpliktende prat om nettside, Microsoft 365, sikkerhet eller drift.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="mailto:ljoestad@gmail.com" className="rounded-full bg-slate-950 px-8 py-4 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-slate-800">Send e-post</a>
            <a href="tel:90591820" className="rounded-full border-2 border-slate-950 px-8 py-4 font-bold transition hover:-translate-y-1 hover:bg-cyan-200">Ring 905 91 820</a>
          </div>
        </div>
      </section>
    </>
  )
}
