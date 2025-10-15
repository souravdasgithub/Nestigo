const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

//signup route
router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});

router.post("/signup", wrapAsync(async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser , (err)=>{
            if(err){
                return next(err);
            }
            req.flash("success", "Successfully Registered! Welcome to Nestigo");
        res.redirect("/listings");
        })
        
    } catch (error) {
        req.flash("error", error.message);
        res.redirect("./signup");
    }

}));


//login route
router.get("/login", (req, res) => {
    res.render("users/login.ejs");
});

router.post("/login", saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), async (req, res) => {
    req.flash("success", "Welcome to Nestigo");
    const redirectUrl = req.session.redirectUrl || "/listings";
    delete req.session.redirectUrl;
    res.redirect(redirectUrl);
});

//logout route
router.get("/logout" , (req, res, next)=>{
    req.logout((err)=>{
        if(err){
           return next(err);
        }
        req.flash("success" ,"You logged out successfully!");
        res.redirect("/listings");
    });
});

module.exports = router;