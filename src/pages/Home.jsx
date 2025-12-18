import { Link } from "react-router-dom"
import { ArrowRight, Code2, Shield, Cpu, Brain } from "lucide-react"
import { Button } from "../components/ui/button"

const skills = [
  { icon: Code2, label: "Software Development", description: "Python, Java, JavaScript, React" },
  { icon: Shield, label: "Cybersecurity", description: "Network security, threat mitigation" },
  { icon: Cpu, label: "Embedded Systems", description: "ESP32, IoT development" },
  { icon: Brain, label: "AI Integration", description: "Machine learning, automation" },
]

export default function Home() {
  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <div className="flex-1 flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Main content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-mono text-sm tracking-wider uppercase">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Tarun Patel
              </h1>
              <h2 className="text-xl md:text-2xl text-primary font-medium">Software Engineer</h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              Software Engineering student at UTS with hands-on experience in cybersecurity, embedded systems, and IoT.
              Building secure, high-impact solutions across technical teams.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="group shadow-md shadow-primary/20">
                <Link to="/portfolio">
                  View My Work
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/connect">Get in Touch</Link>
              </Button>
            </div>
          </div>

          {/* Right column - Skills grid */}
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.label}
                className="group p-6 rounded-2xl bg-card border border-border/60 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{skill.label}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="px-6 py-8 border-t border-border/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <span>
              Currently at <span className="text-primary font-medium">BeachWare</span>
            </span>
            <span className="hidden md:inline text-border">|</span>
            <span className="hidden md:inline">DevOps Engineer</span>
          </div>
          <div className="text-sm text-muted-foreground">Based in Sydney, Australia</div>
        </div>
      </div>
    </div>
  )
}
