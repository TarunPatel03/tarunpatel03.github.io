import { useEffect, useRef, useState } from "react"
import RocketDiagram from "./RocketDiagram"

const modules = [
  { title: "Nose tip", copy: "The leading section: aerodynamic form, a clean outer profile and a defined interface to the airframe.", tags: ["Aerodynamics", "Airframe interface"] },
  { title: "Avionics", copy: "The electronics bay: sensing, flight data and telemetry brought together in a serviceable module.", tags: ["Embedded systems", "Instrumentation"] },
  { title: "Payload", copy: "The mission bay: space for the payload, with clear mechanical and electrical interfaces for integration.", tags: ["Mission hardware", "Integration"] },
  { title: "Fin can", copy: "The aft assembly: fins and motor interfaces that bring stability and structural support together.", tags: ["Stability", "Mechanical assembly"] },
]

export default function RocketSequence() {
  const sectionRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [selected, setSelected] = useState(null)
  const [exploded, setExploded] = useState(true)
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 760px), (max-height: 740px)")
    let frame = 0
    const update = () => {
      frame = 0
      const section = sectionRef.current
      if (!section || media.matches) return
      const rect = section.getBoundingClientRect()
      setProgress(Math.min(1, Math.max(0, -rect.top / Math.max(1, section.offsetHeight - window.innerHeight))))
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update) }
    schedule()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    media.addEventListener("change", schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
      media.removeEventListener("change", schedule)
    }
  }, [])
  const active = selected ?? Math.min(3, Math.floor(progress * 4))
  return (
    <section className="rocket-scroll" id="rocket" ref={sectionRef}>
      <div className="rocket-sticky section-shell">
        <div className="rocket-copy">
          <p className="eyebrow"><span>01</span> Current mission / UTS Competition Rocket</p>
          <h2>One rocket.<br /><em>Every interface matters.</em></h2>
          <p className="section-lede">My current focus brings software, electronics and mechanical systems together for flight. Explore the rocket, module by module.</p>
          <div className="module-selector" aria-label="Rocket modules">
            {modules.map((module, index) => <button key={module.title} type="button" className={active === index ? "active" : ""} aria-pressed={active === index} onClick={() => setSelected(index)}><span>0{index + 1}</span>{module.title}<span aria-hidden="true">↗</span></button>)}
          </div>
          <div className="module-detail" aria-live="polite"><h3>{modules[active].title}</h3><p>{modules[active].copy}</p><div className="tag-row">{modules[active].tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
          <button className="sequence-follow" type="button" onClick={() => setSelected(null)} disabled={selected === null}>{selected === null ? "Scroll to explore · or select a module" : "Resume scroll exploration"}</button>
        </div>
        <div className="rocket-stage">
          <div className="stage-grid" aria-hidden="true" />
          <div className="stage-heading"><span>SYSTEM BREAKDOWN</span><span>04 MODULES</span></div>
          <RocketDiagram separation={exploded ? 1 : 0} active={active} />
          <div className="stage-footer"><span>CONCEPT ILLUSTRATION</span><button type="button" aria-pressed={exploded} onClick={() => setExploded(value => !value)}>{exploded ? "Assemble rocket" : "Explode modules"}<span aria-hidden="true"> ↗</span></button></div>
          <div className="stage-progress" aria-hidden="true"><i style={{ width: `${(active + 1) * 25}%` }} /></div>
        </div>
      </div>
    </section>
  )
}
