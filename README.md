# DevOps Final Task

This repository contains a full-stack product management application built as part of the Yumaris DevOps final task. The project includes a static frontend, a Node.js and Express backend, MongoDB for persistence, Docker Compose for local orchestration, Firebase Hosting for the frontend, and Render for the backend.

## Live Application

- Frontend: `https://yumaris-final-project.web.app`
- Backend: `https://devops-final-task-1.onrender.com`
- API base URL used by the frontend: `https://devops-final-task-1.onrender.com/api`

## Demo Login

- Username: `admin@gmail.com`
- Password: `123456`

## What The App Does

- User registration and login
- Cookie-based authentication with JWT
- Authenticated product creation
- Public product listing
- Product update and delete APIs
- Simple dashboard and product management pages

## Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- Database: MongoDB with Mongoose
- Authentication: JWT stored in HTTP-only cookies
- Local development: Docker Compose
- Frontend hosting: Firebase Hosting
- Backend hosting: Render

## Project Structure

- `frontend/` - static client files served by Firebase Hosting or Nginx
- `backend/` - Express API, MongoDB models, controllers, middleware, and routes
- `docker-compose.yml` - local multi-container setup for frontend, backend, and MongoDB
- `firebase.json` - Firebase Hosting configuration
- `render.yaml` - Render deployment blueprint for the backend

## Main Frontend Pages

- `frontend/index.html` - login page
- `frontend/register.html` - registration page
- `frontend/dashboard.html` - dashboard page after login
- `frontend/add-product.html` - add product form
- `frontend/view-products.html` - list available products

## API Endpoints

### Authentication

- `POST /api/auth/register` - create a new user
- `POST /api/auth/login` - log in and set auth cookie
- `POST /api/auth/logout` - clear auth cookie
- `GET /api/auth/me` - get the currently authenticated user

### Products

- `GET /api/products` - get all products
- `GET /api/products/:id` - get a single product
- `POST /api/products` - create a product, authentication required
- `PUT /api/products/:id` - update a product, authentication required
- `DELETE /api/products/:id` - delete a product, authentication required

## Local Development

### Option 1: Run With Docker Compose

1. Create `backend/.env`
2. Start the stack:

```bash
docker-compose up --build
```

Services:

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`
- MongoDB: `mongodb://localhost:27017`

### Option 2: Run Backend Manually

1. Go to the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create `backend/.env`

4. Start the API:

```bash
npm start
```

The frontend is static, so it can be served by Firebase Hosting, Nginx, or any static file server.

## Environment Variables

Create `backend/.env` with the following values:

```env
PORT=5000
NODE_ENV=production
CLIENT_URL=https://yumaris-final-project.web.app
MONGO_URI=your_mongodb_connection_string
USER_JWT_TOKEN=your_secret_key
```

## Deployment Notes

- The frontend is configured for Firebase Hosting with `frontend/` as the public directory.
- The backend is configured for Render using `backend/` as the root directory.
- MongoDB is expected to be provided through `MONGO_URI`, typically from MongoDB Atlas in production.
- The frontend currently points to the deployed Render backend through `frontend/js/api.js`.

## Authentication Note

The backend uses `secure: true` and `sameSite: "none"` cookies. That setup is correct for HTTPS deployments such as Firebase Hosting plus Render. If you test authentication locally over plain HTTP, you may need different cookie settings for local development.

## Scripts

Inside `backend/`:

- `npm start` - start the production server
- `npm run dev` - start the server with nodemon

## Current Limitations

- No automated test suite is configured yet
- The dashboard currently shows placeholder stats
- Product creation from the current frontend sends only name and price, while the backend also supports description and stock

## Repository URL

`https://github.com/Sanvith6/devops-final-task.git`
