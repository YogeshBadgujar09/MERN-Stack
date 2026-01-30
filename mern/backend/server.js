const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/mern-demo") 
 .then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


// User Schema
const UserSchema = new mongoose.Schema({
        fullName: String,
        mobile: String,
        email: String,
        password: String,
        address: String,
        state: String,
        district: String,
});


const User = mongoose.model("User", UserSchema);


// Register API
app.post("/api/register", async (req, res) => {
    try {
            const user = new User(req.body);
            await user.save();
            res.json({ message: "Registration successful" });
    } catch (err) {
            res.status(500).json({ message: "Error saving data" });
    }
});

// Login API
app.post("/api/login", async (req, res) => {

        const { email, password } = req.body;           

        try {
                const user = await User.findOne({ email, password });
                
                if (!user) {
                        return res.status(401).json({ message: "Invalid email or password" });
                }
                
                res.json({ message: "Login successful", user });

        } catch (err) {
                res.status(500).json({ message: "Server error" });
        }
});

app.listen(5000, () => console.log("Server running on port 5000"));