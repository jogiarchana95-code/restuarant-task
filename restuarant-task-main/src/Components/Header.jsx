import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["Menu", "#menu"],
    ["Shop", "#best-sellers"],
    ["Blog", "#news"],
    ["Pages", "#about"],
    ["Contact", "#footer"]
  ];

  return (
    <header className="header">
      <a className="brand" href="#home">
        <span className="brand-mark">✦</span>
        <span>
          Taste<span>Nest</span>
          <small>DELICIOUS FOOD</small>
        </span>
      </a>

      <button
        className="mobile-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        {open ? <X /> : <Menu />}
      </button>

      <nav className={open ? "nav nav-open" : "nav"}>
        {links.map(([name, href]) => (
          <a
            key={name}
            href={href}
            onClick={() => setOpen(false)}
          >
            {name}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button className="bag" aria-label="Shopping bag">
          <ShoppingBag size={17} />
          <i>2</i>
        </button>

        <a className="btn btn-yellow" href="#reservations">
          Find a table <span>↗</span>
        </a>
      </div>
    </header>
  );
}