# 🥃 Cigar Collection Manager

A simple, elegant web-based app for managing a personal cigar collection. Built with HTML, CSS, and JavaScript — no frameworks, no server — everything runs in your browser.

---

## 📂 File Structure

- `index.html` – Main HTML layout and structure
- `style.css` – Styling for the interface and components
- `script.js` – App logic (data handling, UI updates, localStorage)

---

## ✨ Features

- View a table of premium cigars with attributes:
  - Name, Brand, Production Date, Quantity, Price, and Rating
- Add new cigars with random attributes (demo)
- Edit and delete existing entries (edit is currently a placeholder)
- Live statistics:
  - Total cigars
  - Unique brands
  - Average rating
  - Total value
- Visual star ratings (★)
- Fully responsive layout (mobile-friendly)
- Persistent data storage using `localStorage`

---

## ⚠️ GitHub Pages / localStorage Constraints

This project uses **`localStorage`** to persist data between page reloads.

### Key implications:

- ✅ **Local Testing:** Your entries persist as expected.
- ✅ **GitHub Pages Hosting:** Works the same — data persists **per browser per user**.
- ❌ **Data is NOT shared across devices** or users (no backend or cloud).
- ❌ Clearing browser cache or storage will erase the data.
- ✅ A “Reset” button is provided to restore the original dataset.

For multi-user or shared access, you'd need to integrate a **backend/database** (e.g. Firebase, Supabase, MongoDB).

---

## 🚀 Usage

1. Clone or download this repository.
2. Open `index.html` in a browser.
3. Click **Add New Cigar** to test the form.
4. Use the table buttons to interact with cigars.
5. Click **Reset Data** if you want to restore the original cigars.

---

## 📌 To-Do (Future Features)

- [ ] Fix the Edit button

- [ ] Implement full modal-based cigar editor
- [ ] Search and filter cigars
- [ ] Import/export JSON for backup
- [ ] Tagging and categorization
- [ ] Image upload (optional)
- [ ] Cloud sync or login

---

## 🛠 Built With

- HTML5
- CSS3
- JavaScript (ES6)
- Font Awesome (icons)

---

## 📄 License

This project is open source and free to use under the MIT License.
