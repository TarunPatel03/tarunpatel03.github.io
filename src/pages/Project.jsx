import { useParams, Link } from "react-router-dom";
import { useEffect, Fragment } from "react";
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

  const hasDetails =
    p?.details &&
    (p.details.overview ||
      (p.details.workflow?.length ?? 0) > 0 ||
      (p.details.challenges?.length ?? 0) > 0 ||
      (p.details.future?.length ?? 0) > 0);

  const DetailBlock = ({ title, children }) => (
    <div className="mt-8">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="mt-3 text-white/80">{children}</div>
    </div>
  );

  return (
    <>
      <Section eyebrow="Project" title={p.title}>
        {/* Top summary */}
        <div className="flex flex-col gap-2">
          <p className="text-white/70">{p.description}</p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-white/60">
            {p.status && (
              <span className="rounded-md border border-white/15 px-2 py-0.5 bg-white/[0.03]">
                {p.status}
              </span>
            )}
            {p.tech?.length > 0 && (
              <span className="text-white/50">{p.tech.join(" · ")}</span>
            )}
          </div>
        </div>

        {/* Hero image */}
        {p.image && (
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
            <img src={p.image} alt={p.title} className="w-full h-auto" />
          </div>
        )}

        {/* Optional gallery */}
        {p.gallery?.length > 0 && (
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {p.gallery.map((src, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border border-white/10 bg-white/[0.02]"
              >
                <img
                  src={src}
                  alt={`${p.title} ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* Highlights (quick bullets) */}
        {p.highlights?.length > 0 && (
          <DetailBlock title="Highlights">
            <ul className="list-disc pl-6 space-y-2">
              {p.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </DetailBlock>
        )}

        {/* Rich details (new) */}
        {hasDetails && (
          <div className="mt-6">
            {p.details.overview && (
              <DetailBlock title="Overview">
                {Array.isArray(p.details.overview) ? (
                  p.details.overview.map((para, i) => (
                    <p key={i} className="mb-3 last:mb-0">
                      {para}
                    </p>
                  ))
                ) : (
                  <p>{p.details.overview}</p>
                )}
              </DetailBlock>
            )}

            {p.details.workflow?.length > 0 && (
              <DetailBlock title="Workflow">
                <ol className="list-decimal pl-6 space-y-2">
                  {p.details.workflow.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </DetailBlock>
            )}

            {p.details.challenges?.length > 0 && (
              <DetailBlock title="Challenges & Solutions">
                <ul className="list-disc pl-6 space-y-2">
                  {p.details.challenges.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </DetailBlock>
            )}

            {p.details.future?.length > 0 && (
              <DetailBlock title="Future Improvements">
                <ul className="list-disc pl-6 space-y-2">
                  {p.details.future.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </DetailBlock>
            )}
          </div>
        )}

        {/* Links */}
        <div className="mt-8 flex flex-wrap gap-3">
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
