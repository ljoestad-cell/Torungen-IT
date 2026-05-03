export default function Pricing() {
  return (
    <section id="pakker" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Pakker</p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">Start med det viktigste. Bygg videre når du er klar.</h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <Price title="Ferdig webside" price="Fra 15 000 kr" highlight="Mest synlig verdi" items={["Profesjonelt design", "Mobilvennlig", "Kontaktknapper", "Publiseringsklar side"]} />
          <Price title="IT-drift" price="Fra 999 kr / mnd" highlight="Fast IT-partner" items={["Brukerstøtte", "Microsoft 365", "PC-oppsett", "Løpende rådgivning"]} featured />
          <Price title="Sikkerhet" price="Fra 499 kr / mnd" highlight="Reduser risiko" items={["MFA", "Conditional Access", "Defender", "Sikkerhetssjekk"]} />
        </div>
      </div>
    </section>
  )
}

function Price({ title, price, highlight, items, featured }) {
  return (
    <div className={`relative rounded-[2rem] p-8 shadow-glow ring-1 ${featured ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white ring-white/10" : "bg-slate-900/90 text-slate-100 ring-white/10"}`}>
      {featured && <span className="absolute right-6 top-6 rounded-full bg-brand-orange px-4 py-1.5 text-xs font-semibold text-white">Populær</span>}
      <p className={`text-sm font-semibold uppercase tracking-[0.35em] ${featured ? "text-orange-200" : "text-cyan-300"}`}>{highlight}</p>
      <h3 className="mt-4 text-3xl font-black">{title}</h3>
      <p className={`mt-5 text-3xl font-black ${featured ? "text-orange-200" : "text-white"}`}>{price}</p>
      <ul className={`mt-8 space-y-4 ${featured ? "text-slate-300" : "text-slate-400"}`}>
        {items.map((item) => <li key={item}>✓ {item}</li>)}
      </ul>
      <a href="mailto:ljoestad@gmail.com" className={`mt-8 block rounded-full px-6 py-4 text-center font-semibold transition duration-300 hover:-translate-y-1 ${featured ? "bg-brand-orange text-white hover:bg-[#fb923c]" : "bg-slate-800 text-white hover:bg-slate-700"}`}>Kontakt oss</a>
    </div>
  );
}
