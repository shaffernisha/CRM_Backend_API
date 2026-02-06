CRM Backend API – Module 5 Assignment

-Project Description
This project is a backend application developed using Node.js, Express.js, and MongoDB.

It provides REST APIs for user authentication and customer and case management.

JWT is used for secure authentication, and MongoDB Atlas is used as the database.

CRM Backend API – Module 5 Assignment

-Project Description
This project is a backend application developed using Node.js, Express.js, and MongoDB.

It provides REST APIs for user authentication and customer and case management.

JWT is used for secure authentication, and MongoDB Atlas is used as the database.

-Technologies Used
Node.js
Express.js
MongoDB Atlas
Mongoose
JWT (JSON Web Token)
dotenv
nodemon

-Project Folder Structure

-config
Contains database connection logic

-controllers
Contains request handling logic for authentication, customers, and cases

-middleware
Contains authentication middleware

-models
Contains Mongoose schemas for User, Customer, and Case

-routes
Contains API route definitions

-server.js
Main entry point of the application

-.env
Environment variables file

-package.json
Project dependencies and scripts

-Environment Variables
Create a .env file in the root directory and add the following values:

PORT=5000

MONGO_URI=your_mongodb_atlas_connection_string

JWT_SECRET=your_secret_key

-Installation Steps

Clone or download the project

Open the project folder in VS Code

Install dependencies using

npm install

Start the server using

npm run dev

If everything is correct, the console will show:

Server running on port 5000

MongoDB Connected

-API Endpoints

-Authentication
POST /api/auth/login
Used to log in and get JWT token

-Customers
POST /api/customers
Create a new customer (requires authentication)
GET /api/customers
Get all customers (requires authentication)

-Cases
POST /api/cases
Create a new case (requires authentication)
GET /api/cases
Get all cases (requires authentication)

-Testing the APIs
The APIs were tested using Postman and Thunder Client.
JWT token generated during login is passed in the Authorization header for protected routes.
