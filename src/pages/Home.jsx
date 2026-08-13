import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"
import RocketSequence from "../components/RocketSequence"

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
    copy: "Leading the company while translating strategy into product architecture, secure infrastructure and focused execution.",
    tags: ["CEO", "Product", "Engineering"],
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
  return (
    <main className="home-page">
      <section className="hero section-shell" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-status"><i /> Sydney, Australia <span>·</span> Building now</div>

        <div className="hero-copy">
          <p className="hero-kicker">Software × Mechatronics</p>
          <h1>I build systems<br />that <em>leave the ground.</em></h1>
          <p className="hero-summary">
            I’m Tarun Patel—engineer, builder and CEO of Vaylo. Currently focused on the UTS Competition Rocket and products that bridge software with the physical world.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#rocket">Explore the mission <ArrowDown size={17} /></a>
            <a className="text-link" href="#vaylo">Inside Vaylo <ArrowRight size={16} /></a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-orbit hero-orbit-a" />
          <div className="hero-orbit hero-orbit-b" />
          <div className="flight-path"><i /></div>
          <div className="telemetry telemetry-a"><span>FLIGHT SYSTEMS</span><b>ACTIVE</b></div>
          <div className="telemetry telemetry-b"><span>MISSION</span><b>UTS ROCKET</b></div>
          <svg viewBox="0 0 190 430" className="hero-rocket">
            <path d="M95 12C61 48 47 96 47 158v146h96V158c0-62-14-110-48-146Z" fill="#eef0eb" />
            <path d="M95 12v292" stroke="#889096" />
            <path d="M47 300 15 365h32v-25h96v25h32l-32-65Z" fill="#9da3a6" />
            <circle cx="95" cy="137" r="23" fill="#14191c" stroke="#b8ff47" strokeWidth="3" />
            <path d="M59 224h72" stroke="#b8ff47" strokeWidth="6" />
            <path d="M75 340h40l-20 88Z" fill="#b8ff47" opacity=".35" />
          </svg>
        </div>

        <div className="hero-foot">
          <span>Scroll to launch</span><div /><span>2026 / Portfolio</span>
        </div>
      </section>

      <RocketSequence />

      <section className="vaylo-section" id="vaylo">
        <div className="section-shell">
          <div className="vaylo-heading">
            <p className="eyebrow"><span>02</span> Building Vaylo</p>
            <h2>Founder’s vision.<br /><em>Engineer’s discipline.</em></h2>
          </div>

          <div className="vaylo-grid">
            <div className="vaylo-statement">
              <div className="vaylo-wordmark">vaylo<span>°</span></div>
              <p>
                As CEO, my contribution isn’t limited to one lane. I connect the product we want to build with the systems, decisions and technical foundation required to ship it.
              </p>
              <a href="mailto:tppatel003@gmail.com">Discuss the work <ArrowUpRight size={16} /></a>
            </div>

            <div className="vaylo-pillars">
              <article><span>01</span><div><h3>Product direction</h3><p>Converting customer problems and company strategy into a focused product roadmap.</p></div></article>
              <article><span>02</span><div><h3>Technical architecture</h3><p>Making pragmatic decisions across application, data, infrastructure and security.</p></div></article>
              <article><span>03</span><div><h3>Team execution</h3><p>Creating clarity around priorities, ownership and what “done” actually means.</p></div></article>
            </div>
          </div>
        </div>
      </section>

      <section className="capabilities-section section-shell">
        <div className="section-intro">
          <div>
            <p className="eyebrow"><span>03</span> Operating system</p>
            <h2>One skillset.<br /><em>Multiple altitudes.</em></h2>
          </div>
          <p>I work comfortably from embedded code and infrastructure through to product direction and company-level decisions.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article key={item.id}>
              <span>{item.id}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <small>{item.stack}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section section-shell" id="work">
        <div className="section-intro work-heading">
          <div>
            <p className="eyebrow"><span>04</span> Selected work</p>
            <h2>Built to work<br /><em>beyond the screen.</em></h2>
          </div>
          <a className="text-link" href="/portfolio">View project archive <ArrowRight size={16} /></a>
        </div>

        <div className="work-list">
          {selectedWork.map((item) => (
            <a href={item.href} className={`work-card ${item.accent}`} key={item.title}>
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
          <p className="eyebrow"><span>05</span> Open channel</p>
          <h2>Let’s build something<br /><em>with consequence.</em></h2>
          <a className="contact-email" href="mailto:tppatel003@gmail.com">tppatel003@gmail.com <ArrowUpRight /></a>
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
