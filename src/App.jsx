export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-cyan-950 opacity-90" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-4">
              <img
                src="/logo.png"
                alt="Torungen IT logo"
                className="h-20 w-20 rounded-2xl object-contain bg-white/10 p-2"
              />
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Torungen IT</p>
                <p className="text-sm text-slate-300">Trygg IT-partner for små og mellomstore bedrifter</p>
              </div>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              IT som bare fungerer – uten stress
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
              Vi hjelper små og mellomstore bedrifter med moderne nettsider, Microsoft 365,
              IT-sikkerhet og drift som gir en enklere arbeidshverdag.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:ljoestad@gmail.com"
                className="rounded-full bg-cyan-400 px-8 py-4 text-center font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
              >
                Få gratis IT-sjekk
              </a>
              <a
                href="tel:90591820"
                className="rounded-full border border-white/20 px-8 py-4 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Ring 905 91 820
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20 text-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">Tjenester</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Digital grunnmur for bedriften din
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Du trenger ikke komplisert IT. Du trenger løsninger som er trygge, enkle og lønnsomme.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              title="Webdesign"
              text="Moderne, raske og mobilvennlige nettsider som skaper henvendelser – ikke bare pynt."
            />
            <ServiceCard
              title="Microsoft 365"
              text="Riktig oppsett av e-post, Teams, SharePoint, OneDrive, brukere og rettigheter."
            />
            <ServiceCard
              title="IT-sikkerhet"
              text="MFA, Conditional Access, Defender, backup og grunnleggende beskyttelse mot datatap."
            />
            <ServiceCard
              title="Drift & support"
              text="Fast IT-partner for brukerstøtte, PC-oppsett, enhetsstyring og løpende hjelp."
            />
          </div>
        </div>
      </section>

      {/* Web design pitch */}
      <section className="bg-slate-100 py-20 text-slate-950">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">Webdesign</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              En nettside skal skaffe kunder – ikke bare se fin ut
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Mange små bedrifter har nettsider som er utdaterte, trege eller uklare. Vi lager sider
              med tydelig budskap, god mobilvisning og en enkel vei for kunden til å ta kontakt.
            </p>
            <ul className="mt-8 space-y-4 text-slate-700">
              <li>✓ Mobiloptimalisert design</li>
              <li>✓ Tydelige kontaktpunkter og CTA</li>
              <li>✓ Rask lastetid og moderne struktur</li>
              <li>✓ Klar for videre SEO og annonsering</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <p className="text-sm font-semibold text-cyan-700">Startpakke</p>
            <h3 className="mt-3 text-4xl font-bold">Ferdig webside</h3>
            <p className="mt-4 text-slate-600">
              Passer for små bedrifter som trenger en profesjonell og salgsrettet nettside raskt.
            </p>
            <div className="mt-8 rounded-2xl bg-slate-950 p-6 text-white">
              <p className="text-slate-300">Fra</p>
              <p className="text-5xl font-bold">15 000 kr</p>
            </div>
            <a
              href="mailto:ljoestad@gmail.com?subject=Jeg%20vil%20ha%20tilbud%20på%20webside"
              className="mt-8 block rounded-full bg-cyan-400 px-8 py-4 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Be om tilbud
            </a>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-white py-20 text-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">Hvorfor Torungen IT?</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Trygghet, oversikt og praktisk hjelp
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Vi snakker forståelig, leverer konkrete løsninger og hjelper deg å ta bedre valg for bedriftens IT.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Feature title="Fast pris" text="Forutsigbare kostnader og tydelige leveranser." />
            <Feature title="Enkelt språk" text="Vi forklarer IT uten unødvendig teknisk sjargong." />
            <Feature title="Lokal partner" text="Basert på Sørlandet, med fokus på små og mellomstore bedrifter." />
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Pakker</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Start enkelt – bygg videre når behovet vokser
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <PriceCard
              title="Webside"
              price="Fra 15 000 kr"
              items={["Moderne design", "Mobiltilpasset", "Kontaktknapper", "Klar for publisering"]}
            />
            <PriceCard
              title="IT-drift"
              price="Fra 999 kr / mnd"
              items={["Brukerstøtte", "PC-oppsett", "Microsoft 365-hjelp", "Løpende rådgivning"]}
            />
            <PriceCard
              title="Sikkerhet"
              price="Fra 499 kr / mnd"
              items={["MFA", "Conditional Access", "Defender", "Backup-rådgivning"]}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cyan-400 py-20 text-slate-950">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Klar for en enklere IT-hverdag?
          </h2>
          <p className="mt-6 text-lg">
            Send en e-post eller ring oss, så tar vi en uforpliktende prat om hva bedriften din trenger.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:ljoestad@gmail.com"
              className="rounded-full bg-slate-950 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
            >
              ljoestad@gmail.com
            </a>
            <a
              href="tel:90591820"
              className="rounded-full border border-slate-950 px-8 py-4 font-semibold transition hover:bg-cyan-300"
            >
              905 91 820
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({ title, text }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5 h-12 w-12 rounded-2xl bg-cyan-100" />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-3 text-slate-600">{text}</p>
    </div>
  );
}

function Feature({ title, text }) {
  return (
    <div className="rounded-3xl bg-slate-100 p-8">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-3 text-slate-600">{text}</p>
    </div>
  );
}

function PriceCard({ title, price, items }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-4 text-3xl font-bold text-cyan-300">{price}</p>
      <ul className="mt-8 space-y-3 text-slate-300">
        {items.map((item) => (
          <li key={item}>✓ {item}</li>
        ))}
      </ul>
      <a
        href="mailto:ljoestad@gmail.com"
        className="mt-8 block rounded-full bg-white px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
      >
        Kontakt oss
      </a>
    </div>
  );
}
