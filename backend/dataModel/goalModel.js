const mongoose = require("mongoose")

const goalSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, //id of the user
        required: true,
        ref: "User" //Name of referred datamodel
    },
    text: {
        type: String,
        required: [true,"Enter a Goal"]
    }
},{
    timestamps: true
})

module.exports = mongoose.model("Goal",goalSchema)