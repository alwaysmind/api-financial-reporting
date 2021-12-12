const express = require("express");
const router = express.Router();

const {
  login,
  logout,
} = require("../controllers/AuthController");

/**
 * @route POST api/v1/auth/login
 * @description login with google
 * @access public
 */
router.post("/login", login);

/**
 * @route POST api/v1/auth/logout
 * @description logout from the application
 * @access public
 */
router.post("/logout", logout);


module.exports = router;
