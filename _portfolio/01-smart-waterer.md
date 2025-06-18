---
title: "ESP-32 Smart Watering System (In Progress)"
excerpt: "IoT irrigation system using ESP32, Raspberry Pi, and ADC sensors."
collection: portfolio
layout: portfolio
---

## Problem / Motivation

After completing my embedded systems course, I wanted to continue developing my skills in real-world microcontroller programming using the ESP32 platform. This project started as a way to automate irrigation for my personal basil plant, allowing me to apply embedded concepts like ADC, interrupts, and WiFi-based telemetry. I personally sourced, integrated, and configured all hardware components. 

More importantly, this system serves as one of the first nodes in a larger IoT network that I’m building — where a Raspberry Pi will act as a central hub for multiple ESP32-based devices, providing unified monitoring, data collection, and remote control across my entire IoT ecosystem. The Raspberry Pi also hosts my Linux-based packet sniffer, tying together my embedded and networking interests into one integrated system.

## System Architecture

- **Sensors:** Soil moisture probes connected to the ESP32’s ADC channels.
- **Control Logic:** Automated relay switching to control a water pump based on real-time moisture levels.
- **Data Logging:** Moisture levels and system state transmitted via WiFi to a Raspberry Pi server.
- **Communication:** MQTT protocol for lightweight telemetry and future control signaling.
- **Power Management:** Leveraging ESP32’s low-power sleep modes for energy-efficient operation.

## Key Technical Challenges

- Calibrating analog sensor readings for accurate moisture thresholds.
- Safely isolating relay circuits to prevent pump damage and electrical faults.
- Building stable MQTT communication that automatically reconnects on network drops.
- Writing non-blocking embedded firmware to allow concurrent sensor sampling, network communication, and relay control.
- Designing hardware that’s modular and scalable for future multi-zone irrigation.

## Future Work & Expansion

- Build additional ESP32 sensor nodes for other plants/zones.
- Expand the Raspberry Pi server into a full IoT gateway for centralized device management.
- Integrate cloud-based dashboards and remote monitoring.
- Implement secure OTA (Over-The-Air) firmware updates for all ESP32 nodes.
- Long-term goal of fully containerizing the Raspberry Pi server to run multiple IoT, logging, and monitoring services concurrently.

## Technologies Used

ESP32, C++, ADC, MQTT, Raspberry Pi, Relay Control, WiFi, Linux Networking, Embedded Systems, IoT Architecture


