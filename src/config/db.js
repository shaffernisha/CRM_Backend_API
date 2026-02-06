// Import mongoose to connect with MongoDB
const mongoose = require("mongoose");

// Function to connect database
const connectDB = async () => {
  try {
    // Connect using MongoDB URI from environment variables
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    // Show error message if connection fails
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

// Export the function
module.exports = connectDB;
