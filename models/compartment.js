const mongoose = require("mongoose")
const compartmentSchema = mongoose.Schema({
    compartment_name: String,
    compartment_ID: {
        type: Number,

        min:[1,"Minimum"],
        max:[12,"Maximum"]
    },
    compartment_type: {
        type: String,
        minimumLength: 5
    }
});

module.exports = mongoose.model("Compartment", compartmentSchema)

