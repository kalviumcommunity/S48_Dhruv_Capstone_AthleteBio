// driverSchema.js
const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
    name: { type: String, required: true },
    team: { type: String, required: true }
});

const Driver = mongoose.model("athletebio", driverSchema);

module.exports = Driver;
