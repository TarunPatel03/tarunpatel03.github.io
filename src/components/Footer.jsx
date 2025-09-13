export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-white/60 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Tarun Patel</p>
        <p>Deployed on GitHub Pages.</p>
      </div>
    </footer>
  );
}