# 🎂 Birthday Countdown Timer

A simple web application that calculates how many days are left until your next birthday.  
Users enter their birthday once, and the app remembers it between page reloads for a smooth experience.

Built with **React + Vite**.

---

## 📌 Features

- 📅 Enter your birthday using a date picker
- ⏳ Calculates days remaining until your next birthday
- 💾 Persists your birthday using `localStorage`
- 🔄 Automatically restores data after page reloads
- ⚡ Fast development with Vite

---

## 🛠️ How It Works

1. The user enters their birthday date.
2. The date is saved in the browser’s `localStorage`.
3. On page reload, the saved birthday is restored.
4. The app calculates the number of days until the next occurrence of the birthday.
5. The result is displayed to the user.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

---

### ▶️ Running the Project (**IMPORTANT**)

⚠️ **Do NOT open `index.html` directly in your browser.**  
This project uses **Vite**, and the app must be served through the Vite development server.

#### Correct way to run the app:

```bash
npm install
npm run dev
```
