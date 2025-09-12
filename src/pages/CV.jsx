import Section from "../components/Section.jsx";

export default function CV() {
  return (
    <Section eyebrow="Resume" title="Curriculum Vitae">
      <p className="text-white/70 mb-6">Download a PDF or view the highlights below.</p>
      <div className="flex gap-3">
        <a href="/resume.pdf" className="bg-emerald-500 text-black px-4 py-2 rounded-lg font-bold">Download PDF</a>
        <a href="https://www.linkedin.com/in/tarunpatel03" className="border border-white/20 px-4 py-2 rounded-lg">LinkedIn</a>
      </div>
      <div className="mt-8 grid gap-4">
        <div className="rounded-xl border border-white/10 p-5 bg-white/[0.02]">
          <h3 className="font-bold">Software Engineering Internships / Projects</h3>
          <p className="text-white/70 text-sm mt-1">TrackFlow (Supabase + React), Trading Bot Development (Python), IoT Beachware (ESP32)…</p>
        </div>
        <div className="rounded-xl border border-white/10 p-5 bg-white/[0.02]">
          <h3 className="font-bold">Skills</h3>
          <p className="text-white/70 text-sm mt-1">React, Tailwind, Supabase, Node; Python; C/C++; Git; Linux; Networking.</p>
        </div>
      </div>
    </Section>
  );
}
