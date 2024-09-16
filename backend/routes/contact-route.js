const express = require('express');
const ContactRoutes = express.Router();
const Contact = require('../models/Contact');

// POST request to register for a job  
ContactRoutes.post('/register-contact', async (req, res) => {
    console.log('POST /register-contact received');
    try {
        const { fname, lname, email, phone, message } = req.body;

        const newUser = await Contact.create({
            fname,
            lname,
            email,
            phone,
            message
        });

        return res.status(201).json({
            text: "OK",
            id: newUser._id.toString(),
            fname: newUser.fname,
            lname: newUser.lname,
            email: newUser.email,
            phone: newUser.phone,
            message: newUser.message
        });

    } catch (error) {
        console.log('Error:', error);
        if (error.code === 11000) {
            return res.status(400).json({
                message: "This email or phone number is already registered.",
                cause: "Duplicate Key Error"
            });
        }
        return res.status(500).json({
            message: "ERROR",
            cause: error.message
        });
    }
});


module.exports = ContactRoutes;