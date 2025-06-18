---
title: "Arduino Uno Light-Sensing Alarm Clock"
excerpt: "Embedded light-sensitive alarm clock using ADC, sonar, and input capture."
collection: portfolio
layout: portfolio
---

## Problem / Motivation

As part of my embedded systems coursework, I wanted to explore real-time system design that integrates multiple hardware peripherals simultaneously. I designed a fully embedded light-sensing alarm clock using the Arduino Uno platform and low-level AVR C programming (without Arduino libraries). The system activates based on ambient light levels and allows for user interaction using a sonar sensor to silence the alarm via hand wave detection.

This project allowed me to deepen my experience with ADC, timers, input capture, analog comparators, and USART communication — building a fully interrupt-driven embedded application from the ground up.

## System Architecture

- **Light Sensing:** Analog light sensor connected to the ADC continuously monitors ambient light levels.
- **Alarm Activation:** When the light threshold is crossed (e.g. sunrise), the system triggers a buzzer alarm.
- **Sonar Silencing:** Ultrasonic distance sensor measures hand proximity; waving a hand within range disables the alarm.
- **Input Capture:** Timer1 Input Capture used to measure sonar echo pulse duration with microsecond precision.
- **Analog Comparator:** Provides reliable threshold detection for light activation.
- **USART Debugging:** Serial output used for real-time system debugging and data logging during development.

## Key Technical Challenges

- Synchronizing ADC sampling with real-time alarm triggering.
- Using Timer1 Input Capture for precise sonar distance measurement.
- Handling noisy sonar measurements and filtering out false triggers.
- Fully interrupt-driven architecture to ensure accurate, non-blocking sensor readings.
- Writing modular AVR C code without relying on Arduino’s higher-level libraries.
- Calibrating both light and sonar sensors to operate reliably across varying environmental conditions.

## Future Work & Expansion

- Add user-configurable light sensitivity thresholds via onboard buttons or serial commands.
- Integrate an RTC (Real-Time Clock) module to combine scheduled alarm with light sensing.
- Implement a low-power sleep mode for energy efficiency.
- Add an LCD display to show time, light levels, and sonar distance.

## Technologies Used

AVR C, Arduino Uno, Timer1 Input Capture, Analog Comparator, ADC, USART, Ultrasonic Sonar, Embedded Systems, Interrupt-Driven Programming, Sensor Fusion

![Light Sensing Alarm Clock Circuit](/assets/css/js/images/AlarmClock.png)

[🔗 View GitHub Repository](https://github.com/Reetabass/Light-Sensing-Alarm-Clock)
