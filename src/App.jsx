import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Services from './components/Services'
import WebDesign from './components/WebDesign'
import Process from './components/Process'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

export default function App() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <WebDesign />
      <Process />
      <Pricing />
      <CTA />
    </main>
  )
}
