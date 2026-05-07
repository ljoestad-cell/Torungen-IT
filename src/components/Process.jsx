export default function Process() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-[0.35em] text-cyan-300">Slik jobber vi</p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">Enkelt fra første prat til ferdig løsning.</h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Step number="01" title="Kartlegging" text="Vi finner ut hva bedriften trenger, hva som ikke fungerer og hva som bør prioriteres." />
          <Step number="02" title="Leveranse" text="Vi setter opp nettside, Microsoft 365, sikkerhet eller drift etter avtalt pakke." />
          <Step number="03" title="Videre hjelp" text="Du kan bruke oss som fast IT-partner for support, endringer og forbedringer." />
        </div>
      </div>
    </section>
  )
}

function Step({ number, title, text }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-glow transition duration-300 hover:-translate-y-1">
      <p className="text-6xl font-black text-cyan-300/40">{number}</p>
      <h3 className="mt-8 text-2xl font-black text-white">{title}</h3>
      <p className="mt-4 leading-7 text-slate-300">{text}</p>
    </div>
  );
}
