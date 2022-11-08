const express = require('express')
const router = express.Router()
const {postGoal,getGoal,putGoal,delGoal} = require("../controller/goalControl")
const {protect} = require("../middleware/authMiddleware") // middleware

// CRUD for goals
router.post("/",protect,postGoal)

router.get("/",protect,getGoal)

router.put("/:id",protect,putGoal)

router.delete("/:id",protect,delGoal)

module.exports = router