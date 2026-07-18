# Mission 3 – Authentication, Middleware & Security

## 📌 Project Overview

This project is part of the **VertexMind Backend Development Internship – Mission 3**.

The application is built using **Node.js, Express.js, and MongoDB** and demonstrates secure user authentication using **JWT**, password hashing with **bcryptjs**, custom middleware, request logging, rate limiting, and security best practices.

---

## 🚀 Features

- User Registration
- User Login
- Password Hashing using bcryptjs
- JWT Authentication
- Protected Routes
- Authentication Middleware
- Custom Logger Middleware
- Rate Limiting Middleware
- Helmet Security
- CORS Configuration
- Morgan Request Logging
- MongoDB Database Integration

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- Helmet
- CORS
- Morgan
- express-rate-limit
- dotenv

---

## 📁 Folder Structure

```
mission-3-authentication/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── userController.js
│
├── middleware/
│   ├── authMiddleware.js
│   ├── logger.js
│   └── rateLimiter.js
│
├── models/
│   └── User.js
│
├── routes/
│   └── userRoutes.js
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate into the project

```bash
cd mission-3-authentication
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the server

```bash
npm run dev
```

---

## 📌 API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/users/register` | Register a new user |
| POST | `/api/users/login` | Login user |

### Protected Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get user by ID |
| PUT | `/api/users/:id` | Update user |
| DELETE | `/api/users/:id` | Delete user |

---

## 🔐 Security Features

- JWT Authentication
- Password Hashing
- Authentication Middleware
- Helmet Security Headers
- CORS Protection
- Request Rate Limiting
- Custom Request Logger

---

## 🧪 Testing

The APIs were tested using **Thunder Client**.

Verified functionalities include:

- User Registration
- User Login
- JWT Token Generation
- Protected Routes
- Unauthorized Access Handling
- Logger Middleware
- Rate Limiter
- Helmet
- CORS

---

## 👨‍💻 Author

**Prathamesh Bidkar**

Backend Development Intern – VertexMind
