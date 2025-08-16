---
title: "TrackFlow – Order & Inventory Management Dashboard"
excerpt: "Built a real-time order and inventory tracking system using React and Supabase with role-based access control."
collection: portfolio
layout: portfolio

---


## Problem / Motivation

Many small-to-medium businesses still rely on outdated spreadsheets for tracking orders and inventory, which often leads to inefficiency, duplicate entries, and limited visibility.  
TrackFlow was created to replace these manual workflows with a centralized, cloud-based dashboard that supports collaborative updates, live data syncing, and secure user role management.

This project allowed me to work on both **frontend and backend integration**, focusing on building a responsive, enterprise-grade interface while ensuring database security and performance.

## System Architecture

- **Frontend:** React.js for a responsive, single-page application UI.
- **Backend:** Supabase for authentication, database hosting, and real-time data sync.
- **Database Schema:** Relational tables for orders, inventory items, shipments, suppliers, locations, and user profiles.
- **Authentication:** Email/password login with role-based routing for admins and standard users.
- **Data Display:** Dynamic tables with search, filtering, and inline editing for quick updates.
- **Routing:** Multi-page navigation for Orders, Inventory, Analytics, and Dashboard.

## Key Technical Challenges

- Designing a scalable relational database schema in Supabase that supports multi-user roles and permissions.
- Implementing **real-time data sync** so that changes made by one user are instantly reflected across all active sessions.
- Creating **protected routes** in React that only allow authorized roles to access certain pages.
- Managing complex state updates when editing orders inline while avoiding stale data issues.
- Maintaining consistent UI/UX styling for a clean, professional look across the entire dashboard.

## Future Work & Expansion

- Add advanced analytics charts for sales trends and inventory turnover.
- Implement CSV export and bulk upload tools for faster data migration.
- Enable push notifications for low stock alerts or urgent order changes.
- Integrate barcode scanning for rapid inventory updates.
- Deploy a mobile-friendly version for warehouse and on-the-go use.

## Technologies Used

React.js, Supabase, JavaScript (ES6+), Node.js, SQL, Vite, React Router, Supabase Auth, Real-time Subscriptions, HTML5, CSS3

[🔗 View GitHub Repository](https://github.com/TarunPatel03/TrackFlow-2-Attempt)
