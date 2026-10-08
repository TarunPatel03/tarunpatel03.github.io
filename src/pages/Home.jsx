import { useEffect, useRef } from "react"
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"
import RocketSequence from "../components/RocketSequence"
import RocketDiagram from "../components/RocketDiagram"

const capabilities = [
  { id: "01", title: "Embedded systems", copy: "Software that respects timing, hardware limits and the physical world.", stack: "C / C++ · ESP32 · I²C / SPI / UART" },
  { id: "02", title: "Product engineering", copy: "From undefined problem to a clear, testable and useful digital product.", stack: "React · JavaScript · Supabase · SQL" },
  { id: "03", title: "Secure infrastructure", copy: "Deployment systems and security practices built into the foundation.", stack: "AWS · Docker · CI/CD · Network security" },
  { id: "04", title: "Technical leadership", copy: "Connecting product intent, engineering decisions and execution velocity.", stack: "Strategy · Systems thinking · Delivery" },
]

const selectedWork = [
  {
    number: "01",
    title: "UTS Competition Rocket",
    type: "Aerospace / Embedded",
    copy: "Multi-disciplinary engineering under real-world constraints—bringing sensing, software and system verification together for flight.",
    tags: ["Embedded", "Telemetry", "Integration"],
    href: "#rocket",
    accent: "rocket-card",
  },
  {
    number: "02",
    title: "Vaylo",
    type: "Company / Product",
    copy: "Co-founded with friends and built the product and technical foundations. Vaylo now operates independently of my day-to-day involvement.",
    tags: ["Co-founder", "Product", "Engineering"],
    href: "#vaylo",
    accent: "vaylo-card",
  },
  {
    number: "03",
    title: "Security Toolkit",
    type: "Cybersecurity",
    copy: "Practical vulnerability scanning and password auditing workflows that turn technical findings into clear reports.",
    tags: ["Python", "Nmap", "Automation"],
    href: "/portfolio",
    accent: "security-card",
  },
]

export default function Home() {
  const heroRef = useRef(null)
  const visualRef = useRef(null)

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return undefined
    const hero = heroRef.current
    const visual = visualRef.current
    if (!hero || !visual) return undefined

    let frame = 0
    let x = 0
    let y = 0
    const move = (event) => {
      const rect = hero.getBoundingClientRect()
      x = ((event.clientX - rect.left) / rect.width - 0.5) * 18
      y = ((event.clientY - rect.top) / rect.height - 0.5) * 14
      if (!frame) frame = requestAnimationFrame(() => {
        visual.style.setProperty("--pointer-x", `${x}px`)
        visual.style.setProperty("--pointer-y", `${y}px`)
        frame = 0
      })
    }
    const leave = () => {
      visual.style.setProperty("--pointer-x", "0px")
      visual.style.setProperty("--pointer-y", "0px")
    }

    hero.addEventListener("pointermove", move, { passive: true })
    hero.addEventListener("pointerleave", leave)
    return () => {
      cancelAnimationFrame(frame)
      hero.removeEventListener("pointermove", move)
      hero.removeEventListener("pointerleave", leave)
    }
  }, [])

  return (
    <main className="home-page">
      <section className="hero section-shell" id="top" ref={heroRef}>
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-status"><i /> Sydney, Australia <span>·</span> Open to engineering roles</div>

        <div className="hero-copy">
          <p className="hero-kicker">Software × Mechatronics</p>
          <h1>I build systems<br />that <em>leave the ground.</em></h1>
          <p className="hero-summary">
            I’m Tarun Patel—an engineer building at the intersection of software and the physical world. From co-founding Vaylo to the UTS Competition Rocket, I turn ideas into working systems. Now open to engineering opportunities.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#rocket">Explore the mission <ArrowDown size={17} /></a>
            <a className="text-link" href="#vaylo">What I built at Vaylo <ArrowRight size={16} /></a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true" ref={visualRef}>
          <div className="hero-orbit hero-orbit-a" />
          <div className="hero-orbit hero-orbit-b" />
          <div className="flight-path"><i /></div>
          <div className="telemetry telemetry-a"><span>SYSTEM ARCHITECTURE</span><b>MODULAR BY DESIGN</b></div>
          <div className="telemetry telemetry-b"><span>MISSION</span><b>UTS ROCKET</b></div>
          <RocketDiagram className="hero-modular-rocket" />
        </div>

        <div className="hero-foot">
          <span>Scroll to launch</span><div /><span>2026 / Portfolio</span>
        </div>
      </section>

      <div className="mission-ribbon" aria-hidden="true">
        <div>
          <span>Embedded systems</span><i />
          <span>Flight software</span><i />
          <span>Product engineering</span><i />
          <span>Technical leadership</span><i />
          <span>Embedded systems</span><i />
          <span>Flight software</span><i />
          <span>Product engineering</span><i />
          <span>Technical leadership</span><i />
        </div>
      </div>

      <RocketSequence />

      <section className="vaylo-section" id="vaylo">
        <div className="section-shell">
          <div className="vaylo-heading">
            <p className="eyebrow"><span>02</span> Co-founded Vaylo</p>
            <h2>Built from scratch.<br /><em>Built to run independently.</em></h2>
          </div>

          <div className="vaylo-grid">
            <div className="vaylo-statement" data-reveal>
              <div className="vaylo-wordmark">vaylo<span>°</span></div>
              <p>
                I co-founded Vaylo with friends and, as CEO, helped turn our idea into a working business—from product direction to its technical foundations. Today, Vaylo operates independently of my day-to-day involvement, giving me the capacity to focus on my next engineering role.
              </p>
              <a href="mailto:tppatel003@gmail.com">Discuss the work <ArrowUpRight size={16} /></a>
            </div>

            <div className="vaylo-pillars">
              <article><span>01</span><div><h3>Product direction</h3><p>Turned the initial idea and customer problems into a focused product roadmap.</p></div></article>
              <article><span>02</span><div><h3>Technical architecture</h3><p>Helped build the application, data and infrastructure foundations that support the product.</p></div></article>
              <article><span>03</span><div><h3>Independent operations</h3><p>Established the foundations for the business to run without my daily oversight.</p></div></article>
            </div>
          </div>
        </div>
      </section>

      <section className="capabilities-section section-shell">
        <div className="section-intro" data-reveal>
          <div>
            <p className="eyebrow"><span>03</span> Operating system</p>
            <h2>One skillset.<br /><em>Multiple altitudes.</em></h2>
          </div>
          <p>I work comfortably from embedded code and infrastructure through to product direction and company-level decisions.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article key={item.id} data-reveal>
              <span>{item.id}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <small>{item.stack}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section section-shell" id="work">
        <div className="section-intro work-heading" data-reveal>
          <div>
            <p className="eyebrow"><span>04</span> Selected work</p>
            <h2>Built to work<br /><em>beyond the screen.</em></h2>
          </div>
          <a className="text-link" href="/portfolio">View project archive <ArrowRight size={16} /></a>
        </div>

        <div className="work-list">
          {selectedWork.map((item) => (
            <a href={item.href} className={`work-card ${item.accent}`} key={item.title} data-reveal>
              <span className="work-number">{item.number}</span>
              <div className="work-type">{item.type}</div>
              <div className="work-main"><h3>{item.title}</h3><p>{item.copy}</p></div>
              <div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="work-arrow"><ArrowUpRight /></div>
            </a>
          ))}
        </div>
      </section>

      <footer className="contact-section" id="contact">
        <div className="section-shell">
          <div data-reveal>
            <p className="eyebrow"><span>05</span> Open channel</p>
            <h2>Let’s build something<br /><em>with consequence.</em></h2>
            <a className="contact-email" href="mailto:tppatel003@gmail.com">tppatel003@gmail.com <ArrowUpRight /></a>
          </div>
          <div className="footer-row">
            <div className="social-links">
              <a href="https://github.com/tarunpatel03" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
              <a href="https://linkedin.com/in/tarunpatel03" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
              <a href="mailto:tppatel003@gmail.com"><Mail size={16} /> Email</a>
            </div>
            <span>© {new Date().getFullYear()} Tarun Patel</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
