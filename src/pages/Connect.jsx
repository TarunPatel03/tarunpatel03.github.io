import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "tppatel003@gmail.com",
    href: "mailto:tppatel003@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0494 171 753",
    href: "tel:0494171753",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sydney, Australia",
    href: null,
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "@tarunpatel03",
    href: "https://github.com/tarunpatel03",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Tarun Patel",
    href: "https://linkedin.com/in/tarunpatel03",
  },
  {
    icon: ExternalLink,
    label: "Portfolio",
    value: "tarunpatel03.github.io",
    href: "https://tarunpatel03.github.io/",
  },
]

export default function Connect() {
  return (
    <div className="relative z-10 min-h-screen pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 space-y-4">
          <p className="text-primary font-mono text-sm tracking-wider uppercase">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Let's Connect</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            If you would like to discuss a project, opportunity, or just say hi, I'm always down to chat.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Cards */}
          <div className="order-1">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="group">
                      {info.href ? (
                        <a
                          href={info.href}
                          className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/60 hover:border-primary/30 hover:shadow-md transition-all"
                        >
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors flex-shrink-0">
                            <info.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="text-xs text-primary font-mono uppercase tracking-wider mb-1">
                              {info.label}
                            </div>
                            <div className="text-foreground font-medium">{info.value}</div>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/60">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="text-xs text-primary font-mono uppercase tracking-wider mb-1">
                              {info.label}
                            </div>
                            <div className="text-foreground font-medium">{info.value}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-6">Social Links</h2>
                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 p-4 rounded-xl bg-card border border-border/60 hover:border-primary/30 hover:shadow-md transition-all"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors flex-shrink-0">
                        <link.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-primary font-mono uppercase tracking-wider mb-1">
                          {link.label}
                        </div>
                        <div className="text-foreground font-medium">{link.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info / Map Placeholder */}
          <div className="order-2">
            <div className="p-8 rounded-2xl bg-card border border-border/60 shadow-sm h-full flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Availability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm currently available for freelance work, internships, and full-time positions.
                    Feel free to reach out via email or connect with me on LinkedIn.
                  </p>
                </div>
                <div className="pt-6 border-t border-border">
                  <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Response Time</h3>
                  <p className="text-muted-foreground text-sm">
                    I typically respond to emails within 24 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
