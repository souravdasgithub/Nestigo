import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT;
// const port = 3000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");
const Review = require("./models/review.js");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

//require listing route from routes/listing.js
const listingsRouter = require("./routes/listing.js");

//require review route from routes/review.js
const reviewsRouter = require("./routes/review.js");

//require user route from routes/review.js
const userRouter = require("./routes/user.js");

const mongoUrl = process.env.MONGODB_URL;
// const mongoUrl = "mongodb://127.0.0.1:27017/nestigo";

main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(mongoUrl);
}

// View engine and middleware setup
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "init", "public")));

app.use(cookieParser("secretcode"));

const sessionOptions = {
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//middleware for flash
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

app.get("/demouser", async (req, res) => {
    let fakeUser = new User({
        email: "demo@gmail.com",
        username: "demouser",
    });

    let registeredUser = await User.register(fakeUser, "mypassword");
    res.send(registeredUser);
});

app.get("/", (req, res) => {
    console.dir(req.cookies);
    res.send("Root is working");
});

app.get("/greet", (req, res) => {
    let { name = "anonymous" } = req.cookies;
    res.send(`Hi, ${name}`);
})

app.get("/getcookies", (req, res) => {
    res.cookie("greet", "hello");
    res.send("Sent some cookies!");
});

app.get("/getsignedcookie", (req, res) => {
    res.cookie("made in ", "India", { signed: true });
    res.send("Signed cookie sent");
})

app.get("/verify", (req, res) => {
    console.log(req.signedCookies);
    res.send("verified");
});

//use listing schema which defines in routes/listing.js
app.use("/listings", listingsRouter);

//use review schema which defines in routes/review.js
app.use("/listings/:id/reviews", reviewsRouter);

app.use("/" , userRouter);

// 404 handler
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found!"));
});

// Error handler
app.use((err, req, res, next) => {
    const { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).render("listings/error.ejs", { message });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
