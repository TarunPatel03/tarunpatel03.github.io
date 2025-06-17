---
title: "Arduino Uno Traffic Light Emulator"
excerpt: "AVR C-based traffic light emulator with real-time interrupt handling."
collection: portfolio
layout: portfolio
---

## 📌 Problem / Motivation

This project was built as part of my embedded systems coursework to apply real-time programming concepts for controlling physical systems. I implemented a full traffic light control system entirely in AVR C on the Atmega328P microcontroller, focusing on timing synchronization, interrupt-driven pedestrian crossing, and safe state transitions.

The project reinforced my understanding of timers, external interrupts, USART debugging, and modular embedded firmware design — all critical skills for real-time embedded control applications.

## ⚙️ System Architecture

- **Main Traffic Controller:** Timer/Counter modules control the timing of light states for vehicles and pedestrians.
- **Pedestrian Crossing:** External interrupts trigger pedestrian crossing requests with safe state handling.
- **Audible Feedback:** Buzzer signals when pedestrians may cross.
- **USART Debugging:** Serial output used to monitor system state and timing during development.
- **Real-Time Design:** Fully interrupt-driven architecture ensures reliable timing and responsiveness.

## 🧪 Key Technical Challenges

- Properly synchronizing multiple timers to control independent light cycles.
- Designing safe pedestrian crossing logic to avoid race conditions between external interrupts and main control loop.
- Writing modular ISR (Interrupt Service Routine) handlers for clean, maintainable code.
- Managing state machines to handle system transitions predictably.
- Debugging real-time behavior via USART output during live system operation.

## 🚀 Future Work & Expansion

- Expand system to simulate multi-intersection coordination.
- Implement fail-safe watchdog timer functionality.
- Add configuration options via serial interface or onboard input switches.
- Integrate ultrasonic or infrared sensors for real-time traffic flow management.

## 🔧 Technologies Used

AVR C, Atmega328P, External Interrupts, Timer/Counter Modules, USART Debugging, Buzzer Control, Real-Time Embedded Systems

![Traffic Light Emulator Circuit](/assets/css/js/images/TrafficLight.png)

[🔗 View the GitHub Repository](https://github.com/Reetabass/Traffic-Light-emulator-)
