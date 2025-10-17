const User = require("../models/user.js");

module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
};

module.exports.renderLoginupForm = (req, res) => {
    res.render("users/login.ejs");
};

module.exports.login = async (req, res) => {
    req.flash("success", "Welcome to Nestigo");
    const redirectUrl = req.session.redirectUrl || "/listings";
    delete req.session.redirectUrl;
    res.redirect(redirectUrl);
};

module.exports.singup = async (req, res) => {
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

};

module.exports.logout = (req, res, next)=>{
    req.logout((err)=>{
        if(err){
           return next(err);
        }
        req.flash("success" ,"You logged out successfully!");
        res.redirect("/listings");
    });
};