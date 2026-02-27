const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/owener')
    .then( () => {
        console.log("connect to MongoDB ... !!!");
    }).catch( err =>{
        console.error("Error to connect with DB ... !!!", err );
    });

app.use('/owner',require('./routes/ownerRoutes'));

app.listen(5000, () => {
    console.log("Server running on PORT 5000");
});