# DevOps Internship - Day 9 Final Training Task

This repository contains the final full-stack internship project built for the Yumaris Agency DevOps Internship Program.

## Project Overview

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express, MongoDB
- Local orchestration: Docker Compose
- Cloud deployment:
- Frontend on Firebase Hosting
- Backend prepared for Render deployment from the `backend/` folder
- Database on MongoDB Atlas

## Live Frontend

- Firebase Hosting URL: `https://yumaris-final-project.web.app`

## Repository Structure

- `frontend/`: static frontend files
- `backend/`: Express API for auth and product management
- `docker-compose.yml`: local multi-service setup
- `firebase.json`: Firebase Hosting configuration
- `render.yaml`: Render blueprint for backend deployment

## Local Run

1. Install backend dependencies inside `backend/`
2. Create `backend/.env` using `backend/.env.example`
3. Run the backend with `npm start`
4. Serve the frontend locally or deploy it to Firebase Hosting

For Docker-based local development:

```bash
docker-compose up --build
```

## API Modules

- Auth APIs under `/api/auth`
- Product APIs under `/api/products`

## Deployment Notes

- Firebase Hosting serves the frontend
- Render should deploy the backend from the `backend/` directory
- MongoDB Atlas is used through the `MONGO_URI` environment variable
- The backend CORS origin must match the Firebase frontend URL in `CLIENT_URL`

## Important Environment Variables

Create `backend/.env` with:

```env
PORT=5000
NODE_ENV=production
CLIENT_URL=https://yumaris-final-project.web.app
MONGO_URI=your_mongodb_atlas_connection_string
USER_JWT_TOKEN=your_secret_key
```

## Internship Context

This project demonstrates:

- frontend and backend integration
- API development with authentication and CRUD operations
- MongoDB database integration
- Docker-based local deployment
- Firebase and Render deployment workflow

## Conclusion

This project is structured for both local development and free-tier cloud deployment using Firebase Hosting, Render, and MongoDB Atlas.
