export default function Section({ title, eyebrow, children, id }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-4 py-16">
      {(eyebrow || title) && (
        <header className="mb-8">
          {eyebrow && <p className="text-emerald-400 font-bold uppercase text-xs tracking-widest">{eyebrow}</p>}
          {title && <h2 className="text-3xl md:text-4xl font-extrabold mt-2">{title}</h2>}
        </header>
      )}
      {children}
    </section>
  );
}
