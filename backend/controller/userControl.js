const asyncHandler = require("express-async-handler")
const bcrypt = require('bcryptjs')
const User = require("../dataModel/userModel")
const { use } = require("../routes/goalRoutes")

// @desc
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req,res) =>{
    const {name,email,password} = req.body
    // checking if all fields are present
    if (!name || !email || !password){
        res.status(400)
        throw new Error("All fields needed to register user")
    }
    // check if user already exist
    const userExist = await User.findOne({email:email}) // {email:email} === {email}
    if (userExist){
        res.status(400)
        throw new Error("Email already exists")
    }
    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashpassword = await bcrypt.hash(password,salt)
    // create user
    const user = await User.create({
        name,
        email,
        password: hashpassword
    })
    
    if(user){
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            password: password,
            hashpassword: user.password
        })
    }else{
        res.status(400)
        throw new Error("Invalid User Data")
    }

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
    // get the user
    const {email,password} = req.body
    // checking if all fields are present
    console.log(!email || !password);
    console.log(email,password);
    if(!email || !password){
        res.status(400)
        throw new Error("Enter email and password")
    }
    const user = await User.findOne({email})
    // verify password
    if (user && (await bcrypt.compare(password,user.password))){
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            password: password,
            hashpassword: user.password
        })
    }else{
        res.status(400)
        throw new Error("Invalid Credentials")
    }
})

module.exports = {registerUser,getUser,loginUser}

