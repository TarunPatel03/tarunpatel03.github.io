---
title: "Linux Packet Sniffer using Libpcap (In progress)"
excerpt: "C-based raw packet sniffer parsing Ethernet frames and IP packets."
collection: portfolio
layout: portfolio
---

## Problem / Motivation

As part of my systems and networking learning path, I wanted to gain hands-on experience working closer to the kernel and better understand how packets flow through Linux network stacks. To achieve this, I am building a Linux-based packet sniffer entirely from scratch in C, using raw sockets and libpcap. The goal is to parse raw Ethernet frames, extract protocol headers, and display packet metadata in real time. I hope this project will deepen my understanding of network protocols, binary data parsing, and Linux system-level programming.

The packet sniffer is also a core component of my larger Raspberry Pi IoT server, where I use it for real-time diagnostics, traffic monitoring, and debugging communications between my embedded devices.

## System Architecture

- **Packet Capture:** Uses libpcap to capture packets directly from network interfaces.
- **Frame Parsing:** Custom parsing of Ethernet, IPv4, TCP, and UDP headers for metadata extraction.
- **Protocol Filtering:** Real-time filtering and display of specific protocols of interest.
- **CLI Interface:** Lightweight command-line interface for selecting interfaces, setting filters, and starting captures.
- **Data Logging:** Optional packet metadata logging to files for further offline analysis.

## Key Technical Challenges

- Handling raw byte streams and converting them into structured protocol headers.
- Dealing with byte-order differences (endianness) across different header fields.
- Efficiently parsing layered protocols (Ethernet → IP → TCP/UDP) while handling variable-length headers.
- Implementing clean memory management and proper resource deallocation to avoid leaks.
- Designing the code for modularity and future protocol expansion (ICMP, ARP, etc.).

## Future Work & Expansion

- Add support for additional protocols such as ARP, ICMP, and DNS.
- Build real-time traffic visualizations and analytics dashboards.
- Implement multi-threaded capture and processing for higher traffic volumes.
- Package the sniffer as a deployable service on my Raspberry Pi central IoT server.
- Experiment with integrating BPF (Berkeley Packet Filter) for high-performance filtering.

## Technologies Used

C, Linux Sockets, Libpcap, Ethernet, IPv4, TCP, UDP, Networking Protocols, Binary Parsing, Packet Analysis, Embedded Linux

[🔗 View GitHub Repository](https://github.com/Reetabass/packet-sniffer)
