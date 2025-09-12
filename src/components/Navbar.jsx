import { Link, NavLink, useLocation } from "react-router-dom";

const link = "px-3 py-2 rounded-md text-sm font-semibold hover:opacity-90";
const active = "bg-white/10";

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[#0b1215]/70 border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-2xl font-extrabold">M.</Link>
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
                className={`${link} ${pathname === to ? active : ""}`}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <a
          href="mailto:tarun.h.patel@student.uts.edu.au"
          className="bg-[#ff6a00] text-black px-4 py-2 rounded-lg font-bold"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}
