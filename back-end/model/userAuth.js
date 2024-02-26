const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authSchema = Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true }
    },
    {
        collection: "auth"
    }
);

module.exports =  mongoose.model("auth",authSchema);