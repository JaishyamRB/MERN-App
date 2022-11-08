const express = require('express')
const router = express.Router()
const {registerUser,getUser,loginUser} = require("../controller/userControl")
const {protect} = require("../middleware/authMiddleware") // middleware

router.post("/",registerUser)

router.get("/profile",protect,getUser)

router.post("/login",loginUser)

module.exports = router