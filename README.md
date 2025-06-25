# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



A responsive and user-friendly platform to help individuals find compatible roommates based on location, budget, lifestyle, and interests.

## 🌐 Live Site
[https://jade-youtiao-02d3f7.netlify.app/]

## 🛠️ Features

- 🔐 Authentication: Email/password & Google login
- 🏠 Add/View Listings: Authenticated users can add, update, delete, and view roommate listings
- 🎯 Protected Routes: Routes like Add Listing, My Listings, and Details are private
- 💬 Like System: Users can like listings (except their own) to reveal contact numbers
- 🎨 Modern UI: Fully responsive for mobile, tablet, and desktop
- 🌘 Theme Toggle: Switch between dark and light mode
- 🔍 Browse Listings: Table-based view of all roommate posts
- 🧠 Meaningful content throughout the app — no lorem ipsum
- 💡 Extra UI Enhancements: Included animations and effects using NPM packages

## 📦 NPM Packages Used

- `react-router-dom`: Routing and protected route handling
- `firebase`: Authentication and user management
- `react-hook-form`: Form management
- `axios`: API requests
- `react-toastify`: Notification system
- `sweetalert2`: Alerts and confirmations
- `swiper`: Slider for banner section
- `lottie-react`: Animations on homepage
- `react-simple-typewriter`: Typewriter effect for banners
- `react-awesome-reveal`: Smooth reveal animations
- `react-tooltip`: Enhanced tooltips
- `tailwindcss` & `daisyUI`: Styling and components

## 📱 Responsiveness

Tested on various screen sizes:
- Mobile
- Tablet
- Desktop

## 📁 Pages Included

- Home
- Add to Find Roommate (Protected)
- Browse Listings
- My Listings (Protected)
- Login / Register
- Update Listing (Protected)
- Details Page (Protected)
- 404 Page

## 📂 Environment Variables

Create a `.env` file for Firebase config:

```env
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messagingSenderId
VITE_appId=your_app_id
