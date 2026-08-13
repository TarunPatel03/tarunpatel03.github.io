import { useEffect, useRef, useState } from "react"

const chapters = [
  {
    number: "01",
    title: "Sense",
    copy: "Turning physical flight conditions into trustworthy data through embedded systems and instrumentation.",
    tags: ["Sensors", "C / C++", "Data acquisition"],
  },
  {
    number: "02",
    title: "Decide",
    copy: "Designing software around timing, failure modes and the constraints of real hardware—not ideal conditions.",
    tags: ["Control logic", "Telemetry", "Reliability"],
  },
  {
    number: "03",
    title: "Verify",
    copy: "Testing the complete chain, documenting what matters and making each iteration safer than the last.",
    tags: ["Integration", "Test systems", "Iteration"],
  },
]

export default function RocketSequence() {
  const sectionRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      const available = Math.max(1, section.offsetHeight - window.innerHeight)
      setProgress(Math.min(1, Math.max(0, -rect.top / available)))
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  const active = Math.min(chapters.length - 1, Math.floor(progress * chapters.length))
  const lift = Math.max(0, (progress - 0.67) / 0.33)

  return (
    <section className="rocket-scroll" id="rocket" ref={sectionRef}>
      <div className="rocket-sticky section-shell">
        <div className="rocket-copy">
          <p className="eyebrow"><span>01</span> Current mission</p>
          <h2>Engineering for<br /><em>flight day.</em></h2>
          <p className="section-lede">
            My current focus is the UTS Competition Rocket—where software, electronics and mechanical systems have to work as one.
          </p>

          <div className="chapter-list">
            {chapters.map((chapter, index) => (
              <article className={index === active ? "chapter active" : "chapter"} key={chapter.title}>
                <div className="chapter-number">{chapter.number}</div>
                <div>
                  <h3>{chapter.title}</h3>
                  <p>{chapter.copy}</p>
                  <div className="tag-row">
                    {chapter.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rocket-stage" aria-label="Scroll-driven rocket system illustration">
          <div className="stage-grid" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="data-label label-a">ALT / LIVE</div>
          <div className="data-label label-b">SYS / NOMINAL</div>
          <div className="rocket-wrap" style={{ transform: `translateY(${-lift * 155}px) scale(${1 - lift * 0.09})` }}>
            <svg className="rocket-svg" viewBox="0 0 260 620" role="img" aria-label="Competition rocket technical illustration">
              <defs>
                <linearGradient id="bodyGradient" x1="0" x2="1">
                  <stop offset="0" stopColor="#91989f" />
                  <stop offset="0.48" stopColor="#f0f2ef" />
                  <stop offset="1" stopColor="#737980" />
                </linearGradient>
                <linearGradient id="flameGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop stopColor="#fff8d6" />
                  <stop offset=".35" stopColor="#b8ff47" />
                  <stop offset="1" stopColor="#b8ff47" stopOpacity="0" />
                </linearGradient>
                <filter id="glow"><feGaussianBlur stdDeviation="9" /></filter>
              </defs>
              <g className="rocket-art">
                <path d="M130 24C92 62 72 111 72 170v48h116v-48c0-59-20-108-58-146Z" fill="url(#bodyGradient)" stroke="#f4f7f2" strokeWidth="2" />
                <path d="M130 25v193" stroke="#30353a" strokeOpacity=".55" />
                <path d="M72 218h116v238H72z" fill="url(#bodyGradient)" stroke="#f4f7f2" strokeWidth="2" />
                <path d="M72 267h116M72 392h116" stroke="#282d32" strokeWidth="3" />
                <path d="M72 454 28 526h44v-30h116v30h44l-44-72Z" fill="#696f75" stroke="#eef1ed" strokeWidth="2" />
                <path d="M96 496h68v36H96z" fill="#343a40" />
                <path d="M106 532h48l-9 31h-30z" fill="#aab0b2" />
                <circle cx="130" cy="155" r="28" fill="#111518" stroke="#b8ff47" strokeWidth="3" />
                <circle cx="130" cy="155" r="19" fill="#27343b" />
                <path d="M119 155h22M130 144v22" stroke="#b8ff47" strokeWidth="2" />
                <rect x="87" y="292" width="86" height="6" rx="3" fill="#b8ff47" />
                <text x="130" y="334" textAnchor="middle" fill="#171b1e" fontSize="18" fontWeight="800" letterSpacing="4">UTS</text>
                <text x="130" y="356" textAnchor="middle" fill="#353a3e" fontSize="8" fontWeight="700" letterSpacing="3">COMPETITION ROCKET</text>
                <g style={{ opacity: 0.2 + lift * 0.8 }}>
                  <ellipse cx="130" cy="565" rx="34" ry="11" fill="#b8ff47" filter="url(#glow)" />
                  <path d="M106 556h48l-24 64Z" fill="url(#flameGradient)" />
                </g>
              </g>
            </svg>
          </div>
          <div className="progress-rail"><i style={{ height: `${progress * 100}%` }} /></div>
          <span className="progress-readout">{String(Math.round(progress * 100)).padStart(2, "0")}%</span>
        </div>
      </div>
    </section>
  )
}
