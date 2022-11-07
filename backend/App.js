const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000

// connect to database
const {connectDB} = require('./config/db')
connectDB()

const app = express()

// setting up dependabilities
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// setting up routes
const goalRoutes = require("../backend/routes/goalRoutes")
app.use("/api/goal",goalRoutes)

// overwrite default middleware
const {errorHandler} = require('./middleware/errorMiddleware')
app.use(errorHandler)

app.listen(port, () => console.log(`Server listening on ${port}`))
