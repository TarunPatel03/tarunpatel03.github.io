import { Link, useLocation } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"

const navItems = [
  { name: "Rocket", href: "#rocket" },
  { name: "Vaylo", href: "#vaylo" },
  { name: "Work", href: "#work" },
]

export function Navigation() {
  const location = useLocation()
  const home = location.pathname === "/"

  return (
    <header className="site-header">
      <nav className="nav-island" aria-label="Primary navigation">
        <Link to="/" className="brand-mark" aria-label="Tarun Patel, home">
          <span>TP</span>
          <i />
        </Link>

        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={home ? item.href : `/${item.href}`}
            >
              {item.name}
            </a>
          ))}
        </div>

        <a className="nav-cta" href={home ? "#contact" : "/#contact"}>
          Let's talk <ArrowUpRight size={14} />
        </a>
      </nav>
    </header>
  )
}

export default Navigation
