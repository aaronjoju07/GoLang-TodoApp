# Todo App with Golang and ReactJS

This project is a simple Todo App with a Golang backend serving as the server and a ReactJS frontend as the client.

## Backend (Golang)

The backend is built using Golang and uses the [gorilla/mux](https://github.com/gorilla/mux) package for routing.

### Backend Routes

- `GET /api/task`: Retrieve all tasks.
- `POST /api/tasks`: Create a new task.
- `PUT /api/task/{id}`: Mark a task as complete.
- `PUT /api/UndoTask/{id}`: Undo a completed task.
- `DELETE /api/deleteTask/{id}`: Delete a specific task.
- `DELETE /api/deleteAllTasks`: Delete all tasks.

### Running the Backend

1. Make sure you have Golang installed on your machine.
2. Clone the repository:

### 1.Navigate to the backend directory
```bash
cd todo-app-golang/backend
```
### 2.Run the following commands to start the server
```bash
go mod tidy
go run main.go
```
### 3.The backend server should now be running on 
http://localhost:8000.

## Running the Frontend
### 1.Navigate to the frontend directory:
```bash
cd todo-app-golang/frontend
```
### 2.Install dependencies:
```bash
npm install
```
### 3.Run the following command to start the React development server:
```bash
npm start
```
### 4.The React app should now be running on 
http://localhost:3000.
