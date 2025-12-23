# 🌍 Smart Nearby Places Recommender

A modern, responsive web application that recommends nearby places based on the user's **mood and intent** such as work, date, quick bite, or budget-friendly outings.

Built with **React**, enhanced with **animations**, and designed with a strong focus on **real-world UX and frontend logic**.

---

## 🚀 Live Demo

```
https://smart-nearby-place-advisor.netlify.app/
```

---

## ✨ Features

* 🎭 **Mood-based recommendations** (Work, Date, Quick Bite, Budget)
* 📍 **Nearby places listing** with:

  * Distance
  * Ratings
  * Open / Closed status
* 🔀 **Sorting & filtering** (by distance, rating)
* 🎨 **Colourful, animated, professional UI**
* ⚡ Smooth micro-interactions using Framer Motion
* 📱 Fully **responsive design** (mobile + desktop)

---

## 🛠 Tech Stack

### Frontend

* **React (Create React App)**
* **JavaScript (ES6+)**
* **Tailwind CSS** – utility-first styling
* **Framer Motion** – animations & transitions
* **Lucide Icons** – modern icon set

### APIs (Planned / Optional)

* OpenStreetMap / Google Maps
* Places API (free-tier friendly)

---

## 🧠 Project Motivation

This project was built to:

* Demonstrate **real-world frontend problem solving**
* Practice **component-based UI design**
* Implement **sorting & filtering logic**
* Build a project suitable for **college evaluation, portfolios, and interviews**

---

## 📂 Project Structure

```
nearby-places/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── MoodSelector.jsx
│   │   ├── PlaceCard.jsx
│   │   └── PlacesList.jsx
│   ├── App.js
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/<your-username>/nearby-places.git
cd nearby-places
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm start
```

The app will run at:

```
http://localhost:3000
```

---

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized `build/` folder ready for deployment.

---

## 🌐 Deployment

This project can be deployed for free using:

* **Netlify** (recommended)
* **Vercel**
* GitHub Pages

Deployment uses only the source code — **`node_modules` is not pushed**.

---

## 🔒 Environment Variables (Optional)

If using APIs:

```env
REACT_APP_MAPS_API_KEY=your_api_key_here
```

> Environment variables are not committed to GitHub.

---

## 🧩 Future Improvements

* 🔍 Real-time location detection
* 🗺 Interactive map view
* ⭐ User reviews & bookmarks
* 🔐 Authentication
* 📊 Analytics & usage insights

---

## 📄 License

This project is licensed under the **MIT License** — free to use and modify.

---

⭐ If you like this project, consider giving it a star on GitHub!
