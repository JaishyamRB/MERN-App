const jwt = require('jsonwebtoken')
const User = require("../dataModel/userModel")
const asyncHandler = require('express-async-handler')

const protect = asyncHandler(async (req,res,next) =>{
    let token 
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try {
            token = req.headers.authorization.split(" ")[1]
            // verify token and add to req
            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).select("-password") // removeing the password for security
            next()
        } catch (err) {
            res.status(400)
            throw new Error("Not Authorized")
        }
        
    }
    if (!token){
        res.status(400)
        throw new Error("No Token")
    }
})

module.exports = {protect}