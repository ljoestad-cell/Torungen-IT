import content from '../data/content'

const websitePackages = [
  {
    title: "Enkel landingsside",
    price: "9 990 kr",
    priceNote: "engangspris",
    description: "En profesjonell og mobilvennlig landingsside som presenterer bedriften din og gjør det enkelt for kunder å ta kontakt.",
    items: [
      "1 side med profesjonelt design",
      "Mobilvennlig og rask",
      "Kontaktknapper og CTA",
      "Publiseringsklar"
    ],
  },
  {
    title: "Webside med flere sider",
    price: "Fra 12 990 kr",
    priceNote: "engangspris",
    description: "En fullverdig nettside med flere undersider — tilpasset bedrifter som trenger mer innhold, tjenesteoversikt eller egne seksjoner.",
    items: [
      "Flere sider og undersider",
      "Profesjonelt og tilpasset design",
      "Mobilvennlig og rask",
      "Kontaktpunkter og CTA-er",
      "Publiseringsklar"
    ],
  },
]

const servicePackages = [
  {
    title: "Drift av M365",
    subtitle: "inkl. sikkerhet",
    price: "1 990 kr",
    priceNote: "per måned",
    description: "Løpende drift og sikkerhet for Microsoft 365-miljøet ditt. Vi holder orden på brukere, tilganger og sikkerhetskonfigurasjon.",
    items: [
      "Drift og vedlikehold av M365",
      "Brukeradministrasjon",
      "MFA og tilgangsstyring",
      "Sikkerhetsoppfølging",
    ],
  },
  {
    title: "Supportavtale",
    subtitle: "8t responstid 08–16",
    price: "1 490 kr",
    priceNote: "per måned",
    description: "Fast supportavtale med garantert respons innen 8 timer i arbeidstiden. Hjelp når du trenger det, uten å ringe rundt.",
    items: [
      "Respons innen 8 timer",
      "Mandag–fredag 08–16",
      "Feilsøking og brukerstøtte",
      "Praktisk hjelp i hverdagen",
    ],
  },
  {
    title: "M365 + Support",
    subtitle: "komplett driftspakke",
    price: "2 990 kr",
    priceNote: "per måned",
    description: "Alt i én avtale. Kombinerer drift og sikkerhet for Microsoft 365 med fast supportavtale — til en bedre pris enn separat.",
    items: [
      "Drift og sikkerhet for M365",
      "Fast supportavtale inkludert",
      "Respons innen 8 timer",
      "Én fast kontaktperson",
    ],
    featured: true,
  },
]

export default function Priser() {
  return (
    <section className="relative overflow-hidden py-20 bg-slate-950 text-white">
      <div className="absolute left-1/2 top-0 -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="absolute right-0 top-40 -z-10 h-96 w-96 rounded-full bg-blue-600/15 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <a href="/" className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-white/10">
          ← Til forsiden
        </a>

        <div className="mt-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Priser</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">Enkle priser. Ingen overraskelser.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">Velg det som passer bedriften din. Alle priser er eks. mva.</p>
        </div>

        <div className="mt-20">
          <CategoryHeader
            label="Nettsider"
            title="Engangspris — betaler du én gang"
            description="Vi designer og leverer nettsiden klar til publisering. Du eier siden og kan bygge videre."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {websitePackages.map((pkg) => (
              <WebsiteCard key={pkg.title} {...pkg} />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <CategoryHeader
            label="Driftsavtaler"
            title="Månedspris — løpende tjenester"
            description="Faste avtaler som gir deg ro i hverdagen. Faktureres månedlig og kan sies opp med én måneds varsel."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {servicePackages.map((pkg) => (
              <ServiceCard key={pkg.title} {...pkg} />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <CategoryHeader
            label="Fleksibel bistand"
            title="Timepris — betaler kun for tid brukt"
            description="Passer for enkeltoppdrag, rådgivning og hjelp som ikke passer en fast avtale."
          />
          <div className="mt-8 max-w-xl">
            <HourlyCard />
          </div>
        </div>

        <div className="mt-20 rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 text-center backdrop-blur">
          <p className="text-lg font-semibold text-white">Usikker på hva som passer?</p>
          <p className="mt-2 text-slate-300">Vi tar gjerne en uforpliktende prat og hjelper deg å finne riktig løsning.</p>
          <a
            href={`mailto:${content.company.email}?subject=Sp%C3%B8rsm%C3%A5l%20om%20priser`}
            className="mt-6 inline-flex rounded-full bg-gradient-to-r from-brand-orange via-[#f97316] to-[#fb923c] px-8 py-4 font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:brightness-110"
          >
            Ta kontakt
          </a>
          <p className="mt-4 text-sm text-slate-400">Alle priser er eks. mva.</p>
        </div>
      </div>
    </section>
  )
}

function CategoryHeader({ label, title, description }) {
  return (
    <div className="border-b border-white/10 pb-6">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">{label}</p>
      <h2 className="mt-2 text-3xl font-black sm:text-4xl">{title}</h2>
      <p className="mt-3 text-slate-400">{description}</p>
    </div>
  )
}

function WebsiteCard({ title, price, priceNote, description, items }) {
  return (
    <div className="flex flex-col rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-glow backdrop-blur transition duration-300 hover:-translate-y-1">
      <h3 className="text-2xl font-black text-white">{title}</h3>
      <p className="mt-2 leading-7 text-slate-400">{description}</p>
      <div className="mt-6">
        <span className="text-4xl font-black text-white">{price}</span>
        <span className="ml-2 text-sm text-slate-400">{priceNote}</span>
      </div>
      <ul className="mt-6 flex-1 space-y-3 text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-xs font-black text-slate-950">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <a
        href={`mailto:${content.company.email}?subject=Foresp%C3%B8rsel%20nettside`}
        className="mt-8 block rounded-full bg-slate-800 px-6 py-4 text-center font-semibold text-white transition duration-300 hover:bg-slate-700"
      >
        Kontakt oss
      </a>
    </div>
  )
}

function ServiceCard({ title, subtitle, price, priceNote, description, items, featured }) {
  return (
    <div className={`relative flex flex-col rounded-[2rem] p-8 shadow-glow backdrop-blur transition duration-300 hover:-translate-y-1 ${featured ? "bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 ring-2 ring-brand-orange/60" : "border border-white/10 bg-slate-900/80"}`}>
      {featured && (
        <span className="absolute right-6 top-6 rounded-full bg-brand-orange px-4 py-1.5 text-xs font-semibold text-white">
          Mest populær
        </span>
      )}
      <div>
        <h3 className="text-2xl font-black text-white">{title}</h3>
        <p className={`text-sm font-medium ${featured ? "text-orange-300" : "text-cyan-300"}`}>{subtitle}</p>
      </div>
      <p className="mt-3 leading-7 text-slate-400">{description}</p>
      <div className="mt-6">
        <span className={`text-4xl font-black ${featured ? "text-orange-200" : "text-white"}`}>{price}</span>
        <span className="ml-2 text-sm text-slate-400">{priceNote}</span>
      </div>
      <ul className="mt-6 flex-1 space-y-3 text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-black ${featured ? "bg-orange-300 text-slate-950" : "bg-cyan-300 text-slate-950"}`}>✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <a
        href={`mailto:${content.company.email}?subject=Foresp%C3%B8rsel%20driftsavtale`}
        className={`mt-8 block rounded-full px-6 py-4 text-center font-semibold text-white transition duration-300 hover:-translate-y-1 ${featured ? "bg-brand-orange hover:brightness-110" : "bg-slate-800 hover:bg-slate-700"}`}
      >
        Kontakt oss
      </a>
    </div>
  )
}

function HourlyCard() {
  return (
    <div className="flex flex-col rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-glow backdrop-blur transition duration-300 hover:-translate-y-1 sm:flex-row sm:items-center sm:gap-10">
      <div className="shrink-0">
        <span className="text-5xl font-black text-white">1 290 kr</span>
        <span className="ml-2 text-sm text-slate-400">per time</span>
      </div>
      <div className="mt-4 sm:mt-0">
        <h3 className="text-xl font-black text-white">Timepris</h3>
        <p className="mt-2 leading-7 text-slate-400">Passer for enkeltoppdrag, rådgivning, oppsett og bistand der en fast avtale ikke er nødvendig. Faktureres per påbegynt time.</p>
        <a
          href={`mailto:${content.company.email}?subject=Foresp%C3%B8rsel%20timepris`}
          className="mt-5 inline-flex rounded-full bg-slate-800 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-slate-700"
        >
          Kontakt oss
        </a>
      </div>
    </div>
  )
}
