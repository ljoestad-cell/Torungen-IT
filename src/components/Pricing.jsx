export default function Pricing() {
  return (
    <>
      {/* PACKAGES */}
      <section id="pakker" className="bg-white py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#c2410c]">Pakker</p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">Start med det viktigste. Bygg videre når du er klar.</h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <Price title="Ferdig webside" price="Fra 15 000 kr" highlight="Mest synlig verdi" items={["Profesjonelt design", "Mobilvennlig", "Kontaktknapper", "Publiseringsklar side"]} />
            <Price title="IT-drift" price="Fra 999 kr / mnd" highlight="Fast IT-partner" items={["Brukerstøtte", "Microsoft 365", "PC-oppsett", "Løpende rådgivning"]} featured />
            <Price title="Sikkerhet" price="Fra 499 kr / mnd" highlight="Reduser risiko" items={["MFA", "Conditional Access", "Defender", "Sikkerhetssjekk"]} />
          </div>
        </div>
      </section>
    </>
  )
}

function Price({ title, price, highlight, items, featured }) {
  return (
    <div className={`relative rounded-[2rem] p-8 shadow-xl ring-1 ${featured ? "bg-slate-950 text-white ring-slate-950" : "bg-slate-50 text-slate-950 ring-slate-200"}`}>
      {featured && <span className="absolute right-6 top-6 rounded-full bg-[#f97316] px-4 py-1.5 text-xs font-black text-white">Populær</span>}
      <p className={`text-sm font-bold uppercase tracking-widest ${featured ? "text-orange-200" : "text-[#c2410c]"}`}>{highlight}</p>
      <h3 className="mt-4 text-3xl font-black">{title}</h3>
      <p className={`mt-5 text-3xl font-black ${featured ? "text-orange-200" : "text-slate-950"}`}>{price}</p>
      <ul className={`mt-8 space-y-4 ${featured ? "text-slate-300" : "text-slate-600"}`}>
        {items.map((item) => <li key={item}>✓ {item}</li>)}
      </ul>
      <a href="mailto:ljoestad@gmail.com" className={`mt-8 block rounded-full px-6 py-4 text-center font-black transition hover:-translate-y-1 ${featured ? "bg-[#f97316] text-white hover:bg-[#fb923c]" : "bg-slate-950 text-white hover:bg-slate-800"}`}>Kontakt oss</a>
    </div>
  );
}
