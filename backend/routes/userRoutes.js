const express = require('express')
const router = express.Router()
const {registerUser,getUser,loginUser} = require("../controller/userControl")

router.post("/",registerUser)

router.get("/profile",getUser)

router.post("/login",loginUser)

module.exports = router