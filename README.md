<h1 align="center">🛍️ ShopGenie</h1>

<p align="center">
  <strong>AI-Powered Smart E-Commerce Platform with Voice Navigation</strong>
</p>

<p align="center">
  A full-stack MERN e-commerce platform that combines AI-powered voice interaction,
  real-time order management, secure authentication, and cloud-based media storage
  to deliver a modern and intelligent online shopping experience.
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Poppins&weight=600&size=24&duration=3500&pause=1000&center=true&vCenter=true&width=700&lines=AI-Powered+E-Commerce+Platform;Voice-Controlled+Shopping+Experience;Built+with+the+MERN+Stack;Real-Time+Admin+Dashboard;Modern+Responsive+UI%2FUX" alt="Typing SVG" />
</p>

<p align="center">

<a href="https://shopgenie-frontend.onrender.com/">
<img src="https://img.shields.io/badge/Live-Demo-success?style=for-the-badge" />
</a>

<a href="https://youtu.be/3SB1atOVclk?si=FDxcwwvqOO1DFaPb">
<img src="https://img.shields.io/badge/Demo-Video-red?style=for-the-badge&logo=youtube" />
</a>

<img src="https://img.shields.io/badge/MERN-Full%20Stack-blue?style=for-the-badge" />
<img src="https://img.shields.io/badge/AI-Voice%20Navigation-purple?style=for-the-badge" />
<img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />

</p>

---

# About

**ShopGenie** is a modern AI-powered e-commerce platform built using the **MERN Stack**. It enhances the traditional online shopping experience by integrating **voice-based navigation**, **real-time order management**, **secure authentication**, and **cloud-based image storage**.

The application consists of separate customer and admin portals connected through RESTful APIs, enabling efficient product management, order tracking, and inventory updates. AI-powered voice commands allow users to browse the application hands-free, improving accessibility and user experience.

---

# Features

<p>

<img src="https://img.shields.io/badge/AI%20Voice%20Commands-Web%20Speech%20API-blue" />
<img src="https://img.shields.io/badge/Firebase-Authentication-orange" />
<img src="https://img.shields.io/badge/Cloudinary-Image%20Storage-blue" />
<img src="https://img.shields.io/badge/Responsive-Mobile%20Friendly-success" />
<img src="https://img.shields.io/badge/Admin-Dashboard-red" />
<img src="https://img.shields.io/badge/Redux-State%20Management-purple" />
<img src="https://img.shields.io/badge/REST-API-black" />
<img src="https://img.shields.io/badge/MongoDB-Atlas-success" />

</p>

### Customer Portal

- Secure user authentication with Firebase
- Browse products by categories and collections
- Product filtering and sorting
- Product details page
- Shopping cart functionality
- Checkout and order placement
- Order history and tracking
- Responsive interface across all devices

### Admin Dashboard

- Add, edit, and delete products
- Upload product images using Cloudinary
- Manage customer orders
- Update order status in real time
- Inventory management

### AI Voice Assistant

- Voice-controlled website navigation
- Open collections, search, cart, and more using voice commands
- Real-time speech recognition
- Hands-free interaction using the Web Speech API

---

# Tech Stack

<p align="center">

<img src="https://skillicons.dev/icons?i=react,redux,nodejs,express,mongodb,firebase,tailwind,javascript,git,github,vscode&perline=6"/>

</p>

| Category | Technologies |
|----------|--------------|
| **Frontend** | React.js, Redux Toolkit, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas |
| **Authentication** | Firebase Authentication |
| **Cloud Storage** | Cloudinary |
| **AI Integration** | Web Speech API |
| **Deployment** | Render |
| **Version Control** | Git & GitHub |

---

# Project Architecture

```text
                 Customer
                     │
                     ▼
          React + Redux Toolkit
                     │
             REST API Requests
                     │
                     ▼
           Express.js + Node.js
                     │
          ┌──────────┴──────────┐
          ▼                     ▼
    MongoDB Atlas         Cloudinary
                     │
                     ▼
         Firebase Authentication

           AI Voice Assistant
          (Web Speech API)
```

---

# Live Demo

| Resource | Link |
|----------|------|
| **Live Website** | https://shopgenie-frontend.onrender.com/ |
| **Demo Video** | https://youtu.be/3SB1atOVclk?si=FDxcwwvqOO1DFaPb |

> **Note:** Enable third-party cookies during your first visit to use AI Voice Commands.

---

# Installation

## Clone the Repository

```bash
git clone https://github.com/Prince-Singh-Dev/ShopGenie.git

cd ShopGenie
```

## Install Dependencies

```bash
npm install
```

## Configure Environment Variables

Create a `.env` file inside the project root.

```env
MONGO_URI=your_mongodb_connection_string

FIREBASE_API_KEY=your_firebase_api_key

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_cloudinary_key

CLOUDINARY_API_SECRET=your_cloudinary_secret
```

## Run Development Server

```bash
npm run dev
```

Open

```
http://localhost:5134
```

---

# Technical Highlights

- AI-powered voice navigation using the Web Speech API
- Secure authentication with Firebase
- Cloudinary integration for optimized image management
- RESTful API architecture
- Modular MERN Stack implementation
- Real-time synchronization between customer and admin dashboards
- Responsive UI for desktop, tablet, and mobile
- Optimized component-based architecture

---

# Future Enhancements

- AI-powered product recommendations
- Multi-language voice commands
- Integrated payment gateway
- Wishlist functionality
- Product comparison
- Progressive Web App (PWA)
- Email notifications
- Advanced analytics dashboard

---

# Screenshots

| Home Page | Collections |
|-----------|-------------|
| <img src="https://github.com/user-attachments/assets/98a13c0f-84ce-4ab9-9281-6a0ee232b75c" width="100%"> | <img src="https://github.com/user-attachments/assets/9b4d4a73-039a-4bef-8759-725a451ecb94" width="100%"> |

| Product Details | Shopping Cart |
|-----------|-------------|
| <img src="https://github.com/user-attachments/assets/28db9dbd-ec09-48d7-b36f-ad6d4675929c" width="100%"> | <img src="https://github.com/user-attachments/assets/feadad51-62cd-4886-89da-fc6357385d2a" width="100%"> |

| Checkout | Orders |
|-----------|-------------|
| <img src="https://github.com/user-attachments/assets/faa7dd3d-20bc-4ae7-96ea-2370ec473011" width="100%"> | <img src="https://github.com/user-attachments/assets/c9e25250-5186-4eff-afcb-2c09cfe42b25" width="100%"> |

| Admin Dashboard | Product Management |
|-----------|-------------|
| <img src="https://github.com/user-attachments/assets/5b05690a-91fa-491e-b9a7-02b4bb4aeaea" width="100%"> | <img src="https://github.com/user-attachments/assets/b44f6104-d943-4ba1-bca9-fef7671c507d" width="100%"> |

| AI Voice Navigation | Mobile Responsive |
|-----------|-------------|
| <img src="https://github.com/user-attachments/assets/e541c83a-a308-4d8b-9c0c-8cc68587a7ef" width="100%"> | <img src="https://github.com/user-attachments/assets/978e14c2-0087-4500-bccf-5150b33dad06" width="100%"> |

---

# Project Statistics

- Full-Stack MERN Application
- AI Voice Navigation
- Firebase Authentication
- Cloudinary Integration
- MongoDB Atlas Database
- RESTful APIs
- Responsive UI/UX
- Real-Time Admin Dashboard
- Mobile-Friendly Design

---

# License

This project is licensed under the **MIT License**.

---

<p align="center">
Made with ❤️ using React, Node.js, Express.js, MongoDB, Firebase, Cloudinary and Tailwind CSS.
</p>
