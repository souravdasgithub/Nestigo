const express = require("express");
const router = express.Router({mergeParams : true});  // id is coming from parent route (app.js) . for using id here (review.js , which is a child route), we have to use merge params.  

const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const { validateReview , isLoggedIn , isReviewAuthor } = require("../middleware.js");


const reviewController = require("../controllers/review.js");

//Review
//POST route
router.post("/", isLoggedIn,validateReview, wrapAsync(reviewController.createReview));

//Review
//Delete route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router; 