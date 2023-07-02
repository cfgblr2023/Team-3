const asyncHandler = require('express-async-handler')
const jwt = require("jsonwebtoken")
const Volunteer = require('../models/Volunteer')

const loginUser = asyncHandler (async (req,res) =>{
    const {email, password} = req.body
    if( !email || !password){
        res.status(400)
        throw new Error("Details not entered")
    }
    const user = await Volunteer.findOne({email})
    if(!user){
        res.status(401)
        throw new Error("User does not exist")
    }
    else{
        if(password===user.password){
            res.status(201).json({
                _id:user.id,
                email:user.email,
                password:user.password,
                role:user.role
            })
        }
        else{
            res.status(401)
            throw new Error("Incorrect password")
        }
    }
})

module.exports = {loginUser}