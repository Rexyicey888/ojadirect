import { useState } from "react";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

const links = [
  { label: "Marketplace", href: "#marketplace" },
  { label: "Harvest SOS", href: "#harvest-sos" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Transporters", href: "#how-it-works" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Logo />
        <nav className={`nav ${isOpen ? "nav--open" : ""}`} aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="nav__signin" href="#signin" onClick={() => setIsOpen(false)}>
            Sign in
          </a>
          <a className="button button--small" href="#marketplace" onClick={() => setIsOpen(false)}>
            Buyer Dashboard
          </a>
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((current) => !current)}
        >
          <Icon name={isOpen ? "x" : "menu"} />
        </button>
      </div>
    </header>
  );
}
