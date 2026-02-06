// Import required packages
const express = require("express");
const dotenv = require("dotenv");

// Import database connection function
const connectDB = require("./src/config/db");

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize express app
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Import and use routes
app.use("/api/auth", require("./src/routes/authRoutes"));
app.use("/api/customers", require("./src/routes/customerRoutes"));
app.use("/api/cases", require("./src/routes/caseRoutes"));

// Set port number
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
