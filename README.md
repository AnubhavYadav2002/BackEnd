# AuthApp: A User Authentication System

This project is a Node.js application designed to handle user authentication and authorization, including secure password hashing, JWT token handling, and role-based access control. Below is the detailed guide to understanding, running, and modifying the application.

---

## Features

1. **User Signup & Login**:
   - Secure password storage with bcrypt.
   - Token-based authentication using JWT.
   - Role-based access control for `Admin`, `Student`, and `Visitor`.

2. **Authentication Middleware**:
   - Ensures that only authorized users can access protected routes.

3. **Role-Based Middleware**:
   - Restricts access to specific routes based on user roles.

4. **MongoDB Integration**:
   - User data stored and retrieved from MongoDB Atlas.

5. **Environment Variable Configuration**:
   - Sensitive data like database connection strings and JWT secrets are securely stored in a `.env` file.

---

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (using Mongoose ODM)
- **Authentication**: JWT (JSON Web Token), bcrypt
- **Miscellaneous**: dotenv, cookie-parser

---

## Prerequisites

Ensure you have the following installed on your system:

1. **Node.js** (v14+)
2. **MongoDB Atlas** account for cloud database (or local MongoDB instance)
3. **Git**

---

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/AuthApp.git
cd AuthApp
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root of your project and add the following:

```env
PORT=4000
MONGODB_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/AuthApp
JWT_SECRET=<your-secret-key>
```

Replace `<username>`, `<password>`, and `<your-secret-key>` with your MongoDB credentials and a strong secret key.

### 4. Start the Application

```bash
npm start
```

The application will run on [http://localhost:4000](http://localhost:4000).

---

## API Endpoints

### **Signup**
**POST** `/api/v1/signup`  
Registers a new user.

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123",
  "role": "Student"
}
```

**Response**:
```json
{
  "success": true,
  "message": "User Created Successfully"
}
```

---

### **Login**
**POST** `/api/v1/login`  
Authenticates a user and returns a JWT token.

**Request Body**:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Response**:
```json
{
  "success": true,
  "token": "<jwt-token>",
  "user": {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "role": "Student"
  }
}
```

---

### **Protected Routes**

#### **Authentication Middleware**
- Ensures requests have a valid JWT token.

#### **Role-Based Access**
- `isStudent`: Restricts access to students.
- `isAdmin`: Restricts access to administrators.

---

## Folder Structure

```
.
├── config/
│   └── database.js      # Database connection configuration
├── models/
│   └── User.js          # Mongoose schema for User
├── routes/
│   └── user.js          # Routes for signup, login, and protected endpoints
├── middleware/
│   └── auth.js          # Authentication and role-based middleware
├── .env                 # Environment variables
├── app.js               # Application entry point
└── package.json         # Node.js project dependencies
```

---

## Dependencies

- **Express**: For creating server and handling routes.
- **Mongoose**: For MongoDB object modeling.
- **bcrypt**: For hashing passwords securely.
- **jsonwebtoken**: For generating and verifying JWT tokens.
- **dotenv**: For loading environment variables.
- **cookie-parser**: For handling cookies in requests.

---

## Troubleshooting

1. **Database Connection Errors**:
   - Ensure your MongoDB Atlas cluster is set up and the connection string in `.env` is correct.

2. **JWT Token Issues**:
   - Ensure the `JWT_SECRET` in `.env` matches the one used during token generation.

3. **Server Crashes**:
   - Check logs for detailed error messages and ensure all dependencies are installed.

---
