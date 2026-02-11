const express = require('express');
const nodemailer = require('nodemailer');
const generateOTP = require('./util/generateOTP');
const app = express();
app.use(express.json());

let generatedOTP;

const transporter = nodemailer.createTransport({
    
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    service: 'gmail',

    auth: { 
        user: 'elitesaloon18@gmail.com',
        pass: 'ptjiscumbuicusbi'
    }
});

app.post('/', async (req, res) => {

    console.log(req.body);
    const { customerEmail } = req.body;
    console.log(customerEmail);

    generatedOTP = generateOTP();
    console.log(generatedOTP);

    const send = await transporter.sendMail({
        from: 'EliteSaloon <elitesaloon18@gmail.com>',
        to: customerEmail,
        subject: 'Welcome to Elite Saloon!',
        text: `Thank you for joining Elite Saloon. Your OTP is ${generatedOTP}. Please use this code to verify your account.`
    });

    if (send) {
        console.log('Email sent successfully!');
        res.status(200).json({ message: 'Email sent successfully!' });
    } else {
        console.error('Failed to send email.');
        res.status(500).json({ message: 'Failed to send email.' });
    }

});

app.post('/verify', (req, res) => {
    
    

    const { enterOTP} = req.body;
    
    console.log("print generated OTP Before Compare" + generatedOTP );
    console.log("Printed entered OTP Before Compare: " + enterOTP);

    if (enterOTP == generatedOTP) {
        console.log('OTP verified successfully!');
        res.status(200).json({ message: 'OTP verified successfully!' });
    } else {
        console.error('Invalid OTP.');
        res.status(400).json({ message: 'Invalid OTP.' });
    }
});

app.listen(3000, () => {    
    console.log('Server is running on port 3000');
});