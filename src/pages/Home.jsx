// src/pages/Home.jsx
import { Link } from "react-router-dom";
import Section from "../components/Section.jsx";
import projects from "../shared/projects.js";

function Hero() {
  return (
    <div className="relative overflow-hidden">
      <Section>
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <p className="text-emerald-400 font-bold uppercase text-xs tracking-widest">
              Software / Mechatronics Engineer
            </p>
            <h1 className="text-5xl font-extrabold mt-3 leading-tight">Tarun Patel</h1>
            <p className="text-white/70 mt-4 max-w-md">
              Software & Mechatronics Engineer from UTS with hands-on experience in
              cybersecurity, embedded systems, and IoT. Want more info or to hire me?
              Let’s connect.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#projects" className="bg-emerald-500 text-black px-5 py-2 rounded-lg font-bold">
                Get Started
              </a>
              <a href="/cv" className="border border-white/20 px-5 py-2 rounded-lg">
                Download CV
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-full bg-gradient-to-tr from-indigo-600 to-amber-600 w-72 md:w-80 mx-auto blur-[2px]" />
            <img
              src="https://avatars.githubusercontent.com/u/206483959?v=4"
              alt="profile"
              className="w-56 md:w-72 h-56 md:h-72 object-cover rounded-full ring-4 ring-indigo-600/50 absolute inset-0 m-auto"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}

function Services() {
  const items = [
    { title: "Design", text: "UI/UX, embedded systems, circuits, prototyping, system architecture." },
    { title: "Develop", text: "React, Supabase, Node.js, Python, C/C++, Java, APIs, SQL/NoSQL, cloud." },
    { title: "Write", text: "Docs, proposals, research, blogs, and clear engineering roadmaps." },
    { title: "Promote", text: "SEO basics, growth experiments, portfolio, and technical pitching." },
  ];
  return (
    <Section eyebrow="Design & Experience" title="What I Do">
      <div className="grid md:grid-cols-4 gap-4">
        {items.map((it) => (
          <div key={it.title} className="rounded-2xl border border-white/10 p-5 bg-white/[0.02]">
            <h3 className="font-bold">{it.title}</h3>
            <p className="text-white/70 text-sm mt-2">{it.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function FeaturedProjects() {
  return (
    <Section id="projects" eyebrow="Portfolio" title="Featured Work">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.slice(0, 4).map((p) => (
          <Link
            key={p.slug ?? p.title}
            to={p.slug ? `/project/${p.slug}` : "/portfolio"}
            className="group rounded-2xl border border-white/10 overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] transition"
          >
            <div className="aspect-video bg-[#101820] grid place-items-center text-white/50">
              {p.image ? (
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              ) : (
                <span className="text-sm">No image</span>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-bold">{p.title}</h3>
              <p className="text-white/70 text-sm mt-1">{p.description}</p>
              <p className="text-xs text-white/50 mt-2">{p.tech.join(" · ")}</p>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function Stats() {
  const stats = [
    { k: "5", v: "Clients" },
    { k: "20+", v: "Projects" },
    { k: "6", v: "Awards" },
    { k: "3", v: "Years Experience" },
  ];
  return (
    <Section>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.v} className="rounded-2xl border border-white/10 py-8 bg-white/[0.02]">
            <div className="text-3xl font-extrabold">{s.k}</div>
            <div className="text-white/60 text-sm mt-1">{s.v}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  const items = [
    { period: "2024 – Present", text: "B. Engineering (Software/Mechatronics) (Hons), UTS — GPA 6.0/7.0" },
    { period: "2023 – 2024", text: "CompTIA Security+, Network+ & Certified Ethical Hacker (CEH)" },
  ];
  return (
    <Section eyebrow="Education" title="">
      <div className="space-y-4">
        {items.map((it) => (
          <div key={it.period} className="rounded-xl border border-white/10 p-5 bg-white/[0.02]">
            <div className="text-sm text-white/50">{it.period}</div>
            <div className="font-medium mt-1">{it.text}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function CTA() {
  return (
    <Section>
      <div className="rounded-2xl border border-white/10 p-8 bg-gradient-to-r from-emerald-600/20 to-indigo-600/20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-extrabold">Let’s build something great.</h3>
            <p className="text-white/70">Email me and I’ll reply within a day.</p>
          </div>
          <a href="mailto:tppatel003@gmail.com" className="bg-emerald-500 text-black px-5 py-2 rounded-lg font-bold">
            Contact Me
          </a>
        </div>
      </div>
    </Section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedProjects />
      <Stats />
      <Education />
      <CTA />
    </>
  );
}