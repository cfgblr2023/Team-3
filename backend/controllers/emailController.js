const mongoose = require('mongoose')
const sendEmail = require('../config/email');

const emailController = (req,res) => {
    const {email, subject, text} = req.body
    if(!email || !subject || !text)
        res.json("Error: Enter all details")
    else{
        sendEmail({email:email,subject:subject,text:text})
        res.json({"msg":"Email sent successfully"})
    }
}

module.exports = emailController;