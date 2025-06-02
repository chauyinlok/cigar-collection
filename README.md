# Cigar Collection Management System

This is a personal cigar collection tracking system built with **HTML**, **CSS**, and **JavaScript**. It allows you to view, manage, and analyze a static dataset of premium cigars with details such as quantity, brand, production date, pricing, and rating.

## 📁 Contents

- `index.html` – Main HTML structure of the system.
- `style.css` – Visual styles and layout.
- `script.js` – JavaScript logic to render data and interactivity.
- `README.md` – This file.

## ⚠️ Limitations When Using GitHub Pages

This is a **static frontend project** with no backend or database. If you plan to host it using **GitHub Pages**, please note the following:

### 🔒 Data Persistence

- The cigar list (`cigarData`) is hard-coded in `script.js`.  
- Any changes (like adding, editing, or deleting cigars) **will not persist** after refreshing the page.
- GitHub Pages does **not** support writing or saving data dynamically.  
- To make changes permanent, you'll need to manually update the JavaScript file and re-upload or commit the changes.

### 🔐 Privacy Considerations

- Do **not** upload sensitive personal collection information if the repository is public.
- All data in a public GitHub repo is visible to everyone.
- Consider making your repository **private** if your cigar collection is personal or valuable.

### 📊 Intended Use

- Best used as a personal display project or prototype.
- Great for managing a demo set of cigars or learning how to build a data dashboard.
- For full functionality (persistent storage, authentication, cloud access), consider adding a backend (e.g., Firebase, Supabase, Node.js).

## 🚀 Deploying to GitHub Pages

1. Push all files to your GitHub repository.
2. Go to **Settings** → **Pages**.
3. Select your branch and root folder (`/`).
4. Visit the generated link to view your app live.

## 🛠️ Future Enhancements (Suggestions)

- Add a backend API for persistent data (MongoDB, Supabase, etc.)
- Implement a modal form to create/edit cigars
- Add user authentication to secure private collections
- Export/import data to/from JSON or CSV

---

**Created by a cigar enthusiast.**  
Feel free to fork and customize this project!
