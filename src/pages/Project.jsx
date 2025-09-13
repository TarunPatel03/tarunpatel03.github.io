import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Section from "../components/Section.jsx";
import projects from "../shared/projects.js";

export default function Project() {
  const { slug } = useParams();
  const p = projects.find((x) => x.slug === slug);

  useEffect(() => {
    document.title = p ? `${p.title} – Tarun Patel` : "Project – Tarun Patel";
  }, [p]);

  if (!p) {
    return (
      <Section title="Project not found">
        <Link to="/portfolio" className="text-emerald-400 hover:underline">
          Back to Portfolio
        </Link>
      </Section>
    );
  }

  return (
    <>
      <Section eyebrow="Project" title={p.title}>
        <p className="text-white/70">{p.description}</p>
        {p.tech?.length > 0 && (
          <p className="text-xs text-white/50 mt-2">{p.tech.join(" · ")}</p>
        )}

        {p.image && (
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
            <img src={p.image} alt={p.title} className="w-full h-auto" />
          </div>
        )}

       
        {p.gallery?.length > 0 && (
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {p.gallery.map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-white/10 bg-white/[0.02]">
                <img src={src} alt={`${p.title} ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}

       
        {p.highlights?.length > 0 && (
          <ul className="mt-6 list-disc pl-6 space-y-2 text-white/80">
            {p.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        )}

        
        <div className="mt-6 flex gap-3">
          {p.repo && (
            <a
              href={p.repo}
              className="bg-white text-black px-4 py-2 rounded-lg font-semibold"
              target="_blank"
              rel="noreferrer"
            >
              View Source
            </a>
          )}
          {p.demo && (
            <a
              href={p.demo}
              className="border border-white/20 px-4 py-2 rounded-lg"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          )}
        </div>
      </Section>

      <Section>
        <Link to="/portfolio" className="text-emerald-400 hover:underline">
          ← Back to all projects
        </Link>
      </Section>
    </>
  );
}