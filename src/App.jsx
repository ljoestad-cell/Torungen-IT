import { useState } from "react";

export default function App() {
  return (
    <div style={styles.container}>
      <Header />
      <Hero />
      <Services />
      <WebDesign />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.headerInner}>
        <div style={styles.logoWrap}>
          <img src="/logo.png" alt="Torungen IT" style={styles.logo} />
          <span style={styles.logoText}>Torungen IT</span>
        </div>

        <div style={styles.contactInfo}>
          <a href="mailto:ljoestad@gmail.com" style={styles.link}>
            ljoestad@gmail.com
          </a>
          <a href="tel:90591820" style={styles.link}>
            905 91 820
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.heroContent}>
        <h1 style={styles.h1}>
          Få kontroll på IT med Microsoft 365
        </h1>
        <p style={styles.lead}>
          Profesjonell Microsoft 365 konsulent for små og mellomstore bedrifter.
          Vi leverer trygg drift, struktur og sikkerhet med fokus på enkelhet.
        </p>
        <a href="#kontakt" style={styles.ctaPrimary}>
          Ta kontakt
        </a>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section style={styles.section}>
      <h2 style={styles.h2}>Tjenester</h2>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Microsoft 365 rådgivning</h3>
          <p style={styles.cardText}>
            Vi hjelper deg å få mest mulig ut av Microsoft 365 med strukturert
            oppsett, lisensoptimalisering og effektiv arbeidsflyt.
          </p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Sikkerhet og tilgang</h3>
          <p style={styles.cardText}>
            Ekspertise innen Entra ID sikkerhet og tilgangskontroll som beskytter
            dine data og brukere mot trusler.
          </p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Enhetskontroll</h3>
          <p style={styles.cardText}>
            Moderne Intune rådgivning for kontroll av PC, mobil og nettbrett –
            sikkert, effektivt og skalerbart.
          </p>
        </div>
      </div>
    </section>
  );
}

function WebDesign() {
  return (
    <section style={styles.sectionAlt}>
      <div style={styles.webBox}>
        <h2 style={styles.h2}>Ferdig webside kr 15.990</h2>
        <p style={styles.lead}>
          Vi leverer profesjonelle, mobilvennlige nettsider som bygger tillit og
          gir deg flere kunder.
        </p>

        <ul style={styles.list}>
          <li>Mobiloptimalisert design</li>
          <li>Moderne og profesjonelt uttrykk</li>
          <li>Rask levering</li>
          <li>Klar til bruk og enkel å vedlikeholde</li>
        </ul>

        <a href="#kontakt" style={styles.ctaPrimary}>
          Bestill webside
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" style={styles.section}>
      <h2 style={styles.h2}>Kontakt</h2>
      <p style={styles.lead}>
        Ta kontakt for en uforpliktende prat om hvordan vi kan hjelpe din bedrift
        med IT, sikkerhet eller web.
      </p>

      <div style={styles.contactBox}>
        <a href="mailto:ljoestad@gmail.com" style={styles.ctaSecondary}>
          Send e-post
        </a>
        <a href="tel:90591820" style={styles.ctaSecondary}>
          Ring nå
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Torungen IT</p>
    </footer>
  );
}

const styles = {
  container: {
    fontFamily: "system-ui, sans-serif",
    color: "#0f172a",
    lineHeight: 1.6,
  },

  header: {
    position: "sticky",
    top: 0,
    background: "#0f172a",
    zIndex: 1000,
  },

  headerInner: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "12px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },

  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },

  logo: {
    height: 60,
  },

  logoText: {
    color: "white",
    fontWeight: 600,
    fontSize: "clamp(16px, 2vw, 20px)",
  },

  contactInfo: {
    display: "flex",
    gap: 15,
    flexWrap: "wrap",
  },

  link: {
    color: "#e2e8f0",
    textDecoration: "none",
    fontSize: "clamp(12px, 2vw, 14px)",
  },

  hero: {
    background: "#0f172a",
    color: "white",
    padding: "80px 20px",
    textAlign: "center",
  },

  heroContent: {
    maxWidth: 800,
    margin: "0 auto",
  },

  h1: {
    fontSize: "clamp(28px, 5vw, 42px)",
    marginBottom: 20,
  },

  lead: {
    fontSize: "clamp(16px, 2.5vw, 18px)",
    marginBottom: 30,
    color: "#cbd5f5",
  },

  h2: {
    fontSize: "clamp(24px, 4vw, 32px)",
    marginBottom: 30,
    textAlign: "center",
  },

  section: {
    padding: "60px 20px",
    maxWidth: 1100,
    margin: "0 auto",
  },

  sectionAlt: {
    padding: "60px 20px",
    background: "#f8fafc",
  },

  grid: {
    display: "grid",
    gap: 20,
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  },

  card: {
    background: "white",
    padding: 20,
    borderRadius: 12,
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
  },

  cardTitle: {
    marginBottom: 10,
    fontSize: 18,
  },

  cardText: {
    fontSize: 14,
    color: "#475569",
  },

  webBox: {
    maxWidth: 700,
    margin: "0 auto",
    textAlign: "center",
  },

  list: {
    textAlign: "left",
    marginBottom: 30,
  },

  contactBox: {
    display: "flex",
    gap: 20,
    justifyContent: "center",
    flexWrap: "wrap",
  },

  ctaPrimary: {
    background: "#f97316",
    color: "white",
    padding: "14px 24px",
    borderRadius: 8,
    textDecoration: "none",
    fontWeight: 600,
  },

  ctaSecondary: {
    background: "#1d4ed8",
    color: "white",
    padding: "12px 20px",
    borderRadius: 8,
    textDecoration: "none",
  },

  footer: {
    background: "#0f172a",
    color: "#94a3b8",
    textAlign: "center",
    padding: 20,
    marginTop: 40,
  },
};
