import { Download, Briefcase, GraduationCap, Code } from "lucide-react"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"

const experience = [
  {
    title: "DevOps Engineer - Internship",
    company: "BeachWare",
    period: "November 2025 - Present",
    description: [
      "Configured cloud deployment and infrastructure automation tasks managing all server data with 100% runtime.",
      "Resolved 20+ networking issues, coordinating with vendors for installation and delivery.",
      "Cooperated with 5 technical team members to analyze CI/CD pipeline products.",
    ],
  },
  {
    title: "Safety Operations",
    company: "ABC Services",
    period: "October 2024 - December 2024",
    description: [
      "Collaborated with Electrical, Signalling & Communication and Software Teams for 24/7 testing coverage.",
      "Diagnosed system issues and streamlined testing workflows, reducing troubleshooting time by 15%.",
      "Reported documentation for technical team alignment in team sizes up to 15 people.",
    ],
  },
  {
    title: "Team Management",
    company: "EWB - UTS",
    period: "February 2024 - November 2024",
    description: [
      "Led a team of 5 students in the Engineers Without Borders (EWB) Challenge.",
      "Initiated problem-solving discussions resulting in innovative solutions with 95% success.",
      "Delegated tasks and monitored progress ensuring completion on schedule in 12 weeks.",
    ],
  },
]

const education = [
  {
    degree: "Bachelor of Engineering (Software & Mechatronics)",
    institution: "University of Technology Sydney (UTS)",
    period: "January 2024 - December 2027",
    details:
      "Coursework includes: Secure Software Development, Computer Networking, Embedded Systems, and AI Applications.",
  },
  {
    degree: "Network/Security+",
    institution: "CompTIA",
    period: "February 2025 - July 2025",
    details: "Industry-recognised experience in network configuration, security principles, and threat mitigation.",
  },
]

const skills = {
  "Languages & Frameworks": ["Python", "Java", "JavaScript", "React", "SQL", "C"],
  "Tools & Platforms": ["Supabase", "Git", "Docker", "AWS"],
  Specializations: ["Cybersecurity", "IoT Development", "Embedded Systems", "Network Security", "AI Integration"],
}

export default function CV() {
  const handleDownloadPDF = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Tarun_Patel_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="relative z-10 min-h-screen pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-4">
            <p className="text-primary font-mono text-sm tracking-wider uppercase">Resume</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Curriculum Vitae</h1>
          </div>
          <Button className="group shadow-md shadow-primary/20" onClick={handleDownloadPDF}>
            <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
            Download PDF
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content - 2 columns */}
          <div className="lg:col-span-2 space-y-12">
            {/* Experience */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Experience</h2>
              </div>

              <div className="space-y-8">
                {experience.map((job) => (
                  <div
                    key={job.title}
                    className="relative pl-8 border-l-2 border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-card border-2 border-primary" />
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                          <p className="text-primary font-medium">{job.company}</p>
                        </div>
                        <Badge variant="outline" className="text-muted-foreground bg-secondary/50">
                          {job.period}
                        </Badge>
                      </div>
                      <ul className="space-y-2">
                        {job.description.map((item, i) => (
                          <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                            <span className="text-primary mt-1.5">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Education</h2>
              </div>

              <div className="space-y-6">
                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="p-6 rounded-2xl bg-card border border-border/60 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                        <p className="text-primary font-medium">{edu.institution}</p>
                      </div>
                      <Badge variant="outline" className="text-muted-foreground bg-secondary/50">
                        {edu.period}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">{edu.details}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar - Skills */}
          <div className="space-y-8">
            <section className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Skills</h2>
              </div>

              <div className="space-y-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className="space-y-3">
                    <h3 className="text-sm font-medium text-primary uppercase tracking-wider">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-secondary hover:bg-secondary/80 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="mt-8 p-6 rounded-2xl bg-card border border-border/60 shadow-sm">
                <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Contact</h3>
                <div className="space-y-3 text-sm">
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Phone:</span> 0494171753
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Email:</span> tppatel003@gmail.com
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Portfolio:</span>{" "}
                    <a href="https://tarunpatel03.github.io/" className="text-primary hover:underline">
                      tarunpatel03.github.io
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
