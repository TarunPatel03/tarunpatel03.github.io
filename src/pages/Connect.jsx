import Section from "../components/Section.jsx";

export default function Connect() {
  return (
    <Section eyebrow="Connect" title="Links & Contact">
      <div className="grid md:grid-cols-2 gap-4">
        <a className="rounded-xl border border-white/10 p-5 bg-white/[0.02]" href="https://github.com/TarunPatel03">
          <h3 className="font-bold">GitHub</h3>
          <p className="text-white/70 text-sm">github.com/TarunPatel03</p>
        </a>
        <a className="rounded-xl border border-white/10 p-5 bg-white/[0.02]" href="https://www.linkedin.com/in/tarunpatel03/">
          <h3 className="font-bold">LinkedIn</h3>
          <p className="text-white/70 text-sm">linkedin.com/in/tarunpatel03</p>
        </a>
        <a className="rounded-xl border border-white/10 p-5 bg-white/[0.02]" href="/resume.pdf">
          <h3 className="font-bold">Resume (PDF)</h3>
          <p className="text-white/70 text-sm">Latest version</p>
        </a>
        <a className="rounded-xl border border-white/10 p-5 bg-white/[0.02]" href="mailto:tppatel003@gmail.com">
          <h3 className="font-bold">Email</h3>
          <p className="text-white/70 text-sm">tppatel003@gmail.com</p>
        </a>
      </div>
    </Section>
  );
}
