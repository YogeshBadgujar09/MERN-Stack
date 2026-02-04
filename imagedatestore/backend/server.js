const express = require('express');
const mongoose = require ('mongoose');
const cors = require("cors");

const imageRoutes = require('./routes/imageRoutes');

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/imagedatestore')
.then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});

//image storage route
app.use('/api/images', imageRoutes);

app.use("/uploads", express.static("uploads"));

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});