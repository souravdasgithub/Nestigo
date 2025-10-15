const { ref } = require('joi');
const mongoose = require('mongoose');
const review = require('./review');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    image: {
        type: String,
        // // default : "https://unsplash.com/photos/green-plants-on-brown-concrete-building-KLOW1bD616Y",
        // set : (v) => v === "" ? "https://unsplash.com/photos/green-plants-on-brown-concrete-building-KLOW1bD616Y" : v,
    },
    price: {
        type: Number,
    },
    location: {
        type: String
    },
    country: {
        type: String
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;