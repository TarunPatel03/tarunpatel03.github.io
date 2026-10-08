import { Download } from "lucide-react"

export default function DocumentPage({ eyebrow, title, summary, download, children }) {
  return (
    <main className="document-page">
      <header className="document-hero">
        <div className="document-hero-grid" aria-hidden="true" />
        <div className="document-hero-inner">
          <p className="document-kicker">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="document-summary">{summary}</p>
          {download && <a className="document-download" href={download.href} download><Download size={16} /> {download.label}</a>}
        </div>
      </header>
      <div className="document-shell">{children}</div>
    </main>
  )
}
