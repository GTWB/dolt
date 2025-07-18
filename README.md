# Dolt 📌 – Your Simple Task Manager

Dolt is a lightweight and intuitive to-do list web application built with HTML, CSS, and Vanilla JavaScript. It focuses on simplicity, speed, and a smooth user experience — no distractions, just tasks.

### 🔗 Live Demo

👉 [https://gtwb.github.io/dolt/](https://gtwb.github.io/dolt/)

---

## ✨ Features

- Add, remove, and mark tasks as completed
- Filter tasks: All / To Do / Completed
- Real-time search functionality
- LocalStorage support (your tasks persist after refreshing)
- Responsive design (works on desktop and mobile)
- "Clear All" functionality to delete all tasks
- Duplicate title/description detection and prevention

---

## 🧪 Testing

The project includes a Cypress test suite for:

- Adding tasks
- Deleting a specific task
- Marking a task as completed
- Filtering tasks
- Checking empty state and UI behavior

All tests are available in the `tests` branch.

---

## 🛠️ Tech Stack

- HTML5
- CSS3 (with custom styling and media queries)
- JavaScript (ES6)
- Cypress (End-to-End Testing)

---

## 🚀 Getting Started Locally

1. **Clone the repo**  
   `git clone https://github.com/GTWB/dolt.git`

2. **Install Cypress** (optional, for testing)  
   Make sure Node.js is installed  
   npm install
   npx cypress open
