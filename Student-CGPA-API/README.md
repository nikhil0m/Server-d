LINKS ->
  - PostMan -> ` https://documenter.getpostman.com/view/50839293/2sBXcGCywK `
  - Render/Deployed  -> ` https://students-cgpa-api-1dgv.onrender.com `

STUDENT CGPA API -> 
A RESTful API built with "Express.js" to manage student academic performance records using an "in-memory JSON array".
This project demonstrates core backend fundamentals.
__________

PROJECT OBJECTIVE ->
  - Use only "GET" routes
  - Include "static routes and dynamic routes"
  - Follow 'REST principles'
  - Return proper 'HTTP status codes'
__________

TECH STACK ->
  - Node.js
  - Express.js
  - CORS Middleware
__________

INSTALLATION & SETUP ->

1. Install dependencies:
```bash
npm install
npm install express cors
```
2. Start the server:
```bash
nodemon server.js
```
3. Access the API at:
``` http://localhost:3000 ```
__________

DATA STRUCTURE ->

Each student record follows this format:
```json
{
  "id": 1,
  "name": "Aarav Sharma",
  "branch": "CSE",
  "semester": 8,
  "cgpa": 9.3
}
```
__________

API Endpoints ->
1. GET `/students`
2. GET `/students/topper`
3. GET `/students/average`
4. GET `/students/count`
5. GET `/students/:id`
6. GET `/students/branch/:branchName`
__________

HTTP STATUS CODES
Code  -  Meaning
200   -  Successful request 
404   -  Resource not found 
500   -  Internal server error (optional handling)
__________

This project is intended for educational purposes.