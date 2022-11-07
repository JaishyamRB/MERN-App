const mongoose = require("mongoose")

const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true,"Enter a Goal"]
    }
},{
    timestamps: true
})

module.exports = mongoose.model("Goal",goalSchema)