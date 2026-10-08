import { Link, useLocation } from "react-router-dom"
import { ArrowUpRight, ChevronDown, Menu } from "lucide-react"

const primaryLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/portfolio" },
  { name: "Experience", href: "/cv#experience" },
]

const portfolioLinks = [
  { name: "CV", href: "/cv" },
  { name: "Cover Letter", href: "/cover-letter" },
  { name: "Reflections", href: "/reflections" },
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

        <div className="nav-links" aria-label="Main links">
          {primaryLinks.map((item) => <Link key={item.name} to={item.href}>{item.name}</Link>)}
          <details className="nav-menu">
            <summary>ePortfolio <ChevronDown size={13} /></summary>
            <div>{portfolioLinks.map((item) => <Link key={item.name} to={item.href}>{item.name}</Link>)}</div>
          </details>
        </div>

        <a className="nav-cta" href={home ? "#contact" : "/#contact"}><span>Let's talk</span> <ArrowUpRight size={14} /></a>

        <details className="mobile-nav">
          <summary aria-label="Open navigation"><Menu size={19} /></summary>
          <div>
            {[...primaryLinks, ...portfolioLinks].map((item) => <Link key={item.name} to={item.href}>{item.name}</Link>)}
            <a href={home ? "#contact" : "/#contact"}>Contact</a>
          </div>
        </details>
      </nav>
    </header>
  )
}

export default Navigation
