# DevOps Internship – Day 9 Final Training Task

This repository is created as part of the **Yumaris Agency DevOps Internship Program**, focusing on building a fully integrated, production-ready web application combining frontend, backend, and DevOps deployment.

---

## Task Objective

Integrate frontend, backend, and deployment workflows into a single working project. Deploy or run the application locally using Docker and Docker Compose.

---

## Steps Performed

* **Frontend**
  * Developed complete UI including Login, Dashboard, and other pages
  * Connected frontend with backend APIs
  * Implemented responsive design and client-side validation

* **Backend**
  * Built APIs for authentication, CRUD operations, and validation
  * Connected backend with **MongoDB** database
  * Structured code modularly (routes, controllers, DB config)
  * Implemented environment-based configuration using `.env`

* **DevOps / Deployment**
  * Wrote Dockerfile for backend service
  * Dockerized frontend (if applicable) for serving via Nginx or Node
  * Created `docker-compose.yml` for multi-container setup (frontend + backend + MongoDB)
  * Configured persistent storage for MongoDB using Docker volumes
  * Built and ran containers using Docker Compose
  * Tested complete application flow locally

---

## Docker Commands Used

* `docker-compose up --build`
* `docker ps`
* `docker-compose down`

---

## Tools Used

* Docker
* Docker Compose
* Node.js & Express.js (Backend)
* HTML-CSS-JS (Frontend)
* MongoDB
* Postman / Browser (API testing)

---

## Key Learnings

* Integrating frontend and backend services in a containerized environment
* Managing multi-container applications using Docker Compose
* Connecting frontend with backend APIs in a live environment
* Handling environment variables for both frontend and backend
* Implementing persistent storage for MongoDB using Docker volumes
* Running and testing full-stack applications in Docker

---

## API Endpoints

### Authentication APIs

* **POST /api/auth/register** → Register a new user  
* **POST /api/auth/login** → Login existing user  
* **GET /api/auth/me** → Get current user (Protected)  
* **POST /api/auth/logout** → Logout user (Protected)  

### Products APIs

* **POST /api/products** → Create a new product (Protected)  
* **GET /api/products** → Fetch all products (Public)  
* **GET /api/products/:id** → Fetch product by ID (Public)  
* **PUT /api/products/:id** → Update product (Protected)  
* **DELETE /api/products/:id** → Delete product (Protected)  

> **Note:** Protected routes require a valid JWT or cookie token.

---

## Frontend Pages

* **Login Page** – User authentication
* **Dashboard** – Display user info and operations
* **User Management** – CRUD interface for users
* **Other Pages** – Complete UI as per internship requirement

---

## Submission Details

* All frontend, backend, and deployment work is merged into a single project
* Project is running on Docker Compose for easy local deployment
* Final working URL: https://frontend-latest-radp.onrender.com/
  
## Screenshots

### Login Page

<img width="1366" height="768" alt="Image" src="https://github.com/user-attachments/assets/72097079-fbab-443f-9f05-f5d2ca5c5009" />

### Dashboard

<img width="1366" height="768" alt="Image" src="https://github.com/user-attachments/assets/9b381c48-e288-43e4-a5b7-9beeef80629c" />

### Add Product

<img width="1366" height="768" alt="Image" src="https://github.com/user-attachments/assets/8c3d3da7-57c3-4585-9d48-47e3949509ff" />

### View Products

<img width="1366" height="768" alt="Image" src="https://github.com/user-attachments/assets/951a6a02-3f38-4382-a3c8-2da4507b484c" />

---

## Internship Context

This task is part of the **Yumaris Agency DevOps Internship**, where interns gain hands-on experience with:

* Full-stack application development
* Real-world DevOps tools and workflows
* Containerization and multi-service orchestration
* Industry-standard project integration and deployment

---

## Conclusion

Successfully built, integrated, and deployed a full-stack web application combining frontend, backend, and Docker-based deployment using **MongoDB** as the database. Demonstrated real-world DevOps and full-stack development practices, producing a fully functional project ready for submission.
