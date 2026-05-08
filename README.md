<div align="center">

<img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react" />
<img src="https://img.shields.io/badge/-Vite-black?style=for-the-badge&logoColor=white&logo=vite&color=646CFF" alt="vite" />
<img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
<img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
<img src="https://img.shields.io/badge/-TMDB_API-black?style=for-the-badge&logoColor=white&logo=themoviedatabase&color=01B4E4" alt="tmdb" />

<h1>🎬 BingeFlix</h1>

### Movie Discovery App

*Browse trending movies, search titles, and discover what to watch next — all in one place.*



</div>

---

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)
5. [Environment Variables](#environment-variables)
6. [Project Structure](#project-structure)

---

## 🤖 Introduction

**BingeFlix** is a responsive movie discovery web app built with React.js and Vite. It lets users search for any movie in real time using the TMDB API and displays a trending movies section powered by Appwrite — which tracks and ranks movies based on how often they are searched.

---

## ⚙️ Tech Stack

| Purpose | Technology |
|---------|-----------|
| **UI Library** | React.js |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS |
| **Movie Data** | TMDB API |
| **Backend / Trending** | Appwrite (BaaS) |
| **Deployment** | Vercel |

---

## ✨ Features

- **Browse Movies** — Explore a wide range of movies fetched from TMDB
- **Real-Time Search** — Search any movie title and get instant results
- **Trending Movies** — Displays movies ranked by search frequency, tracked via Appwrite
- **Movie Cards** — Each card shows poster, title, rating, language, and release year
- **Responsive Design** — Works seamlessly across desktop and mobile
- **Fast Performance** — Powered by Vite for instant dev builds and optimised production output

---

## 🤸 Quick Start

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en) (v18+)
- [npm](https://www.npmjs.com/)

### Clone the Repository

```bash
git clone https://github.com/mannatgit22/bingeflix.git
cd bingeflix
```

### Install Dependencies

```bash
npm install
```

### Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_TMDB_API_KEY=

VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_COLLECTION_ID=
```

- Get your TMDB API key from [themoviedb.org](https://developer.themoviedb.org/reference/intro/getting-started)
- Get your Appwrite credentials from [appwrite.io](https://appwrite.io/)

### Run the Project

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🗂️ Project Structure

```
bingeflix/
├── src/
│   ├── components/       # Reusable UI components (MovieCard, Spinner, Search)
│   ├── App.jsx           # Main app component
│   ├── appwrite.js       # Appwrite configuration and trending logic
│   └── index.css         # Global styles
├── public/               # Static assets
├── .env.local            # Environment variables (not committed)
├── vite.config.js        # Vite configuration
└── README.md
```

---

## 🔗 Links

- **GitHub Repository:** [github.com/mannatgit22/bingeflix](https://github.com/mannatgit22/bingeflix)
- **Live Demo:** [Deployed on Vercel](https://bingeflix.vercel.app)

---

---

<div align="center">

**Made with 🎬 and React**

[⬆ Back to Top](#-bingeflix)

</div>
