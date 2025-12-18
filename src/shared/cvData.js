const experiences = [
  {
    role: "Software Engineer Intern",
    company: "KiwiQA Services",
    period: "2025",
    bullets: [
      "Worked in Agile team on QA automation and tooling",
      "Authored automation test scripts and integrated with CI",
      "Participated in PR reviews and sprint rituals",
    ],
  },
  {
    role: "Freelance / Personal Projects",
    company: "Self-directed",
    bullets: [
      "Built full-stack apps with React, Supabase and Node",
      "Designed IoT prototypes (ESP32, Raspberry Pi) and basic PCBs",
      "Implemented Python automation and analytics pipelines",
    ],
  },
];

const education = [
  {
    school: "UTS",
    degree: "B. Engineering (Software/Mechatronics) (Hons)",
    period: "2024–Present",
    note: "GPA 6.0/7.0",
  },
  {
    school: "Certifications",
    degree: "Security+, Network+, CEH",
    period: "2023–2024",
  },
];

const keyProjects = [
  {
    title: "TrackFlow — Inventory & Orders",
    tech: ["React", "Supabase", "Analytics"],
    bullets: ["Auth, RLS, realtime tables, analytics", "RBAC policies & testing"],
  },
  {
    title: "AI Trading Bot",
    tech: ["Python", "TA-Lib"],
    bullets: ["Strategy logic, backtests", "Risk management & live ops"],
  },
  {
    title: "IoT Access Control",
    tech: ["ESP32", "RFID", "Supabase"],
    bullets: ["RFID auth, cloud logs, dashboard", "Security testing (replay/clone)"] ,
  }
];

const skills = [
  { area: "Core", items: ["Python", "C/C++", "React", "Supabase"] },
  { area: "Embedded", items: ["ESP32", "FreeRTOS", "I2C/SPI/UART"] },
  { area: "Data/ML", items: ["Pandas", "NumPy", "scikit-learn"] },
  { area: "DevOps", items: ["Docker", "GitHub Actions"] },
];

export { experiences, education, keyProjects, skills };
