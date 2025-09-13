const projects = [
  {
    slug: "vulnerability-scanner",
    title: "Vulnerability Scanner & PDF Report Generator",
    description:
      "Automated Nmap-based scanner with CVE enrichment, CVSS risk scoring, and executive PDF report export.",
    tech: [
      "Python",
      "Nmap",
      "ReportLab",
      "SQLite",
      "Shodan API",
      "Pandas",
    ],
    status: "Lab Project",
    image: "./images/vulscanner.png",
    highlights: [
      "Nmap SYN scans with service/version detection.",
      "Mapped CPEs to CVEs & CVSS v3.1 scores.",
      "Generated PDF report with exec summary + per-host findings.",
      "SQLite/JSON storage for scan history + diffs.",
    ],
    repo: "https://github.com/TarunPatel03/vulnscan-report",
    demo: null,
  },

  {
    slug: "trackflow",
    title: "TrackFlow – Order & Inventory Dashboard",
    description:
      "A Supabase-backed React app replacing manual spreadsheets with real-time inventory & order tracking.",
    tech: [
      "React.js",
      "Supabase",
      "JavaScript",
      "SQL",
      "Node.js",
      "Vite",
    ],
    status: "MVP",
    image: "./images/trackflow.png",
    highlights: [
      "Role-based authentication with Supabase.",
      "Dynamic tables for orders, inventory, analytics.",
      "Real-time subscriptions keep all users in sync.",
      "Relational schema for orders, suppliers, shipments, locations.",
    ],
    repo: "https://github.com/TarunPatel03/TrackFlow-2-Attempt",
    demo: null,
  },
  {
    slug: "ai-trading-bot",
    title: "Trading Bot Development",
    description:
      "Automated trading system combining Python, ML forecasting, and broker APIs to predict short-term market direction and execute trades.",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TA-Lib",
      "Broker API",
    ],
    status: "Prototype",
    image: "/images/ai-bot.png",
    highlights: [
      "Fetched live & historical price data via broker APIs.",
      "Trained ML models on technical indicators (RSI, MACD, EMA).",
      "Integrated broker API for auto trade execution with stop-loss & take-profit.",
      "Recorded predictions and performance metrics for evaluation.",
    ],
    repo: null,
    demo: null,
  },
  {
    slug: "market-data-analytics",
    title: "Market Data Visualization       & Analysis",
    description:
      "Python notebooks for visualizing and analyzing financial market trends, technical indicators, and backtesting trading strategies.",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Plotly",
      "TA-Lib",
    ],
    status: "Research",
    image: "/images/analytics.png",
    highlights: [
      "Pulled market data from Yahoo Finance, Binance, Alpha Vantage APIs.",
      "Implemented EMA, SMA, MACD, RSI, Bollinger Bands.",
      "Built interactive charts with Plotly & Matplotlib.",
      "Backtested strategy logic against historical datasets.",
    ],
    repo: null,
    demo: null,
  },
  {
    slug: "iot-access-control",
    title: "IoT Access Control System",
    description:
      "Smart access control system with RFID authentication, Raspberry Pi gateway, Supabase backend, and Flipper Zero penetration testing.",
    tech: [
      "ESP32",
      "Raspberry Pi",
      "Flipper Zero",
      "RFID",
      "Supabase",
      "React.js",
      "MQTT",
    ],
    status: "Prototype",
    image: "/images/access-control.png",
    highlights: [
      "RFID + ESP32 + Pi for authentication & logging.",
      "Supabase + React dashboard for cloud access logs.",
      "Flipper Zero used for RFID cloning/replay attack tests.",
      "TLS-encrypted MQTT channels for secure comms.",
    ],
    repo: null,
    demo: null,
  },
  {
    slug: "password-auditor",
    title: "Password Strength Auditor",
    description:
      "Tool that audits password lists against breach DBs, calculates entropy, simulates crack times, and generates PDF reports.",
    tech: [
      "Python",
      "Raspberry Pi",
      "Flipper Zero",
      "HIBP API",
      "Argon2",
      "SHA256",
      "ReportLab",
    ],
    status: "Lab Project",
    image: "/images/password-auditor.png",
    highlights: [
      "Queries HaveIBeenPwned for breached passwords.",
      "Entropy scoring + hash crack time estimation.",
      "Portable dashboard running on Raspberry Pi.",
      "Flipper Zero HID simulations for physical attack testing.",
    ],
    repo: null,
    demo: null,
  },

];

export default projects;
