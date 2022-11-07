const mongoose = require('mongoose')

const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB_URI)
        console.log(`Database Connected at host: ${conn.connection.host}`);
    } catch (err) {
        console.log(err);
    }

}

module.exports = {connectDB}