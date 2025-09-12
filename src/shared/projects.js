const projects = [
  {
    title: "Trading Bot Development",
    description: "Automated strategies for FX/XAU with Backtrader, risk controls, performance logging.",
    tech: ["Python", "Backtrader", "Pandas"],
    link: "/projects/trading-bot",
    status: "Research",
  },
  {
    title: "TrackFlow – Order/Inventory Dashboard",
    description: "Supabase-backed SaaS: auth, role-based views, inline editing, analytics.",
    tech: ["React", "Supabase", "Vite"],
    link: "/projects/trackflow",
    status: "MVP",
  },
  {
    title: "IoT Beachware (ESP32 + Pi)",
    description: "Wearable telemetry (HR, SpO2, GPS) → LoRa → Pi server → cloud DB & dashboard.",
    tech: ["ESP32", "LoRa", "Python", "Raspberry Pi"],
  },
  {
    title: "Security Tools",
    description: "Password auditor, basic vuln scanner, network utils for learning defensive ops.",
    tech: ["Python", "Bash"],
  },
];
export default projects;
