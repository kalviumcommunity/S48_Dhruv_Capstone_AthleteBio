// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectToDB = require("./db/connection.js"); // Use relative path
const Driver = require("./models/driverSchema.js");
const bcrypt = require("bcrypt");
const User = require("./models/userSchema.js");


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


// POST API to register a new user
app.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already in use" });
        }

        // Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        res.status(500).json({ error: "Failed to register user" });
    }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
