const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require("../Controllers/usersController.js");
const { protect } = require("../Middleware/authMiddleware.js");

/*-----------Register Request-------------*/
router.post("/", registerUser);

/*-----------Login Request-------------*/
router.post("/login", loginUser);

/*-----------Protected Request-------------*/
router.get("/me", protect, getMe);

module.exports = router;
