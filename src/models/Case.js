const mongoose = require("mongoose");

// Schema for case management
const caseSchema = new mongoose.Schema({
  // Reference to customer
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },

  // Person assigned to the case
  assigned_to: String,

  // Case priority (high / medium / low)
  priority: String,

  // Current status of the case
  status: String,

  // Case creation date
  created_at: {
    type: Date,
    default: Date.now,
  },
});

// Export Case model
module.exports = mongoose.model("Case", caseSchema);
