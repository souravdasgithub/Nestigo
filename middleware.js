const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");


module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        // save requested url and redirect to login
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be signed in");
        return res.redirect("/login"); // RETURN to avoid calling next()
    }
    return next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
    // only set if not already set and referer is valid (so clicking Login from any page returns)
    const referer = req.get("Referer");
    if (!req.session.redirectUrl && referer && !referer.includes("/login") && !referer.includes("/signup")) {
        req.session.redirectUrl = referer.replace(/^.*\/\/[^\/]+/, '');
    }
    return next();
};

// Owner validation
module.exports.isOwner = async (req, res, next) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing not found.");
        return res.redirect("/listings");
    }
    const ownerId = listing.owner && listing.owner._id ? listing.owner._id : listing.owner;
    if (!ownerId || !ownerId.equals(res.locals.currUser._id)) {
        req.flash("error", "You don't have permission to do that.");
        return res.redirect(`/listings/${id}`);
    }
    return next();
};

// Listing validation
module.exports.validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(", ");
        // Throw so the centralized error handler handles the response (prevents double-send)
        throw new ExpressError(msg, 400);
    }
    return next();
};

// Review validation
module.exports.validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(", ");
        throw new ExpressError(msg, 400);
    }
    return next();
};

// Review Owner validation
module.exports.isReviewAuthor = async (req, res, next) => {
    const { id, reviewId } = req.params;
    const review = await Review.findById(reviewId);
    if (!review) {
        req.flash("error", "Review not found.");
        return res.redirect(`/listings/${id}`);
    }
    const authorId = review.author && review.author._id ? review.author._id : review.author;
    if (!authorId || !authorId.equals(res.locals.currUser._id)) {
        req.flash("error", "You don't have permission to do that.");
        return res.redirect(`/listings/${id}`);
    }
    return next();
};
