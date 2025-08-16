---
title: "Password Strength Auditor with Raspberry Pi & Flipper Zero"
excerpt: "Developed a password auditing tool that checks credential strength against breach databases and performs offline cracking simulations."
collection: portfolio
layout: portfolio
---

## Problem / Motivation

Weak or reused passwords are a major security risk, and many organizations lack tools to proactively evaluate credential security.  
This project aimed to build a **Password Strength Auditor** capable of checking password lists against known breach databases, calculating entropy scores, and simulating offline cracking attempts.  
The tool was deployed on a **Raspberry Pi** for portability and used a **Flipper Zero** to test physical access vectors such as HID keyboard injection for credential harvesting.

## System Architecture

- **Data Input:** Accepts password lists from CSV, TXT, or manual input.
- **Breach Database Check:** Queries HaveIBeenPwned (HIBP) API to identify previously leaked credentials.
- **Entropy Calculation:** Uses Shannon entropy to score password complexity.
- **Offline Cracking Simulation:** Integrates with a lightweight hash-cracking engine to estimate crack times for MD5, SHA1, and Argon2 hashes.
- **Raspberry Pi Hosting:** Runs as a local web dashboard accessible via LAN.
- **Flipper Zero Testing:** Simulates HID attacks and credential capture scenarios to validate security awareness.
- **Reporting:** Generates PDF reports summarizing risks, crack time estimates, and remediation suggestions.

## Key Technical Challenges

- Managing HIBP API requests efficiently to handle large password lists without rate-limit issues.
- Implementing accurate entropy calculations for diverse character sets.
- Ensuring secure storage of test password lists on the Raspberry Pi.
- Using the Flipper Zero to replicate real-world credential theft scenarios.
- Designing a clear, actionable reporting format for non-technical stakeholders.

## Future Work & Expansion

- Add GPU-accelerated cracking simulations using Hashcat.
- Integrate with LDAP or Active Directory to audit live enterprise credentials.
- Create a browser extension for real-time password strength feedback.
- Deploy as a Docker container for cross-platform portability.

## Technologies Used

Python, Raspberry Pi, Flipper Zero, HaveIBeenPwned API, Argon2, SHA256, MD5, Shannon Entropy, ReportLab, Flask, HTML5, CSS3
