const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json());    

mongoose.connect('mongodb://localhost:27017/employeeDB')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Could not connect to MongoDB', err);
    });

    app.use('/employees', require('./routes/EmployeeRoutes'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});