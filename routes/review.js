const express = require("express");
const router = express.Router({mergeParams : true});  // id is coming from parent route (app.js) . for using id here (review.js , which is a child route), we have to use merge params.  

const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const { validateReview , isLoggedIn , isReviewAuthor } = require("../middleware.js");


//Review
//POST route
router.post("/", isLoggedIn,validateReview, wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    
    newReview.author = req.user._id; 
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    req.flash("success" , "New review created!");

    res.redirect(`/listings/${listing._id}`);
}));

//Review
//Delete route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(async (req, res) => {
    let {id,reviewId} = req.params;

    await Listing.findByIdAndUpdate(id , {$pull: {reviews : reviewId}});
    await Review.findByIdAndDelete(reviewId); 

    req.flash("success" , "Review deleted!");

    res.redirect(`/listings/${id}`);
}));

module.exports = router; 