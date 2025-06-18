---
title: "CAN Bus Communication System (In progress)"
excerpt: "Building custom CAN Bus communication modules for embedded devices."
collection: portfolio
layout: portfolio
---

## Problem / Motivation

To further develop my embedded systems knowledge beyond sensor control and basic I/O, I wanted to dive into real-world microcontroller networking protocols. CAN Bus (Controller Area Network) is heavily used in automotive, industrial, and robotics applications, making it an excellent protocol to study for real-time, fault-tolerant communication. My goal was to design a multi-node CAN Bus system from scratch, building both the hardware interface and the embedded protocol stack entirely myself to gain a deeper understanding of low-level bit timing, arbitration, and error handling.

This project integrates directly with my broader IoT system where multiple embedded devices will communicate with a central Raspberry Pi server, forming a modular, scalable network for distributed control and monitoring.

## System Architecture

- **Physical Layer:** MCP2515 CAN controllers with external transceivers interfacing with AVR microcontrollers.
- **Protocol Stack:** Custom implementation of message frames, arbitration logic, and error signaling in Embedded C.
- **Multi-Node Communication:** Multiple microcontroller nodes exchanging real-time sensor data and control signals across the CAN bus.
- **Fault Handling:** Error detection and recovery mechanisms for handling bus errors, collisions, and arbitration loss.
- **Integration:** Raspberry Pi planned as a central CAN gateway and logger to collect and analyze CAN traffic.

## Key Technical Challenges

- Configuring CAN bus timing and baud rate parameters for reliable communication across multiple nodes.
- Writing interrupt-driven embedded firmware to handle asynchronous CAN message reception and transmission.
- Managing arbitration loss, retransmissions, and bus error recovery.
- Debugging low-level bit timing issues using logic analyzers and oscilloscopes.
- Structuring firmware architecture to cleanly separate hardware abstraction from protocol logic.

## Future Work & Expansion

- Build additional sensor and actuator nodes for expanded testing.
- Integrate CAN logging and visualization tools into Raspberry Pi central server.
- Implement dynamic node addressing and priority-based arbitration.
- Test scalability with increasing node count and higher data loads.
- Long-term integration into broader multi-protocol IoT system architecture.

## Technologies Used

CAN Bus, MCP2515, AVR Microcontrollers, Embedded C, Bit Timing, Bus Arbitration, Fault Handling, Linux Networking, Raspberry Pi Integration

