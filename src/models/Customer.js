const mongoose = require("mongoose");

// Schema for customer details
const customerSchema = new mongoose.Schema({
  // Customer name
  name: {
    type: String,
    required: true,
  },

  // Contact information like phone or email
  contact_info: String,

  // Status of the customer
  status: {
    type: String,
    default: "active",
  },
});

// Export Customer model
module.exports = mongoose.model("Customer", customerSchema);
