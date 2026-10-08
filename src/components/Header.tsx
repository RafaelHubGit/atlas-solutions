import { useState } from "react";
import { ArrowUpRight, Menu, X, Boxes } from "lucide-react";
import { navigation } from "../data/content";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="header">
      <a className="brand" href="#inicio" aria-label="Atlas Solutions, inicio">
        <Boxes className="brand-symbol" size={34} />
        <span>
          ATLAS<small>SOLUTIONS</small>
        </span>
        <span className="brand-caption">
          WAREHOUSE
          <br />
          OPERATIONS
          <br />
          INTELLIGENCE
        </span>
      </a>
      <button
        className="menu-toggle"
        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isMenuOpen}
        aria-controls="navigation"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>
      <nav
        id="navigation"
        className={isMenuOpen ? "navigation is-open" : "navigation"}
        aria-label="Navegación principal"
      >
        {navigation.map(([id, label], index) => (
          <a key={id} href={`#${id}`} onClick={() => setIsMenuOpen(false)}>
            <span>0{index + 1}</span>
            {label}
          </a>
        ))}
        <a
          className="contact-link"
          href="#contacto"
          onClick={() => setIsMenuOpen(false)}
        >
          Contacto <ArrowUpRight size={16} />
        </a>
      </nav>
    </header>
  );
}
