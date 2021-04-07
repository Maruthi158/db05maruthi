const mongoose = require("mongoose")
const compartmentSchema = mongoose.Schema({
    compartment_name: String,
    compartment_ID: Number,
    compartment_type: String
});

module.exports = mongoose.model("Compartment", compartmentSchema)

