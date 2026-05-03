import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Services from './components/Services'
import WebDesign from './components/WebDesign'
import Process from './components/Process'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Websites from './pages/Websites'
import AI from './pages/AI'
import M365 from './pages/M365'
import Security from './pages/Security'

function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <WebDesign />
      <Process />
      <Pricing />
      <CTA />
    </>
  )
}

function CurrentPage() {
  const path = window.location.pathname

  if (path === '/nettsider') return <Websites />
  if (path === '/ai') return <AI />
  if (path === '/m365') return <M365 />
  if (path === '/sikkerhet') return <Security />

  return <HomePage />
}

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <CurrentPage />
    </main>
  )
}
