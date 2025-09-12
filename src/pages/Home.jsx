import Section from "../components/Section.jsx";

function Hero() {
  return (
    <div className="relative overflow-hidden">
      <Section>
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <p className="text-emerald-400 font-bold uppercase text-xs tracking-widest">
              Product Designer / Full-Stack
            </p>
            <h1 className="text-5xl font-extrabold mt-3 leading-tight">
              Tarun Patel
            </h1>
            <p className="text-white/70 mt-4 max-w-md">
              Full-stack developer in Sydney. I build fast, delightful apps and solve real problems with code. Got a project? Let’s talk.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#projects" className="bg-emerald-500 text-black px-5 py-2 rounded-lg font-bold">Get Started</a>
              <a href="/cv" className="border border-white/20 px-5 py-2 rounded-lg">Download CV</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full bg-gradient-to-tr from-indigo-600 to-amber-400 w-72 md:w-96 mx-auto blur-[2px]" />
            <img
              src="https://avatars.githubusercontent.com/u/000000?v=4"
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
    { title: "Design", text: "Product design & UI systems" },
    { title: "Develop", text: "React, Supabase, Node" },
    { title: "Write", text: "Docs, proposals, tech blogs" },
    { title: "Promote", text: "Growth experiments & SEO basics" },
  ];
  return (
    <Section eyebrow="Better design, better experiences" title="What I Do">
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

import projects from "../shared/projects.js";

function FeaturedProjects() {
  return (
    <Section id="projects" eyebrow="Portfolio" title="Featured Work">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.slice(0,4).map((p) => (
          <a key={p.title} href={p.link ?? "#"} className="group rounded-2xl border border-white/10 overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] transition">
            <div className="aspect-video bg-[#101820] grid place-items-center text-white/50">
              {p.image ? <img src={p.image} className="w-full h-full object-cover" /> : <span className="text-sm">No image</span>}
            </div>
            <div className="p-5">
              <h3 className="font-bold">{p.title}</h3>
              <p className="text-white/70 text-sm mt-1">{p.description}</p>
              <p className="text-xs text-white/50 mt-2">{p.tech.join(" · ")}</p>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}

function Stats() {
  const stats = [
    { k: "43", v: "Clients" },
    { k: "68+", v: "Projects" },
    { k: "17", v: "Awards" },
    { k: "3", v: "Years Experience" },
  ];
  return (
    <Section>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map(s => (
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
    { period: "2024 – Present", text: "B. Engineering (Software) (Hons), UTS — GPA 6.0/7.0" },
    { period: "2022 – 2023", text: "Selected courses & self-study in systems, trading, security" },
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
            <p className="text-white/70">Email me your idea. I’ll reply with a plan and timeline.</p>
          </div>
          <a href="mailto:tarun.h.patel@student.uts.edu.au" className="bg-emerald-500 text-black px-5 py-2 rounded-lg font-bold">
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
