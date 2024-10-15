# 📝 Todo App API

Welcome to the **Todo App API** project! This Node.js application is designed for managing a simple to-do list with full **CRUD** (Create, Read, Update, Delete) operations using **MongoDB** as the database. The project is built using **Express.js**, and includes route handling and database connectivity through **Mongoose**.

## 🚀 Features
- **Add new tasks** with a title and description.
- **View all tasks** in the system.
- **Update existing tasks** to keep your list organized.
- **Delete tasks** when completed or no longer needed.


## 🛠️ Technologies Used
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Fast, minimalist web framework.
- **MongoDB**: NoSQL database for efficient data storage.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **dotenv**: For managing environment variables.

## 📂 Project Structure

```bash
.
├── config
│   └── database.js      # Handles MongoDB connection
├── controllers
│   └── createTodo.js    # Handles the business logic for creating Todos
├── models
│   └── Todo.js          # Todo schema and model definition
├── routes
│   └── todo.js          # API routes for Todo
├── .env                 # Environment variables
├── server.js            # Main server entry point
└── README.md            # You are here!
```

## 📋 API Endpoints

| Method | Endpoint         | Description          |
|--------|------------------|----------------------|
| POST   | `/api/v1/createTodo` | Create a new task   |
| GET    | `/api/v1/todos`      | Get all tasks       |
| PUT    | `/api/v1/updateTodo/:id` | Update a task   |
| DELETE | `/api/v1/deleteTodo/:id` | Delete a task   |

## ⚙️ Installation

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

4. Create a `.env` file for your environment variables:
    ```bash
    touch .env
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

6. Your API should be running at `http://localhost:4001`.

Happy coding! 😊
