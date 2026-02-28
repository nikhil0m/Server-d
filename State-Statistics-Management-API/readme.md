# State Statistics Management API

A complete RESTful API built using **Express.js** to manage statistical data of Indian states using an in-memory JSON array.

This project demonstrates proper REST architecture, correct HTTP method usage, dynamic routing, array manipulation, and appropriate status codes.

---

## 🚀 Features

* Full REST implementation (GET, POST, PUT, PATCH, DELETE)
* In-memory data storage (No database)
* Proper HTTP status codes (200, 201, 204, 404)
* Auto ID generation
* Case-insensitive name deletion
* Difference between PUT (full replace) and PATCH (partial update)

---

## 🛠 Tech Stack

* Node.js
* Express.js
* CORS
* express.json() middleware

---

## 📂 Project Setup

### 1️⃣ Clone Repository

```bash
git clone <your-github-repo-link>
cd state-statistics-api
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Server

```bash
node index.js
```

Server runs on:

```
http://localhost:3000
```

---

## 📊 Data Structure

Each state follows this structure:

```js
{
  id: 1,
  name: "Gujarat",
  population: 63872399,
  literacyRate: 78.03,
  annualBudget: 243965,
  gdp: 21000000
}
```

---

# 📌 API Routes

---

## 🟢 GET Routes

### 1. GET `/states`

* Returns all states
* Status: **200**

### 2. GET `/states/:id`

* Returns state by ID
* If not found → `{ message: "State not found" }`
* Status: **200 / 404**

### 3. GET `/states/highest-gdp`

* Returns state with highest GDP
* Status: **200**

---

## 🔵 POST Route

### 4. POST `/states`

* Adds new state
* Auto-generates unique ID
* Returns created object
* Status: **201**

---

## 🟡 PUT Routes (Full Replacement)

### 5. PUT `/states/:id`

* Replace entire state (except id)

### 6. PUT `/states/:id/budget`

* Replace annualBudget only

### 7. PUT `/states/:id/population`

* Replace population only

Status: **200 / 404**

---

## 🟠 PATCH Routes (Partial Update)

### 8. PATCH `/states/:id/literacy`

* Update literacyRate only

### 9. PATCH `/states/:id/gdp`

* Update gdp only

### 10. PATCH `/states/:id`

* Update any provided fields

Status: **200 / 404**

---

## 🔴 DELETE Routes

### 11. DELETE `/states/:id`

* Delete by ID
* Status: **204 / 404**

### 12. DELETE `/states/name/:stateName`

* Delete by state name (case-insensitive)

### 13. DELETE `/states/low-literacy/:percentage`

* Delete states with literacyRate lower than given value
* Returns:

```json
{
  "deletedCount": number
}
```

---

## 📬 Submission Requirements

* ✅ GitHub Repository Link (with README & setup instructions)
* ✅ Postman Documentation Link (All 13 routes documented)
* ✅ Render Deployment Link (Public working API)

---

## 📖 Learning Outcomes

* REST API design principles
* Proper HTTP method usage
* PUT vs PATCH difference
* Route parameters & middleware usage
* Array data manipulation
* Status code best practices

---

**Author:** Your Name
**Assignment:** State Statistics Management API
