// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectToDB = require("./db/connection.js"); // Use relative path
const Driver = require("./models/driverSchema.js");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running...");
});

// Connect to MongoDB
connectToDB();


// GET API to fetch all drivers
app.get("/drivers", async (req, res) => {
    try {
        const drivers = await Driver.find(); // Fetch all drivers from DB
        res.status(200).json(drivers);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch drivers" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
