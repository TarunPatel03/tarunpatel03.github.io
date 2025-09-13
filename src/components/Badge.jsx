export default function Badge({ status }) {
  // Normalize & color
  const s = (status || "").toLowerCase();
  const map = {
    confident: { text: "✅ Confident", cls: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
    working:   { text: "🔄 Working on", cls: "bg-amber-500/20 text-amber-300 border-amber-500/30" },
    learning:  { text: "🔄 Learning", cls: "bg-amber-500/20 text-amber-300 border-amber-500/30" },
    planned:   { text: "📌 To learn", cls: "bg-sky-500/20 text-sky-300 border-sky-500/30" },
    tolearn:   { text: "📌 To learn", cls: "bg-sky-500/20 text-sky-300 border-sky-500/30" },
  };
  const picked =
    map[s] ||
    (s.includes("conf") ? map.confident :
     s.includes("work") ? map.working   :
     s.includes("learn") ? map.learning  :
     map.planned);

  return (
    <span className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold ${picked.cls}`}>
      {picked.text}
    </span>
  );
}
