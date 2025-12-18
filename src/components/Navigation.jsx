import { Link, useLocation } from "react-router-dom"
import { cn } from "../lib/utils"
import { Github, Linkedin, Mail } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "CV", href: "/cv" },
  { name: "Connect", href: "/connect" },
]

export function Navigation() {
  const location = useLocation()
  const pathname = location.pathname

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="max-w-6xl mx-auto flex items-center justify-between bg-card/80 backdrop-blur-md rounded-full px-6 py-3 shadow-sm border border-border/50">
        <Link to="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
          TP
        </Link>

        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative px-3 py-1.5 rounded-full",
                    pathname === item.href
                      ? "text-primary-foreground bg-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary",
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3 pl-6 border-l border-border">
            <a
              href="https://github.com/tarunpatel03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-secondary"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/tarunpatel03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-secondary"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:tppatel003@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-secondary"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-xs font-medium transition-colors px-2.5 py-1.5 rounded-full",
                pathname === item.href
                  ? "text-primary-foreground bg-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary",
              )}
            >
              {item.name.charAt(0)}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navigation
