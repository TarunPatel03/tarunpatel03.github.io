import Section from "../components/Section.jsx";
import Badge from "../components/Badge.jsx";
import FadeIn from "../components/FadeIn.jsx";

export default function CV() {
  return (
    <Section eyebrow="Resume" title="Curriculum Vitae">
      {/* Top actions */}
      <FadeIn>
        <div className="flex flex-wrap gap-3 mb-6">
          <a
            href="/resume.pdf"
            className="bg-emerald-500 hover:bg-emerald-400 text-black px-5 py-2 rounded-lg font-bold transition"
          >
            Download PDF
          </a>
          <a
            href="https://www.linkedin.com/in/tarunpatel03"
            className="bg-[#0A66C2] hover:bg-[#004182] text-white px-5 py-2 rounded-lg font-bold transition"
          >
            LinkedIn
          </a>
        </div>
      </FadeIn>

      {/* EXPERIENCE */}
      <FadeIn>
        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-10 bg-white/[0.02]">
          <table className="min-w-full text-sm">
            <thead className="bg-white/[0.04]">
              <tr>
                <th className="p-4 text-left w-64">Experience</th>
                <th className="p-4 text-left">Focus / Skills & Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-white/10 align-top">
                <td className="p-4">
                  <div className="font-semibold">Software Engineer Intern — KiwiQA Services (2025)</div>
                  <div className="text-white/60 text-xs">Agile team, QA automation, tooling</div>
                </td>
                <td className="p-4">
                  <ul className="list-disc pl-5 space-y-1 text-white/80">
                    <li>Automation test scripts, CI integration <Badge status="confident" /></li>
                    <li>Jira workflows, sprint rituals, PR reviews <Badge status="confident" /></li>
                    <li>Expanding test coverage & reporting <Badge status="working" /></li>
                  </ul>
                </td>
              </tr>
              <tr className="border-t border-white/10 align-top">
                <td className="p-4">
                  <div className="font-semibold">Freelance / Personal Projects</div>
                  <div className="text-white/60 text-xs">React + Supabase apps, IoT prototypes, trading tools</div>
                </td>
                <td className="p-4">
                  <ul className="list-disc pl-5 space-y-1 text-white/80">
                    <li>Full-stack (React, Supabase, Node) <Badge status="confident" /></li>
                    <li>IoT (ESP32, Pi), basic PCB & sensors <Badge status="confident" /></li>
                    <li>Python automation & analytics <Badge status="confident" /></li>
                    <li>Hardening, auth, RBAC, docs <Badge status="working" /></li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </FadeIn>

      {/* EDUCATION */}
      <FadeIn delay={80}>
        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-10 bg-white/[0.02]">
          <table className="min-w-full text-sm">
            <thead className="bg-white/[0.04]">
              <tr>
                <th className="p-4 text-left w-64">Education</th>
                <th className="p-4 text-left">Focus / Skills & Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-white/10 align-top">
                <td className="p-4">
                  <div className="font-semibold">UTS — B. Engineering (Software/Mechatronics) (Hons)</div>
                  <div className="text-white/60 text-xs">2024–2027 (GPA 6.0/7.0)</div>
                </td>
                <td className="p-4">
                  <ul className="list-disc pl-5 space-y-1 text-white/80">
                    <li>OS, embedded systems, databases, systems arch <Badge status="confident" /></li>
                    <li>Control systems, Simulink/Matlab <Badge status="learning" /></li>
                  </ul>
                </td>
              </tr>
              <tr className="border-t border-white/10 align-top">
                <td className="p-4">
                  <div className="font-semibold">Certifications</div>
                  <div className="text-white/60 text-xs">Security+, Network+, CEH</div>
                </td>
                <td className="p-4">
                  <ul className="list-disc pl-5 space-y-1 text-white/80">
                    <li>Security fundamentals & network basics <Badge status="confident" /></li>
                    <li>Deeper offensive/defensive labs <Badge status="working" /></li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </FadeIn>

      {/* KEY PROJECTS */}
      <FadeIn delay={120}>
        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-10 bg-white/[0.02]">
          <table className="min-w-full text-sm">
            <thead className="bg-white/[0.04]">
              <tr>
                <th className="p-4 text-left w-64">Key Projects</th>
                <th className="p-4 text-left">Focus / Skills & Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-white/10 align-top">
                <td className="p-4">
                  <div className="font-semibold">TrackFlow — Inventory & Orders</div>
                  <div className="text-white/60 text-xs">React + Supabase</div>
                </td>
                <td className="p-4">
                  <ul className="list-disc pl-5 space-y-1 text-white/80">
                    <li>Auth, RLS, real-time tables, analytics <Badge status="confident" /></li>
                    <li>RBAC policies & testing <Badge status="working" /></li>
                  </ul>
                </td>
              </tr>
              <tr className="border-t border-white/10 align-top">
                <td className="p-4">
                  <div className="font-semibold">AI Trading Bot</div>
                  <div className="text-white/60 text-xs">Python, TA-Lib, broker APIs</div>
                </td>
                <td className="p-4">
                  <ul className="list-disc pl-5 space-y-1 text-white/80">
                    <li>Strategy logic, data pipelines, backtests <Badge status="confident" /></li>
                    <li>Robust risk mgmt & live ops <Badge status="working" /></li>
                  </ul>
                </td>
              </tr>
              <tr className="border-t border-white/10 align-top">
                <td className="p-4">
                  <div className="font-semibold">IoT Access Control</div>
                  <div className="text-white/60 text-xs">ESP32, RFID, Pi, Supabase</div>
                </td>
                <td className="p-4">
                  <ul className="list-disc pl-5 space-y-1 text-white/80">
                    <li>RFID auth, cloud logs, dashboard <Badge status="confident" /></li>
                    <li>Security testing (replay/clone) <Badge status="working" /></li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </FadeIn>

      {/* SKILLS MATRIX */}
      <FadeIn delay={160}>
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
          <table className="min-w-full text-sm">
            <thead className="bg-white/[0.04]">
              <tr>
                <th className="p-4 text-left w-64">Skill Area</th>
                <th className="p-4 text-left">Qualities / Tools & Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Project & Workflow */}
              <tr className="border-t border-white/10 align-top">
                <td className="p-4 font-semibold">Project & Workflow</td>
                <td className="p-4">
                  <ul className="list-disc pl-5 space-y-1 text-white/80">
                    <li>Confluence, Notion, Google/M365 <Badge status="confident" /></li>
                    <li>Jira (boards, sprints, epics) <Badge status="confident" /></li>
                    <li>Scrum ceremonies & backlog grooming <Badge status="confident" /></li>
                  </ul>
                </td>
              </tr>
              {/* Stakeholders */}
              <tr className="border-t border-white/10 align-top">
                <td className="p-4 font-semibold">Stakeholders & Teams</td>
                <td className="p-4">
                  <ul className="list-disc pl-5 space-y-1 text-white/80">
                    <li>Translate requirements → tech specs <Badge status="confident" /></li>
                    <li>Presentations & demos <Badge status="confident" /></li>
                    <li>Risk/trade-off communication <Badge status="working" /></li>
                  </ul>
                </td>
              </tr>
              {/* Core Engineering */}
              <tr className="border-t border-white/10 align-top">
                <td className="p-4 font-semibold">Core Engineering</td>
                <td className="p-4">
                  <ul className="list-disc pl-5 space-y-1 text-white/80">
                    <li>Python, C/C++ <Badge status="confident" /></li>
                    <li>Embedded (ESP32/Arduino), I2C/SPI/UART <Badge status="confident" /></li>
                    <li>RTOS (FreeRTOS) <Badge status="learning" /></li>
                    <li>Control systems, MATLAB/Simulink <Badge status="learning" /></li>
                    <li>PCB/CAD basics (KiCad, Fusion) <Badge status="working" /></li>
                  </ul>
                </td>
              </tr>
              {/* Software Practices */}
              <tr className="border-t border-white/10 align-top">
                <td className="p-4 font-semibold">Software Practices</td>
                <td className="p-4">
                  <ul className="list-disc pl-5 space-y-1 text-white/80">
                    <li>Git & PR flow <Badge status="confident" /></li>
                    <li>Unit/integration testing <Badge status="working" /></li>
                    <li>CI/CD (GitHub Actions) <Badge status="confident" /></li>
                  </ul>
                </td>
              </tr>
              {/* Data & ML */}
              <tr className="border-t border-white/10 align-top">
                <td className="p-4 font-semibold">Data & ML</td>
                <td className="p-4">
                  <ul className="list-disc pl-5 space-y-1 text-white/80">
                    <li>Pandas/NumPy/Matplotlib <Badge status="confident" /></li>
                    <li>scikit-learn basics <Badge status="learning" /></li>
                    <li>TensorFlow/PyTorch <Badge status="tolearn" /></li>
                  </ul>
                </td>
              </tr>
              {/* DevOps & Cloud */}
              <tr className="border-t border-white/10 align-top">
                <td className="p-4 font-semibold">DevOps & Cloud</td>
                <td className="p-4">
                  <ul className="list-disc pl-5 space-y-1 text-white/80">
                    <li>Docker (fundamentals) <Badge status="learning" /></li>
                    <li>AWS/GCP/Azure (IoT/data) <Badge status="tolearn" /></li>
                  </ul>
                </td>
              </tr>
              {/* Professional */}
              <tr className="border-t border-white/10 align-top">
                <td className="p-4 font-semibold">Professional</td>
                <td className="p-4">
                  <ul className="list-disc pl-5 space-y-1 text-white/80">
                    <li>Technical writing & docs <Badge status="confident" /></li>
                    <li>Compliance & safety standards <Badge status="tolearn" /></li>
                    <li>Budgeting/ROI/BOMs <Badge status="working" /></li>
                  </ul>
                </td>
              </tr>
              {/* Soft Skills */}
              <tr className="border-t border-white/10 align-top">
                <td className="p-4 font-semibold">Soft Skills</td>
                <td className="p-4">
                  <ul className="list-disc pl-5 space-y-1 text-white/80">
                    <li>Time management, prioritization <Badge status="confident" /></li>
                    <li>Public speaking, demos <Badge status="confident" /></li>
                    <li>Negotiation & scope mgmt <Badge status="working" /></li>
                    <li>Mentoring & networking <Badge status="tolearn" /></li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </FadeIn>
    </Section>
  );
}
    