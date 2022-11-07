const errorHandler = (err,req,res,next) => {
    statusCode = err.statusCode ? err.statusCode:500
    res.status(statusCode).json({
        "message": err.message,
        "stack": process.env.NODE_ENV === "development" ? err.stack: null
    })
}

module.exports = {errorHandler}