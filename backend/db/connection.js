const mongoose = require('mongoose');
require("dotenv").config();

async function connectToDB(){
    try {
        await mongoose.connect(process.env.MONGO_DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB database");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1); // Exit the process on failure
    }
}

module.exports = connectToDB;
