import { MotionConfig } from "motion/react";
import { Header } from "./components/Header";
import { Hero } from "./sections/Hero";
import { HomeSections } from "./sections/HomeSections";
import { Contact } from "./sections/Contact";
import "./App.css";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <div className="site-shell">
        <Header />
        <main id="contenido">
          <Hero />
          <HomeSections />
          <Contact />
        </main>
        <footer className="footer">
          <a href="#inicio">ATLAS SOLUTIONS</a>
          <span>Warehouse operations intelligence</span>
          <span>© 2026 · México</span>
        </footer>
      </div>
    </MotionConfig>
  );
}
