const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const mongoUrl = "mongodb://127.0.0.1:27017/nestigo";

main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main(params) {
    await mongoose.connect(mongoUrl);
};

const initDB = async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner : "68e9dad6a55f77f5540e9646",}));
    await Listing.insertMany(initData.data);
    console.log("Data initialized");
};

initDB();