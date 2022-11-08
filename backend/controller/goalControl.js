const asyncHandler = require("express-async-handler")
const Goal = require("../dataModel/goalModel") // Goal Model

// @desc
// @route POST /api/goal/
// @access Private
const postGoal = asyncHandler(async (req,res) => {
    // if no input is given
    if (!req.body.text){
        res.status(400)
        throw new Error("Please enter text")
    }
    // create
    const goal = await Goal.create({
        text:req.body.text
    })
    res.status(200).json({goal})

})

// @desc  
// @route GET /api/goal
// @access Private
const getGoal = asyncHandler(async (req,res) => {
    // Read
    const goals = await Goal.find()

    res.status(200).json({goals})
        
})

// @desc
// @route  PUT /api/goal/:id
// @access Private
const putGoal = asyncHandler(async (req,res) => {
    // check for data with id
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error("Entry not found")
    }

    // Update
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true})
    
    res.status(200).json({updatedGoal})
})

// @desc
// @route DELETE /api/goal/:id
// @access Private
const delGoal = asyncHandler(async (req,res) => { 
    // check for data with id
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error("Entry not found")
    }

    // Delete
    goal.remove()

    res.status(200).json({id: req.params.id})
    
})

module.exports = {postGoal,getGoal,putGoal,delGoal}