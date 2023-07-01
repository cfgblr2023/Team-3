const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://dbashi:ashi@cluster0.hpdyxki.mongodb.net/natours?retryWrites=true&w=majority")
        console.log(`MongoDB connected ${conn.connection.host}`)
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

module.exports = connectDB