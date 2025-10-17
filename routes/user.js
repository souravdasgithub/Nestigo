const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/user.js");
const user = require("../models/user.js");

//signup route
router.route("/signup")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.singup));

//login route
router.route("/login")
.get(userController.renderLoginupForm)
.post(saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), 
userController.login,
);

//logout route
router.get("/logout" , userController.logout);

module.exports = router;