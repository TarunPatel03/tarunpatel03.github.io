---
title: "AVR SPI Master-Slave Communication (Bare-Metal C)"
excerpt: "Register-level SPI communication between two Atmega328P microcontrollers."
collection: portfolio
layout: portfolio
---

## Problem / Motivation

As part of my university embedded systems coursework, I developed a fully functional SPI communication protocol between two Atmega328P microcontrollers using bare-metal AVR C programming. The goal of the project was to implement real-time full-duplex data exchange at the register level without using Arduino libraries or any external abstraction layers.

This project allowed me to gain hands-on experience with synchronous serial protocols, hardware interrupt design, register configuration, and master-slave synchronization — all of which are critical for real-world embedded communication systems used in industrial, automotive, and IoT devices.

## System Architecture

- **Microcontrollers:** Two Atmega328P boards communicating via SPI in full-duplex mode.
- **Master Controller:** Generates clock signals, initiates transactions, and sends command/data packets.
- **Slave Controller:** Fully interrupt-driven SPI slave that responds to incoming master transmissions.
- **Register-Level Configuration:** Direct manipulation of SPI control/status/data registers (`SPCR`, `SPSR`, `SPDR`) for hardware-level SPI control.
- **Full-Duplex Operation:** Simultaneous read/write data transfer synchronized to SPI clock.
- **Interrupt Service Routines (ISRs):** Efficient non-blocking communication using hardware interrupts for both master and slave data exchange.

## Key Technical Challenges

- Configuring SPI control registers to correctly handle clock polarity (CPOL), clock phase (CPHA), and clock speed synchronization.
- Managing data exchange timing for full-duplex operation at hardware clock speed.
- Designing robust ISR handlers that safely handle incoming data while avoiding buffer overruns or race conditions.
- Debugging low-level SPI timing issues using logic analyzers, serial output, and oscilloscope traces.
- Writing clean modular embedded firmware that separates hardware abstraction from protocol logic.

## Future Work & Expansion

- Extend protocol to handle multi-byte messages with buffering and acknowledgment.
- Implement error detection using CRC or parity checking.
- Expand to multi-slave configurations with dynamic slave addressing.
- Integrate SPI-based peripheral devices (e.g. sensors, displays) for practical embedded system applications.
- Combine with higher-layer protocol design for more complex device-to-device communication frameworks.

## Technologies Used

AVR C (bare-metal), Atmega328P, SPI Protocol, Register-Level Programming, Interrupt-Driven Firmware, Real-Time Embedded Systems, Logic Analyzer Debugging

[🔗 View the GitHub Repository](https://github.com/Reetabass/SPI-dual-board)
