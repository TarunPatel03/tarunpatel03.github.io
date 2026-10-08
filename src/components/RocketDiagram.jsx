import { useId } from "react"

export default function RocketDiagram({ separation = 1, active = null, className = "" }) {
  const id = useId().replace(/:/g, "")
  const metal = `url(#${id}-metal)`
  const modules = [
    { name: "Nose tip", y: 150, offset: -66, art: <><path d="M220 76C193 111 182 142 182 192h76c0-50-11-81-38-116Z" fill={metal} /><path d="M220 77v113" stroke="#717b7d" /><ellipse cx="220" cy="192" rx="38" ry="7" fill="#465252" /></> },
    { name: "Avionics", y: 248, offset: -22, art: <><rect x="182" y="202" width="76" height="92" rx="5" fill={metal} /><rect x="193" y="214" width="54" height="68" rx="3" fill="#273029" stroke="#8f998f" /><path d="M200 224h14v13h24M239 270h-20v-24h-19" fill="none" stroke="#eb5a32" /><rect x="211" y="232" width="20" height="22" fill="#151816" stroke="#aeb5ae" /><circle cx="239" cy="222" r="3" fill="#eb5a32" /></> },
    { name: "Payload", y: 352, offset: 22, art: <><rect x="182" y="304" width="76" height="102" rx="5" fill={metal} /><rect x="193" y="317" width="54" height="75" rx="3" fill="#202521" stroke="#9ca69c" /><path d="M202 326h36v56h-36zM202 340h36M202 368h36" fill="none" stroke="#8b938b" /><circle cx="220" cy="354" r="9" fill="#eb5a32" /><path d="M175 305h90M175 405h90" stroke="#eb5a32" strokeWidth="2" /></> },
    { name: "Fin can", y: 465, offset: 66, art: <><path d="M182 438 141 510v30l41-21M258 438l41 72v30l-41-21" fill="#778079" stroke="#c8cec7" /><rect x="182" y="416" width="76" height="108" rx="4" fill={metal} /><path d="M216 445h8v96h-8z" fill="#646c65" /><path d="M200 524h40l-5 22h-30Z" fill="#363d38" stroke="#afb7af" /><path d="M190 432h60" stroke="#eb5a32" strokeWidth="4" /></> },
  ]
  return (
    <svg viewBox="0 0 440 640" className={`modular-rocket ${className}`} role="img" aria-label={`${separation ? "Exploded" : "Assembled"} rocket concept: nose tip, avionics, payload and fin can`}>
      <defs><linearGradient id={`${id}-metal`}><stop stopColor="#75898b" /><stop offset=".45" stopColor="#edf2e9" /><stop offset="1" stopColor="#8d9d9d" /></linearGradient></defs>
      <path d="M220 20v600" stroke="#eb5a32" strokeOpacity=".25" strokeDasharray="3 7" />
      {modules.map((module, index) => (
        <g key={module.name} className={`rocket-module ${active === index ? "is-active" : ""}`} style={{ transform: `translateY(${module.offset * separation}px)` }}>
          {module.art}
          <g className="module-callout" opacity={active === null || active === index ? 1 : .45}>
            <path d={`M${index % 2 ? 260 : 180} ${module.y}h${index % 2 ? 28 : -28}`} stroke="#eb5a32" />
            <circle cx={index % 2 ? 260 : 180} cy={module.y} r="3" fill="#eb5a32" />
            <text x={index % 2 ? 296 : 144} y={module.y - 8} textAnchor={index % 2 ? "start" : "end"} fill="#eb5a32" fontSize="9" fontFamily="monospace">0{index + 1}</text>
            <text x={index % 2 ? 296 : 144} y={module.y + 9} textAnchor={index % 2 ? "start" : "end"} fill="#e4ece6" fontSize="11" fontFamily="monospace">{module.name.toUpperCase()}</text>
          </g>
        </g>
      ))}
    </svg>
  )
}
