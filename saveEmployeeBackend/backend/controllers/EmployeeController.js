const EmployeeModel = require('../models/EmployeeModel');

exports.addEmployee = async (req, res) => { 
    try {
        const employee = new EmployeeModel(req.body);
        await employee.save();
        res.status(201).send('Employee added successfully');
    } catch (error) {
        res.status(500).send('Error adding employee: ' + error.message);
    }     
};