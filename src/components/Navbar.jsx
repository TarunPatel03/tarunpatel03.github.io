// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const linkBase = "block px-3 py-2 rounded-md text-sm font-semibold";
const active = "bg-white/10 text-white";
const idle = "text-white/80 hover:text-white hover:bg-white/10";

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  // close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-[#0b1215]/80 backdrop-blur border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 relative">
        {/* Brand */}
        <Link to="/" className="text-2xl font-extrabold">TP</Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-2">
          {[
            { to: "/", label: "Home" },
            { to: "/portfolio", label: "Portfolio" },
            { to: "/cv", label: "CV" },
            { to: "/connect", label: "Connect" },
          ].map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? active : idle}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="mailto:tppatel003@gmail.com"
          className="hidden md:inline-flex bg-[#ff6a00] text-black px-4 py-2 rounded-lg font-bold hover:opacity-90 transition"
        >
          Email Me
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/80 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          {/* 3-bar icon that morphs to X */}
          <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-current my-1 transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[#0b1215]/95 backdrop-blur border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <ul className="flex flex-col gap-1">
              {[
                { to: "/", label: "Home" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/cv", label: "CV" },
                { to: "/connect", label: "Connect" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `${linkBase} ${isActive ? active : "text-white"}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <a
              href="mailto:tppatel003@gmail.com"
              className="mt-3 inline-flex w-full justify-center bg-[#ff6a00] text-black px-4 py-2 rounded-lg font-bold hover:opacity-90 transition"
            >
              Email Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
