const mongoose = require("mongoose");

// Schema for user collection
const userSchema = new mongoose.Schema({
  // Username of the user
  username: {
    type: String,
    required: true,
  },

  // Hashed password
  password: {
    type: String,
    required: true,
  },

  // Role of the user (admin / staff)
  role: {
    type: String,
    default: "admin",
  },
});

// Export User model
module.exports = mongoose.model("User", userSchema);
