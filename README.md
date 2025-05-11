# MovieExplorer
# 🎬 Movie Explorer

A web app that lets users search, explore, and discover trending movies using The Movie Database (TMDb) API. Built with React, Material-UI, and deployed via Vercel.

## 🌟 Features

- 🔐 User Login with dummy authentication (username & password)
- 🔎 Movie search with real-time results
- 🖼️ Movie cards showing title, release date, and rating
- 📄 Detailed movie view with cast, genres, trailer, and overview
- 📈 Trending movies display on homepage
- 🌙 Light/Dark mode toggle
- 💾 Favorites list saved in local storage
- 📜 Infinite scroll or "Load More" feature
- 🎥 Embedded YouTube trailers
- 🧩 Filters by genre, year, or rating

## 📦 Tech Stack

- React 19
- React Router DOM
- Material-UI (MUI)
- Axios
- TMDb API
- Local Storage for state persistence
- Vercel for deployment

---

## 📁 Folder Structure
movie-explorer/
│
├── public/
├── src/
│ ├── api/ # TMDb API requests
│ ├── assets/ # Images & logos
│ ├── components/ # Reusable UI components
│ ├── context/ # React Context for global state
│ ├── pages/ # Route views (Home, Login, Details, Favorites)
│ ├── theme/ # Theme & color mode configs
│ ├── utils/ # Helpers like localStorage.js
│ ├── App.js # App root
│ └── index.js # Entry point


---

## 🔑 Setup Instructions

1. **Clone the repo:**

```bash
git clone https://github.com/it22172778/movie-explorer.git
cd movie-explorer

Install dependencies:

npm install

START
npm start

