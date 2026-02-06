const express = require("express");
const router = express.Router();
const {
  createCustomer,
  getCustomers,
} = require("../controllers/customerController");
const auth = require("../middleware/authMiddleware");

// Create customer route
router.post("/", auth, createCustomer);

// Get all customers route
router.get("/", auth, getCustomers);

module.exports = router;
