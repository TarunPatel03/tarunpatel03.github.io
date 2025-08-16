---
title: "IoT Access Control System with Raspberry Pi & Flipper Zero"
excerpt: "Built a smart access control system integrating RFID authentication, Raspberry Pi management, and Flipper Zero testing."
collection: portfolio
layout: portfolio
vanta: true

---

## Problem / Motivation

Secure access control is critical in both residential and enterprise environments, but many low-cost systems lack remote monitoring, modular expansion, or proper security testing.  
This project aimed to design and prototype an **IoT-based access control system** that supports RFID authentication, cloud-based access logs, and built-in security auditing using the **Flipper Zero** to test system resilience against common attacks.

## System Architecture

- **RFID Reader:** Reads authentication tags/cards to grant or deny access.
- **ESP32 Controller:** Handles RFID input, relay activation, and communication with the Raspberry Pi.
- **Raspberry Pi Gateway:** Acts as the local server, logging access attempts, managing authorized credentials, and pushing data to a cloud database.
- **Flipper Zero Testing:** Used to simulate RFID cloning and signal replay attacks for penetration testing and firmware hardening.
- **Database & Dashboard:** Supabase backend with a React-based web dashboard for viewing logs and managing users.
- **Communication:** MQTT protocol for lightweight, real-time device-to-server messaging.
- **Relay Control:** Activates a door lock mechanism upon successful authentication.

## Key Technical Challenges

- Designing a modular architecture so additional access points can be added without reconfiguring the main system.
- Securing the MQTT channel with TLS to prevent interception.
- Using Flipper Zero to test system vulnerabilities, identify weak encryption, and improve firmware resilience.
- Ensuring the system could recover gracefully from power outages without data loss.
- Creating a responsive, real-time dashboard with role-based access for admins and standard users.

## Future Work & Expansion

- Integrate biometric authentication (fingerprint or facial recognition).
- Add push notifications for failed access attempts.
- Implement geofencing-based auto-unlock for trusted devices.
- Create a mobile app for credential management and remote lock control.
- Deploy as a containerized application for easier scaling.

## Technologies Used

ESP32, Raspberry Pi, Flipper Zero, RFID (MFRC522), C++, Python, MQTT, Supabase, React.js, Node.js, WebSockets, TLS Encryption, IoT Architecture
