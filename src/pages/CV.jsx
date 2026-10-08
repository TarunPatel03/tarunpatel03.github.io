import DocumentPage from "../components/DocumentPage"
import { contact, cv } from "../shared/eportfolioData"

const Bullets = ({ items }) => <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>

export default function CV() {
  return (
    <DocumentPage eyebrow="Professional Practice ePortfolio / Curriculum Vitae" title="Curriculum Vitae" summary="Software and mechatronics engineering experience across product development, embedded systems, infrastructure and technical leadership." download={{ href: "/documents/Tarun_Patel_CV.pdf", label: "Download CV PDF" }}>
      <article className="document-paper cv-document">
        <header className="cv-heading">
          <div><h2>{contact.name}</h2><p>Software &amp; Mechatronics Engineering</p></div>
          <address><a href={`tel:${contact.phone.replaceAll(" ", "")}`}>{contact.phone}</a><a href={`mailto:${contact.email}`}>{contact.email}</a><a href={contact.portfolio}>tarunpatel03.github.io</a></address>
        </header>
        <section><h2>Career Objective</h2><p>{cv.objective}</p></section>
        <section><h2>Relevant Projects</h2><div className="cv-projects">{cv.projects.map(([title, description]) => <div key={title}><h3>{title}</h3><p>{description}</p></div>)}</div></section>
        <section id="experience"><h2>Professional Experience</h2><div className="cv-timeline">
          {cv.experience.map((job) => <article key={`${job.title}-${job.company}`}><div className="cv-role"><div><h3>{job.title}</h3><p>{job.company}</p></div><time>{job.period}</time></div><Bullets items={job.bullets} /></article>)}
        </div></section>
        <section><h2>Core Skills</h2><dl className="cv-skills">{cv.skills.map(([area, detail]) => <div key={area}><dt>{area}</dt><dd>{detail}</dd></div>)}</dl></section>
        <section><h2>Education</h2><div className="cv-education">
          {cv.education.map((item) => <article key={item.title}><div className="cv-role"><div><h3>{item.title}</h3>{item.institution && <p>{item.institution}</p>}</div><time>{item.period}</time></div><p>{item.detail}</p></article>)}
        </div></section>
        <section><h2>Referees</h2><p>Provided upon request.</p></section>
      </article>
    </DocumentPage>
  )
}
