import Section from "../components/Section.jsx";
import projects from "../shared/projects.js";

export default function Portfolio() {
  return (
    <Section eyebrow="Portfolio" title="All Projects">
      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="min-w-full text-sm">
          <thead className="bg-white/[0.04] text-left">
            <tr>
              <th className="p-3">Project</th>
              <th className="p-3">Tech</th>
              <th className="p-3">Status</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.title} className="border-t border-white/10">
                <td className="p-3 font-medium">{p.title}</td>
                <td className="p-3 text-white/70">{p.tech.join(" · ")}</td>
                <td className="p-3">{p.status ?? "Live"}</td>
                <td className="p-3">
                  {p.link && <a className="text-emerald-400 hover:underline" href={p.link}>Open</a>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
