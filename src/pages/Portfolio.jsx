import { useNavigate, Link } from "react-router-dom";
import Section from "../components/Section.jsx";
import projects from "../shared/projects.js";

export default function Portfolio() {
  const navigate = useNavigate();

  return (
    <Section eyebrow="Portfolio" title="All Projects">
      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="min-w-full text-base"> {/* bumped text size */}
          <thead className="bg-white/[0.04] text-left">
            <tr>
              <th className="p-4 w-32">Thumbnail</th> {/* bigger thumbnail cell */}
              <th className="p-4">Project</th>
              <th className="p-4">Tech</th>
              <th className="p-4">Status</th>
              <th className="p-4 w-24">Open</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => {
              const to = p.slug ? `/project/${p.slug}` : p.link || null;

              return (
                <tr
                  key={p.slug ?? p.title}
                  className="border-t border-white/10 hover:bg-white/[0.03] cursor-pointer"
                  onClick={() => {
                    if (!to) return;
                    if (p.slug) navigate(to);
                    else window.open(to, "_blank", "noopener,noreferrer");
                  }}
                >
                  {/* Thumbnail */}
                  <td className="p-4">
                    <div className="w-24 h-16 rounded-lg overflow-hidden bg-white/[0.04] border border-white/10 grid place-items-center">
                      {p.image ? (
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <span className="text-xs text-white/50">No image</span>
                      )}
                    </div>
                  </td>

                  {/* Title */}
                  <td className="p-4 font-semibold text-lg">{p.title}</td>

                  {/* Tech */}
                  <td className="p-4 text-white/70">{p.tech?.join(" · ")}</td>

                  {/* Status */}
                  <td className="p-4 font-medium">{p.status ?? "Live"}</td>

                  {/* Open (explicit link, prevents row click from double firing) */}
                  <td className="p-4" onClick={(e) => e.stopPropagation()}>
                    {p.slug ? (
                      <Link
                        className="text-emerald-400 hover:underline font-medium"
                        to={`/project/${p.slug}`}
                      >
                        Open
                      </Link>
                    ) : p.link ? (
                      <a
                        className="text-emerald-400 hover:underline font-medium"
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open
                      </a>
                    ) : (
                      <span className="text-white/40">—</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
