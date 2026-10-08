import DocumentPage from "../components/DocumentPage"
import { contact, coverLetter } from "../shared/eportfolioData"

export default function CoverLetter() {
  return (
    <DocumentPage eyebrow="Professional Practice ePortfolio / Cover Letter" title="Cover Letter" summary="Application for the Industrus Engineering Graduate Program, dated 20 September 2026." download={{ href: "/documents/Tarun_Patel_Cover_Letter.pdf", label: "Download Cover Letter PDF" }}>
      <article className="document-paper letter-document">
        <header className="letter-sender"><h2>{contact.name}</h2><a href={`tel:${contact.phone.replaceAll(" ", "")}`}>{contact.phone}</a><a href={`mailto:${contact.email}`}>{contact.email}</a></header>
        <time dateTime="2026-09-20">20 September 2026</time>
        <address>Hiring Manager<br />Industrus Engineering</address>
        <p>Dear Hiring Manager,</p>
        {coverLetter.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <p className="letter-closing">Yours sincerely,<br /><strong>Tarun Patel</strong></p>
      </article>
    </DocumentPage>
  )
}
