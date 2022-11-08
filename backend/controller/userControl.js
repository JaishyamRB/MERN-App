const asyncHandler = require("express-async-handler")
const User = require("../dataModel/userModel")

// @desc
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req,res) =>{
    res.json({message:"Register user"})
})

// @desc
// @route GET /api/users/profile
// @access Private
const getUser = asyncHandler(async (req,res) =>{
    res.json({message:"GET user"})
})

// @desc
// @route POST(because creating token) /api/users/login
// @access Private
const loginUser = asyncHandler(async (req,res) =>{
    res.json({message:"login user"})
})

module.exports = {registerUser,getUser,loginUser}

