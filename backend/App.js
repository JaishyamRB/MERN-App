const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000

const app = express()

// overwrite default middleware
const {errorHandler} = require('./middleware/errorHandler')
app.use(errorHandler)

// setting up dependabilities
app.use(express.json())
app.use(express.urlencoded({extended:false}))


// setting up routes
app.use("/api/goal",require("../backend/routes/goalRoutes"))

app.listen(port, () => console.log(`Server listening on ${port}`))
