const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');//for encrypting the password
const crypto = require('crypto');

const VolunteerSchema = new Schema({
    name:{type:String,required:true},
    mobile:{type:Number, required:true},
    email:{
        type:String, 
        required:false,
        unique: true, 
        lowercase: true
    },
    password : {
        type : String,
        required: [true, 'Password is required!'],
        minlength: [8, 'The password should be minimum of 8 characters!']
    },
    interest:{
        type:String,
        required:true
    },
    gender:{
        type: String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    occupation : {
        type:String,
        required:true        
    },
    role : {
        type : String,
        default : "volunteer"
    }
});

//Method on userSchema 

VolunteerSchema.methods.isPasswordCorrect = async function(candidatePassword, userPassword){
    return await bcrypt.compare(candidatePassword, userPassword);
}

const Volunteer = new mongoose.model('Volunteer', VolunteerSchema);
module.exports = Volunteer;


