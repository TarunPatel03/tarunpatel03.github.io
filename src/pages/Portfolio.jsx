import { useState } from "react"
import { ExternalLink, Github, Brain, Database, Shield, Activity, TrendingUp, Lock, X } from "lucide-react"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog"
import projectsData from "../shared/projects"

// Map icons for projects
const iconMap = {
  "vulnerability-scanner": Shield,
  "trackflow": Database,
  "password-auditor": Lock,
  "ai-trading-bot": Brain,
  "market-data-analytics": TrendingUp,
  "iot-access-control": Activity,
}

const projects = projectsData.map(project => ({
  ...project,
  icon: iconMap[project.slug] || Brain,
  featured: ["vulnerability-scanner", "trackflow", "password-auditor", "ai-trading-bot"].includes(project.slug),
}))

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="relative z-10 min-h-screen pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 space-y-4">
          <p className="text-primary font-mono text-sm tracking-wider uppercase">My Work</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Selected Projects</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A collection of projects spanning cybersecurity tools, full-stack applications, AI/ML systems, IoT
            prototypes, and financial data research.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              onClick={() => setSelectedProject(project)}
              className="group relative p-8 rounded-2xl bg-card border border-border/60 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <project.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-xs text-primary font-mono mb-2 uppercase tracking-wider">{project.status}</p>
                      <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h2>
                    </div>
                    {project.featured && (
                      <Badge className="bg-primary/10 text-primary border-0 hover:bg-primary/15">Featured</Badge>
                    )}
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-secondary text-secondary-foreground">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-2">
                    {project.repo && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground hover:text-primary hover:bg-primary/10"
                        asChild
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a href={project.repo} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground hover:text-primary hover:bg-primary/10"
                        asChild
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Decorative number */}
              <span className="absolute top-6 right-8 text-8xl font-bold text-border/40 select-none pointer-events-none">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-start gap-4 pr-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <selectedProject.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-primary font-mono mb-2 uppercase tracking-wider">
                      {selectedProject.status}
                    </p>
                    <DialogTitle className="text-2xl font-bold text-foreground mb-2">
                      {selectedProject.title}
                    </DialogTitle>
                    <p className="text-muted-foreground">{selectedProject.description}</p>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Tech Stack */}
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                      Key Highlights
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Details Sections */}
                {selectedProject.details && (
                  <>
                    {/* Overview */}
                    {selectedProject.details.overview && (
                      <div>
                        <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                          Overview
                        </h3>
                        <div className="text-muted-foreground leading-relaxed space-y-2">
                          {Array.isArray(selectedProject.details.overview)
                            ? selectedProject.details.overview.map((para, idx) => <p key={idx}>{para}</p>)
                            : <p>{selectedProject.details.overview}</p>}
                        </div>
                      </div>
                    )}

                    {/* Workflow */}
                    {selectedProject.details.workflow && selectedProject.details.workflow.length > 0 && (
                      <div>
                        <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                          Workflow
                        </h3>
                        <ul className="space-y-2">
                          {selectedProject.details.workflow.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-semibold mt-0.5">
                                {idx + 1}
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Challenges */}
                    {selectedProject.details.challenges && selectedProject.details.challenges.length > 0 && (
                      <div>
                        <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                          Challenges
                        </h3>
                        <ul className="space-y-2">
                          {selectedProject.details.challenges.map((challenge, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                              <span className="text-primary mt-1.5">→</span>
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Future Plans */}
                    {selectedProject.details.future && selectedProject.details.future.length > 0 && (
                      <div>
                        <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                          Future Enhancements
                        </h3>
                        <ul className="space-y-2">
                          {selectedProject.details.future.map((plan, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                              <span className="text-primary mt-1.5">✦</span>
                              <span>{plan}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  {selectedProject.repo && (
                    <Button asChild className="flex-1">
                      <a href={selectedProject.repo} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Repository
                      </a>
                    </Button>
                  )}
                  {selectedProject.demo && (
                    <Button asChild variant="outline" className="flex-1">
                      <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
