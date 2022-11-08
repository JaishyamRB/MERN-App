const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000

// connect to database
const {connectDB} = require('./config/db')

connectDB()

// server
const app = express()

// setting up dependabilities
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// setting up routes and middlewares
const {errorHandler} = require('./middleware/errorMiddleware')

const goalRoutes = require("./routes/goalRoutes")
const userRoutes = require("./routes/userRoutes")

app.use("/api/goals",goalRoutes)
app.use("/api/users",userRoutes)

app.use(errorHandler)


app.listen(port, () => console.log(`Server listening on ${port}`))
