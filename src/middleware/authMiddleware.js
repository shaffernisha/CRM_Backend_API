const jwt = require("jsonwebtoken");

// Middleware to protect routes
module.exports = (req, res, next) => {
  // Read token from request header
  const token = req.headers.authorization;

  // If token not found
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    // Verify token
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
