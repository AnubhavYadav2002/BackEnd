# 📝 Todo App API - Learnings & Insights

Welcome to my **Todo App API** project! This project is a simple CRUD application built using **Node.js**, **Express.js**, and **MongoDB**. Below, I’ll share not only the technical aspects but also what I’ve learned from working on this project.

## 🚀 Features of the Application
- **Add Tasks**: Create tasks with a title and description.
- **View Tasks**: Retrieve and view all stored tasks.
- **Update Tasks**: Modify existing tasks when needed.
- **Delete Tasks**: Remove completed or unwanted tasks.
- RESTful API architecture for integration with front-end clients.

## 🛠️ Technologies Used
- **Node.js**: Runtime environment that enables server-side JavaScript execution.
- **Express.js**: Simplified the routing and handling of HTTP requests.
- **MongoDB**: NoSQL database for managing data efficiently.
- **Mongoose**: Used as the ODM for MongoDB, which made schema definition and validation easy.
- **dotenv**: For managing sensitive information through environment variables.

## 📚 What I Learned

### 1. **Setting Up a Node.js and Express Server**
   I learned how to configure a Node.js server with Express, set up routing, and handle HTTP requests. Understanding how middleware works (like `express.json()` for handling JSON payloads) was a key takeaway.

### 2. **Connecting to a Database (MongoDB)**
   I got hands-on experience using **Mongoose** to connect a Node.js application to MongoDB. I also learned how to:
   - Define schemas with validation rules.
   - Interact with the database for performing CRUD operations (Create, Read, Update, Delete).
   - Handle asynchronous operations and manage errors with `try-catch` blocks.

### 3. **Environment Variables with dotenv**
   This project taught me the importance of keeping sensitive data like database URLs and ports out of the codebase by using environment variables stored in a `.env` file. Using the `dotenv` package was very straightforward and added security to my project.

### 4. **Building RESTful APIs**
   I learned how to structure and build RESTful APIs, ensuring that the routes are well-defined and follow best practices. For example, using proper HTTP methods:
   - `POST` for creating a new task.
   - `GET` for fetching tasks.
   - `PUT` for updating tasks.
   - `DELETE` for removing tasks.

### 5. **Error Handling and Debugging**
   A significant learning aspect was error handling. I gained experience in:
   - Catching and logging errors to the console for debugging.
   - Sending proper response status codes (like 200 for success and 500 for internal server errors) to the client.

### 6. **Structuring a Node.js Project**
   This project taught me how to structure a Node.js application for scalability. Breaking down the project into directories like:
   - **models** for defining schemas,
   - **controllers** for logic handling, and
   - **routes** for API routing,
   makes the project clean and easier to manage as it grows.

## 📋 API Endpoints Overview

| Method | Endpoint         | Description          |
|--------|------------------|----------------------|
| POST   | `/api/v1/createTodo` | Create a new task   |
| GET    | `/api/v1/todos`      | Get all tasks       |
| PUT    | `/api/v1/updateTodo/:id` | Update a task   |
| DELETE | `/api/v1/deleteTodo/:id` | Delete a task   |

## ⚙️ Installation Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/todo-app-api.git
    ```

2. Navigate into the project directory:
    ```bash
    cd todo-app-api
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file:
    ```bash
     .env
    ```
    Add the following to your `.env` file:
    ```bash
    PORT=4001
    DATABASE_URL=your_mongodb_connection_string
    ```

5. Start the server:
    ```bash
    npm start
    ```

6. Your API should now be running at `http://localhost:4001`.

## 🔧 Future Scope
There are several improvements I can make to this project moving forward:
- **User Authentication**: Adding JWT-based authentication for securing routes.
- **UI for Task Management**: Building a front-end with React or Vue.js to interact with the API.
- **Advanced Filtering & Sorting**: Implementing additional features like task priority or due dates.

## 📝 Conclusion
Working on this project helped me solidify my knowledge of backend development, particularly with Node.js and Express.js. Connecting to MongoDB, setting up a REST API, and understanding the flow of an application from request to response was an invaluable learning experience.

---

Happy coding! 😊

