// const { route } = require("../shared/shared");
// const { findUserByToken } = require("../queries/userQueries");
const express = require("express");
const { register, login } = require("../controllers/userControllers");
const { getAllUser } = require("../queries/userQuery");
const authenticateToken = require("../middleware/authenticateToken");

const router = express.Router();

const { register, displayAll } = require("../controllers/userControllers");
router.post("/register", register);

const { login } = require("../controllers/userControllers");
router.post("/login", login);

// Secure the getAllUser route with the authentication middleware
router.get("/users", authenticateToken, async (req, res) => {
  try {
    const users = await getAllUser();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
