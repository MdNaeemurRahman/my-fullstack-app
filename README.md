# My Fullstack App
#### *This is a `Docker` learning project to test my understanding on Docker concepts and its commands*

This project is a simple full-stack application consisting of a *Node.js Backend* connected to *MongoDB* and a *Frontend* served with Express. Both backend and frontend are containerized using Docker and orchestrated via Docker Compose.

This is a full-stack application consisting of:

- **Backend**: A Node.js backend server running inside Docker.
- **Frontend**: A simple frontend with HTML and JavaScript, also dockerized.

## Project Structure

        my-fullstack-app/
        │
        ├── backend/
        │   ├── Dockerfile
        │   ├── package.json
        │   ├── server.js
        │
        ├── frontend/
        │   ├── Dockerfile
        │   ├── index.html
        │   ├── server.js
        │   └── package.json
        │
        ├── docker-compose.yml
        └── README.md


## Setup

Using `Docker` would be the simple way of Setting up this project on your machine and running it. 

### Prerequisites

Ensure you have the following installed on your machine:

- **Docker**: Install Docker from [here](https://docs.docker.com/get-docker/).
- **Docker Compose**: Docker Compose comes pre-installed with Docker Desktop.

### Running the Application

Follow these steps to run the full-stack application:

1. **Clone the Repository:**

   If you haven't already, clone the repository to your local machine:

   ``` git clone https://github.com/your-username/my-fullstack-app.git ```
   ``` cd my-fullstack-app ```

2. **Build and Run the Application:**

    ` docker compose up --build `

3. **Access the Application:**

    - Frontend: Visit `http://localhost:8080` to view the frontend.
    - Backend API: Visit `http://localhost:3000/api` to access the backend API directly.

4. **Stopping the Application and Cleanup**

    `docker compose down`
    `docker compose down --volumes`


