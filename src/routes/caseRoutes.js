const express = require("express");
const router = express.Router();
const {
  createCase,
  updateCase,
} = require("../controllers/caseController");
const auth = require("../middleware/authMiddleware");

// Create new case
router.post("/", auth, createCase);

// Update case by ID
router.patch("/:id", auth, updateCase);

module.exports = router;
