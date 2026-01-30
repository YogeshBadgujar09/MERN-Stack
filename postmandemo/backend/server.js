const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/postmandemo")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

const userSchema = new mongoose.Schema({

    name : String,
    email : String,
    age : Number,
    password : String
});

const User = mongoose.model("User", userSchema);

app.post("/api/users", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.json({message : "Data enter successfully"}, user);
    } catch (err) {
        res.status(400).send(err);
    }           
}); 

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});