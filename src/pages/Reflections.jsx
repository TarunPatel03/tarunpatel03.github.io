import DocumentPage from "../components/DocumentPage"
import { reflections } from "../shared/eportfolioData"

export default function Reflections() {
  return (
    <DocumentPage eyebrow="Professional Practice ePortfolio / 1A Reflection" title="Professional Practice Reflections" summary="My Professional Practice 1A reflection on a DevOps internship at Beachware and the development of my engineering practice." download={{ href: "/documents/Tarun_Patel_Professional_Practice_1A_Reflection.pdf", label: "Download Reflection PDF" }}>
      <article className="document-paper reflection-document">
        <header><p className="document-label">Professional Practice 1A</p><h2>Internship Reflection</h2><p className="reflection-context">DevOps Internship · Beachware</p></header>
        {reflections.map((section) => <section key={section.title}><h3>{section.title}</h3><p>{section.text}</p></section>)}
      </article>
    </DocumentPage>
  )
}
