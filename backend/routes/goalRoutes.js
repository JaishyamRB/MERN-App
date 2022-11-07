const express = require('express')
const router = express.Router()
const {postGoal,getGoal,putGoal,delGoal} = require("../controller/goalControl")

// CRUD for goals
router.post("/",postGoal)

router.get("/",getGoal)

router.put("/:id",putGoal)

router.delete("/:id",delGoal)

module.exports = router