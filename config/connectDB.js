//require mongoose
const mongoose = require('mongoose');


//Require Dotenv
require('dotenv').config({path: "./config/.env"})

const connectDB = async () =>{
    try {
       await mongoose.connect(process.env.MONGO_URI);
         console.log('MongoDB connected')
    } catch (error) {
        console.log('error while connecting Database');
        
    }
};
module.exports = connectDB;