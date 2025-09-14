const projects = [
  {
    slug: "vulnerability-scanner",
    title: "Vulnerability Scanner & PDF Report Generator",
    description:
      "End-to-end vulnerability scanning pipeline that combines Nmap, CVE enrichment, and automated PDF reporting. Built to simplify security audits by producing professional, executive-ready reports from raw scan data.",
    tech: [
      "Python",
      "Nmap",
      "ReportLab",
      "SQLite",
      "Shodan API",
      "Pandas",
    ],
    status: "Lab Project",
    image: "/images/vulscanner.png",
    highlights: [
      "Automated Nmap SYN scans with OS, service, and version detection.",
      "Mapped detected services to CPEs → CVEs → CVSS v3.1 risk scores.",
      "Cross-referenced with Shodan API to verify exposed services.",
      "Generated professional PDF report (exec summary, per-host findings, risk scoring, recommendations).",
      "Scan history stored in SQLite/JSON for diffs and trend analysis.",
    ],
    details: {
      overview:
        "This project automates the vulnerability scanning workflow. Instead of manually running Nmap and looking up CVEs, the tool does it in one pipeline and produces an audit-style PDF that can be shared with management or clients.",
      workflow: [
        "Run Nmap SYN scan with version detection against targets.",
        "Parse scan output to extract OS, services, and CPE identifiers.",
        "Use CPEs to query CVE databases for known vulnerabilities.",
        "Score each vulnerability using CVSS v3.1 base scores.",
        "Generate an executive PDF report with summary + detailed tables.",
        "Store scan results in SQLite for future comparisons.",
      ],
      challenges: [
        "Mapping raw Nmap CPE data to CVEs required handling inconsistent naming schemes.",
        "ReportLab formatting for multi-page tables needed custom table rendering.",
        "Maintaining lightweight storage while supporting diffs required SQLite schema design.",
      ],
      future: [
        "Integrate live exploit checks with Exploit-DB or Metasploit APIs.",
        "Add web dashboard for real-time scan visualization.",
        "Support authenticated scans with credentials.",
      ],
    },
    repo: "https://github.com/TarunPatel03/vulnscan-report",
    demo: null,
  },

  {
    slug: "trackflow",
    title: "TrackFlow – Order & Inventory Dashboard",
    description:
      "A Supabase-backed React app replacing manual spreadsheets with real-time inventory & order tracking.",
    tech: ["React.js", "Supabase", "JavaScript", "SQL", "Node.js", "Vite"],
    status: "MVP",
    image: "/images/trackflow.png",
    highlights: [
      "Role-based authentication with Supabase.",
      "Dynamic tables for orders, inventory, analytics.",
      "Real-time subscriptions keep all users in sync.",
      "Relational schema for orders, suppliers, shipments, locations.",
    ],
    details: {
      overview: [
        "TrackFlow centralizes order and inventory operations in a single dashboard so teams can retire error‑prone spreadsheets.",
        "Built with a clean React + Supabase stack focusing on speed, reliability, and auditability.",
      ],
      workflow: [
        "User signs up/signs in via Supabase Auth (email verification enabled).",
        "Row Level Security policies restrict data by user role (viewer/editor/admin).",
        "Dashboard fetches relational data (orders, order_items, suppliers, shipments, locations).",
        "Real-time subscriptions reflect changes instantly across active sessions.",
        "CRUD operations with optimistic UI updates and server reconciliation.",
        "Analytics cards aggregate metrics (revenue, order status mix, late shipments).",
      ],
      challenges: [
        "Designing RLS rules that are both secure and easy to maintain across multiple tables.",
        "Handling relational fetches efficiently to avoid waterfall queries in the UI.",
        "Keeping client state in sync with real-time updates while preserving optimistic interactions.",
      ],
      future: [
        "Role-based routing and granular permissions per page/action.",
        "Inline editing with validation and server-side constraints.",
        "Export to CSV/PDF and scheduled email summaries.",
        "Multi-tenant support and themeable white-label deployments.",
      ],
    },
    repo: "https://github.com/TarunPatel03/TrackFlow-2-Attempt",
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
      "Queries HaveIBeenPwned for breached passwords (k‑anonymity range API).",
      "Entropy scoring + hash crack time estimation.",
      "Portable dashboard running on Raspberry Pi.",
      "Flipper Zero HID simulations for physical attack testing.",
    ],
    details: {
      overview: [
        "Audits plaintext or hashed password lists for risk and compliance checks.",
        "Outputs an executive-ready PDF with remediation guidance and user-level findings.",
      ],
      workflow: [
        "Ingest CSV/TXT; normalize and deduplicate entries.",
        "Hash with SHA‑256 for HIBP range queries to preserve privacy.",
        "Call HIBP range API to retrieve breach counts; mark compromised credentials.",
        "Estimate entropy (length, charset) and cracking difficulty; simulate hash costs with Argon2.",
        "Generate PDF report with per-user table, heatmaps, and overall risk score.",
      ],
      challenges: [
        "Respecting HIBP rate limits while processing large lists.",
        "Balancing practical entropy estimates with real-world cracking assumptions.",
        "ReportLab layout for long tables and visual summaries on constrained pages.",
      ],
      future: [
        "Self-hosted breach cache to reduce external calls.",
        "Web UI for uploads, scheduling, and role-based access.",
        "Wordlist mutation analysis and password policy linting.",
      ],
    },
    repo: "https://github.com/TarunPatel03/password-strength-auditor",
    demo: null,
  },

  {
    slug: "ai-trading-bot",
    title: "Trading Bot Development",
    description:
      "Automated trading system combining Python, ML forecasting, and broker APIs to predict short-term market direction and execute trades.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "TA-Lib", "Broker API"],
    status: "Prototype",
    image: "/images/ai-bot.png",
    highlights: [
      "Fetched live & historical price data via broker APIs.",
      "Trained ML models on technical indicators (RSI, MACD, EMA).",
      "Integrated broker API for auto trade execution with stop-loss & take-profit.",
      "Recorded predictions and performance metrics for evaluation.",
    ],
    details: {
      overview: [
        "Research prototype exploring feature engineering + supervised models for short-horizon forecasts.",
        "Focus on robust evaluation and risk-adjusted performance, not just raw accuracy.",
      ],
      workflow: [
        "Ingest live/historic candles; resample and forward-fill missing data.",
        "Engineer indicators (RSI, MACD, EMAs, ATR) and lag features; avoid leakage.",
        "Train/validate models with walk-forward and time-series splits.",
        "Position sizing, SL/TP, and trailing logic encapsulated in a risk module.",
        "Paper-trading loop executes via broker sandbox, logs trades and metrics.",
      ],
      challenges: [
        "Preventing overfitting and leakage in rolling-window ML.",
        "Model drift and regime changes affecting live performance.",
        "Accounting for slippage, spreads, and latency in backtests vs. execution.",
      ],
      future: [
        "Add probabilistic forecasts and ensemble stacking.",
        "Live paper → small-capital live trading with kill-switch.",
        "Dockerized deployment and monitoring dashboard.",
      ],
    },
    repo: null,
    demo: null,
  },

  {
    slug: "market-data-analytics",
    title: "Market Data Visualization & Analysis",
    description:
      "Research-focused Python notebooks dedicated to XAUUSD (Gold/USD): macro drivers (real yields, USD), central-bank flows, event impacts, volatility regimes, and backtested strategies.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Plotly", "TA-Lib"],
    status: "Research",
    image: "/images/analytics.png",
    highlights: [
      "XAUUSD-centric research tied to real yields (10Y TIPS) and DXY dynamics.",
      "Macro overlays: DXY, US10Y nominal, 10Y TIPS real yield, CPI/NFP dates, VIX/CME Gold CVOL.",
      "Flow variables: World Gold Council (WGC) central-bank net purchases, ETF holdings (e.g., GLD tonnage).",
      "Intraday event studies around CPI/NFP/FOMC with ±60–120 minute windows.",
      "LBMA fix windows (10:30 & 15:00 London) and COMEX microstructure analysis.",
      "Backtests: trend-following (EMA/MACD), mean-reversion (Bollinger), and breakout regimes with vol-scaling.",
      "Volatility filters using CVOL quintiles; evaluation on risk-adjusted metrics (Sharpe/Sortino, MDD, PF).",
    ],
    details: {
      overview: [
        "Executive summary: Gold’s medium-term trend is dominated by real (inflation‑adjusted) interest rates and the U.S. dollar, while cyclical surges are amplified by safe‑haven flows, central‑bank purchases, and options‑market volatility. Over 2022–2025, structurally low/rolling‑over real yields, persistent geopolitical risk, and multi‑year central‑bank buying helped push gold to repeated all‑time highs; consensus outlooks into 2026 lean bullish contingent on Fed easing and a softer USD.",
        "Structural drivers: (1) Real yields (primary) — gold tends to move inversely with the U.S. 10‑year TIPS real yield as the opportunity cost of holding non‑yielding gold changes. (2) USD — because gold is priced in dollars, broad USD strength/weakness creates mechanical and behavioral headwinds/tailwinds that often interact with real yields. (3) Central‑bank demand — official‑sector purchases exceeded 1,000 tonnes in both 2022 and 2023 and stayed elevated through 2024/25, resetting the demand floor and cushioning drawdowns. (4) Risk & volatility channels — safe‑haven flows during financial stress and options‑market dynamics (captured by CME Gold CVOL) shape short‑horizon volatility and regime transitions.",
        "Microstructure & trading day anatomy: London benchmarks (LBMA auctions) at 10:30 and 15:00 London time concentrate institutional hedging/settlement flows; COMEX liquidity and volatility typically accelerate around U.S. data releases (CPI, NFP, FOMC). Options expiry/positioning can induce discrete volatility (gamma effects).",
        "Regime highlights (2008–2025): Post‑GFC QE and falling real rates fueled the 2008–2011 up‑trend; 2013–2018 tapering and hikes plus a firmer USD capped rallies; the 2020 pandemic shock collapsed real rates and drove records; in 2022–2025, despite aggressive hikes, central‑bank buying and intermittent risk‑off supported gold, and as disinflation enabled an easing pivot narrative, real yields rolled over and new ATHs were set.",
        "What moves the needle tactically: First‑order drivers are changes in real yields and DXY; second‑order drivers include central‑bank/ETF flows, volatility regime (CVOL/VIX), and macro‑surprise intensity (CPI/NFP), plus geopolitics. Micro drivers: London fix windows, options expiry, and COMEX term‑structure/roll.",
        "Research limitations & pitfalls: Symbol inconsistencies (XAUUSD, GC=F, XAUSDT), non‑24/5 artifacts (holiday/weekend gaps), look‑ahead/data‑snooping risks in event studies and feature design, and survivorship/selection bias in ETF/flow datasets must be actively mitigated in methods and backtests.",
        "References context (for article narrative): World Gold Council demand trends (CB buying), LongtermTrends gold vs real yields visualizations (Erb & Harvey style), CME Group Gold CVOL (volatility regimes), LBMA fix documentation, and academic/industry work on macro‑announcement impact on gold futures.",
      ],
      workflow: [
        "Data ingestion: Load XAUUSD OHLCV from Yahoo/Alpha Vantage/Binance; add DXY, US10Y nominal, 10Y TIPS real yield (e.g., FRED), VIX and CME Gold CVOL (implied vol), ETF holdings (GLD tonnage), and WGC central‑bank net purchases.",
        "Normalization: Harmonize symbols (XAUUSD, GC=F, XAUSDT), align timezones, forward‑fill/bridge holidays and weekends carefully, and validate session calendars (LBMA fixes, U.S. release windows).",
        "Feature engineering: Compute EMA/SMA ladders, MACD, RSI, ATR, Bollinger Bands; macro deltas/levels (ΔDXY, ΔTIPS); volatility regime flags via CVOL quintiles; event dummies (CPI/NFP/FOMC; ±60/±120m).",
        "Exploratory analysis: Rolling correlations Gold↔Real Yields and Gold↔DXY; distribution diagnostics by volatility regime and macro backdrop; intraday heatmaps centered on 10:30/15:00 London and 8:30/14:00 ET.",
        "Statistical tests: Granger causality between ΔXAUUSD and ΔReal Yields/ΔDXY; OLS with rolling betas and stability checks; assess whether months with elevated CB purchases reduce downside skew and drawdown depth.",
        "Event study: Compute pre/post windows (±60/±120 min) for CPI/NFP; bootstrap significance versus matched non‑event baselines; quantify asymmetry and post‑announcement drift/persistence.",
        "Backtesting: (a) Trend‑following (dual/triple EMA cross, MACD momentum) with volatility‑scaled sizing; (b) Mean‑reversion (Bollinger touches/width contraction) with stop/TP bands; (c) Breakout triggers conditioned on high‑volatility regimes; include fees, slippage, and latency‑realistic execution rules.",
        "Risk & evaluation: Bucket results by CVOL quintiles; compute Sharpe, Sortino, max drawdown, hit‑rate, profit factor; compare across sub‑periods (2008–2012, 2013–2018, 2020, 2022–2025) and stress with Monte Carlo/block bootstrap.",
        "Notebook plan for later (theory first): 01_data.ipynb (loaders); 02_features.ipynb (indicators/regimes); 03_event_study.ipynb; 04_regressions.ipynb; 05_backtests.ipynb; 06_dashboard.py (Streamlit).",
        "Visualization guidelines: Use Plotly for interactive exploration and Matplotlib for publication‑ready figures and PDF export sections.",
      ],
      challenges: [
        "Symbol/name inconsistencies and partial trading calendars can distort rolling indicators and event windows.",
        "Handling non‑trading periods without biasing realized/annualized volatility and avoiding look‑ahead in resampling.",
        "Gold’s dual identity (commodity vs financial safe‑haven) creates regime shifts/decouplings from real yields.",
        "API rate limits and revisions to macro series (e.g., CPI methodology changes, TIPS updates).",
        "Avoiding overfitting in event studies/backtests; ensure walk‑forward validation and true out‑of‑sample periods.",
        "ETF/flow data normalization (tonnes vs USD), survivorship/selection bias, and alignment with price time‑bases.",
      ],
      future: [
        "Streamlit research console with sliders for indicator windows, regime filters, and event windows; export annotated charts to PDF.",
        "Monte Carlo stress‑testing under synthetic volatility shocks and drawdown clustering; block bootstrap of intraday returns.",
        "Integrate news/sentiment (headline frequency and polarity) to augment event dummies and timing.",
        "Academic‑style whitepaper and reproducible Jupyter bundle; CI pipeline to refresh datasets/figures on schedule.",
        "Cross‑asset spillover screener (DXY, rates, silver) with alerts for regime shifts and co‑movement anomalies.",
      ],
    },
    repo: null,
    demo: null,
  },

  {
    slug: "iot-access-control",
    title: "IoT Access Control System",
    description:
      "Smart access control system with RFID authentication, Raspberry Pi gateway, Supabase backend, and Flipper Zero penetration testing.",
    tech: ["ESP32", "Raspberry Pi", "Flipper Zero", "RFID", "Supabase", "React.js", "MQTT"],
    status: "Prototype",
    image: "/images/access-control.png",
    highlights: [
      "RFID + ESP32 + Pi for authentication & logging.",
      "Supabase + React dashboard for cloud access logs.",
      "Flipper Zero used for RFID cloning/replay attack tests.",
      "TLS-encrypted MQTT channels for secure comms.",
    ],
    details: {
      overview: [
        "End-to-end access control prototype spanning firmware, networking, and cloud dashboard.",
        "Security testing built-in via Flipper Zero to validate assumptions.",
      ],
      workflow: [
        "ESP32 reads RFID UID; signs message and publishes via MQTT.",
        "Raspberry Pi gateway verifies signature, forwards to Supabase REST.",
        "Supabase stores events and enforces RLS; dashboard renders in React.",
        "Admin panel supports allow/deny lists and audit exports.",
      ],
      challenges: [
        "Hardening against replay/cloning of low-frequency RFID tags.",
        "Provisioning TLS certs for MQTT on constrained devices.",
        "Reliable offline buffering when network is unavailable.",
      ],
      future: [
        "Door strike relay control and event-driven alerts.",
        "Offline cache with later sync and conflict resolution.",
        "OTA firmware updates and WebAuthn-backed admin login.",
      ],
    },
    repo: null,
    demo: null,
  },
];

export default projects;
