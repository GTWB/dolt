# Dolt 📌 – Your Simple Task Manager

Dolt is a lightweight and intuitive to-do list web application built with HTML, CSS, and Vanilla JavaScript. It focuses on simplicity, speed, and a smooth user experience — no distractions, just tasks.

### 🔗 Live Demo

👉 [https://gtwb.github.io/dolt/](https://gtwb.github.io/dolt/)

---

## ✨ Features

- Add tasks with title and description
- Mark tasks as completed
- Delete individual tasks
- Clear all tasks at once
- Filter tasks by:
  - All
  - To Do
  - Completed
- Real-time search through tasks
- Responsive design
- LocalStorage integration (data persistence)
- Smooth UI animations and transitions

---

## 🧪 Testing

### ✅ E2E Tests (Cypress)

The project includes end-to-end tests written in Cypress.  
These tests cover:

- Adding new tasks
- Marking tasks as done
- Deleting specific tasks
- Clearing the entire task list
- Filtering tasks (All / To Do / Completed)
- Search functionality
- Validation for duplicate tasks

> You can find these tests in `cypress/e2e/dolt.spec.cy.js`.

---

### 🔁 API Tests (Mocked with Postman + Cypress)

Although Dolt doesn’t have a backend, a full set of mock API endpoints has been implemented using a **Postman Mock Server** to simulate future backend integration.

#### Available Endpoints:

| Method | Endpoint     | Description             |
| ------ | ------------ | ----------------------- |
| GET    | `/tasks`     | Get all tasks           |
| GET    | `/tasks/:id` | Get a specific task     |
| POST   | `/tasks`     | Create a new task       |
| PUT    | `/tasks/:id` | Update an existing task |
| DELETE | `/tasks/:id` | Delete a task           |

> API tests are written with Cypress and stored in `cypress/e2e/api_dolt.cy.js`.

#### Mock API Base URL: https://2dbf25e5-573e-41f7-b877-9620b3170cf0.mock.pstmn.io

---

## 🛠️ Technologies Used

- JavaScript (Vanilla)
- HTML5
- CSS3
- Cypress (for E2E and API testing)
- Postman (Mock server for API simulation)

---

## 🚀 Getting Started Locally

1. **Clone the repo**  
   `git clone https://github.com/GTWB/dolt.git`

2. **Install Cypress** (optional, for testing)  
   Make sure Node.js is installed  
   npm install
   npx cypress open
