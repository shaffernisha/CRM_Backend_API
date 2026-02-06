const Case = require("../models/Case");

// Create a new case
exports.createCase = async (req, res) => {
  try {
    const newCase = await Case.create(req.body);
    res.json(newCase);
  } catch (error) {
    res.status(500).json({ message: "Case creation failed" });
  }
};

// Update existing case
exports.updateCase = async (req, res) => {
  try {
    const updatedCase = await Case.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedCase);
  } catch (error) {
    res.status(500).json({ message: "Case update failed" });
  }
};
