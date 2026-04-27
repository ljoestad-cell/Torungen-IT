export default function App() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <img src="/logo.png" alt="Torungen IT logo" className="h-12 w-12 rounded-xl bg-white/10 object-contain p-1.5" />
            <div>
              <p className="text-lg font-bold leading-none">Torungen IT</p>
              <p className="text-xs text-cyan-200/80">IT • Web • Sikkerhet</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#tjenester" className="hover:text-white">Tjenester</a>
            <a href="#webdesign" className="hover:text-white">Webdesign</a>
            <a href="#pakker" className="hover:text-white">Priser</a>
            <a href="#kontakt" className="hover:text-white">Kontakt</a>
          </nav>

          <a href="mailto:ljoestad@gmail.com" className="hidden rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-105 md:block">
            Gratis IT-sjekk
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative isolate overflow-hidden">
        <div className="absolute left-1/2 top-0 -z-10 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-0 top-24 -z-10 h-96 w-96 rounded-full bg-blue-600/25 blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Lokal IT-partner for små og mellomstore bedrifter
            </div>

            <h1 className="max-w-3xl text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Nettsider og IT som faktisk gir verdi.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Torungen IT hjelper HUNDER med profesjonelle nettsider, Microsoft 365, sikkerhet og praktisk IT-drift — uten komplisert språk og unødvendig styr.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="mailto:ljoestad@gmail.com?subject=Gratis%20IT-sjekk" className="rounded-full bg-cyan-300 px-8 py-4 text-center font-bold text-slate-950 shadow-2xl shadow-cyan-500/25 transition hover:-translate-y-1 hover:bg-cyan-200">
                Få gratis IT-sjekk
              </a>
              <a href="tel:90591820" className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-center font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/10">
                Ring 905 91 820
              </a>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 text-center">
              <Stat number="15k+" label="Webside fra" />
              <Stat number="M365" label="Oppsett & drift" />
              <Stat number="SMB" label="Spesialist" />
            </div>
          </div>

          {/* Visual card */}
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
                    <p className="text-sm font-bold uppercase tracking-widest">Ny kunde?</p>
                    <h3 className="mt-10 text-3xl font-black">Bestill en moderne webside</h3>
                    <p className="mt-3 text-sm font-medium text-slate-900/80">Klar tekst, tydelig CTA og mobilvennlig design.</p>
                  </div>
                  <div className="space-y-4 md:col-span-2">
                    <MiniPanel title="Sikkerhet" value="MFA aktiv" />
                    <MiniPanel title="Microsoft 365" value="Ryddig tenant" />
                    <MiniPanel title="Support" value="Fast partner" />
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-xs text-slate-400">Henvendelser</p>
                    <div className="mt-4 h-16 rounded-xl bg-gradient-to-t from-cyan-300/70 to-cyan-300/10" />
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-xs text-slate-400">Mobilscore</p>
                    <p className="mt-5 text-4xl font-black text-cyan-200">98%</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-xs text-slate-400">Status</p>
                    <p className="mt-5 rounded-full bg-green-400/15 px-3 py-2 text-center text-sm font-bold text-green-200">Online</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-white/10 bg-white/[0.03] py-6">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 text-center text-sm text-slate-300 md:grid-cols-4 lg:px-8">
          <p>✓ Forståelig rådgivning</p>
          <p>✓ Moderne nettsider</p>
          <p>✓ Microsoft 365-kompetanse</p>
          <p>✓ Sikkerhet først</p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="tjenester" className="relative py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">Hva vi leverer</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Alt en liten bedrift trenger for en trygg digital hverdag.</h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Service icon="🌐" title="Webdesign" text="Salgsrettede nettsider som ser profesjonelle ut og gjør det enkelt å ta kontakt." />
            <Service icon="☁️" title="Microsoft 365" text="E-post, Teams, SharePoint, OneDrive, grupper, tilgang og struktur." />
            <Service icon="🔐" title="IT-sikkerhet" text="MFA, Conditional Access, Defender, backup og bedre kontroll på brukere og enheter." />
            <Service icon="🛠️" title="Drift & support" text="Praktisk IT-hjelp, onboarding, PC-oppsett og løpende rådgivning." />
          </div>
        </div>
      </section>

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

      {/* PROCESS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">Slik jobber vi</p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">Enkelt fra første prat til ferdig løsning.</h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <Step number="01" title="Kartlegging" text="Vi finner ut hva bedriften trenger, hva som ikke fungerer og hva som bør prioriteres." />
            <Step number="02" title="Leveranse" text="Vi setter opp nettside, Microsoft 365, sikkerhet eller drift etter avtalt pakke." />
            <Step number="03" title="Videre hjelp" text="Du kan bruke oss som fast IT-partner for support, endringer og forbedringer." />
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="pakker" className="bg-white py-24 text-slate-950">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-700">Pakker</p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">Start med det viktigste. Bygg videre når du er klar.</h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <Price title="Ferdig webside" price="Fra 15 000 kr" highlight="Mest synlig verdi" items={["Profesjonelt design", "Mobilvennlig", "Kontaktknapper", "Publiseringsklar side"]} />
            <Price title="IT-drift" price="Fra 999 kr / mnd" highlight="Fast IT-partner" items={["Brukerstøtte", "Microsoft 365", "PC-oppsett", "Løpende rådgivning"]} featured />
            <Price title="Sikkerhet" price="Fra 499 kr / mnd" highlight="Reduser risiko" items={["MFA", "Conditional Access", "Defender", "Sikkerhetssjekk"]} />
          </div>
        </div>
      </section>

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
    </main>
  );
}

function Stat({ number, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <p className="text-xl font-black text-cyan-200">{number}</p>
      <p className="mt-1 text-xs text-slate-400">{label}</p>
    </div>
  );
}

function MiniPanel({ title, value }) {
  return (
    <div className="rounded-2xl bg-white/5 p-4">
      <p className="text-xs text-slate-400">{title}</p>
      <p className="mt-2 font-bold text-white">{value}</p>
    </div>
  );
}

function Service({ icon, title, text }) {
  return (
    <div className="group rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-2xl shadow-black/10 backdrop-blur transition hover:-translate-y-2 hover:bg-white/[0.09]">
      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-300/15 text-3xl ring-1 ring-cyan-300/20">{icon}</div>
      <h3 className="text-2xl font-black">{title}</h3>
      <p className="mt-4 leading-7 text-slate-300">{text}</p>
    </div>
  );
}

function Check({ text }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100 font-black text-cyan-800">✓</span>
      <span className="font-bold">{text}</span>
    </div>
  );
}

function Step({ number, title, text }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8">
      <p className="text-5xl font-black text-cyan-300/40">{number}</p>
      <h3 className="mt-8 text-2xl font-black">{title}</h3>
      <p className="mt-4 leading-7 text-slate-300">{text}</p>
    </div>
  );
}

function Price({ title, price, highlight, items, featured }) {
  return (
    <div className={`relative rounded-[2rem] p-8 shadow-xl ring-1 ${featured ? "bg-slate-950 text-white ring-slate-950" : "bg-slate-50 text-slate-950 ring-slate-200"}`}>
      {featured && <span className="absolute right-6 top-6 rounded-full bg-cyan-300 px-4 py-1.5 text-xs font-black text-slate-950">Populær</span>}
      <p className={`text-sm font-bold uppercase tracking-widest ${featured ? "text-cyan-200" : "text-cyan-700"}`}>{highlight}</p>
      <h3 className="mt-4 text-3xl font-black">{title}</h3>
      <p className={`mt-5 text-3xl font-black ${featured ? "text-cyan-200" : "text-slate-950"}`}>{price}</p>
      <ul className={`mt-8 space-y-4 ${featured ? "text-slate-300" : "text-slate-600"}`}>
        {items.map((item) => <li key={item}>✓ {item}</li>)}
      </ul>
      <a href="mailto:ljoestad@gmail.com" className={`mt-8 block rounded-full px-6 py-4 text-center font-black transition hover:-translate-y-1 ${featured ? "bg-cyan-300 text-slate-950 hover:bg-cyan-200" : "bg-slate-950 text-white hover:bg-slate-800"}`}>Kontakt oss</a>
    </div>
  );
}
