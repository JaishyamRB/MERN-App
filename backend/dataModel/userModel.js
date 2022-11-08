const mongoose = require("mongoose")

const userScheme = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter User Name"]
    },
    email: {
        type: String,
        required: [true, "Enter User Email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Enter Password"]
    }
},{
    timestamps: true
})

module.exports = mongoose.model("User",userScheme)