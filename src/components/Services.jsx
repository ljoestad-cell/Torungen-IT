export default function Services() {
  return (
    <>
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
    </>
  )
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
