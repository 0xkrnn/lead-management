const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const leadSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: () => "approched"
    },
    date_of_creation: {
        type: Date,
        default: () => Date.now()
    },
    organization: {
        type: String,
        required: true
    },
},
    {
        collection: "leads"
    }
);

module.exports = mongoose.model("users", leadSchema)