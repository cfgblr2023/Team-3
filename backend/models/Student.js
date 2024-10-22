const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const StudentSchema = new Schema({
    name:{type:String,required:true},
    mobile:{type:Number, required:true},
    email:{
        type:String, 
        required:false,
        unique: true, 
        lowercase: true, 
    },
    password : {
        type : String,
        required: [true, 'Password is required!'],
        minlength: [8, 'The password should be minimum of 8 characters!'],
    },
    role : {
        type : String,
        default : "student"
    },
    gender:{
        type: String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    education:{
        type:String,
        required:true
    },
    interest:{
        type:String,
        required:true
    },
    occupation:{
        type:String,
        required:true
    }
});


StudentSchema.methods.isPasswordCorrect = async function(candidatePassword, userPassword){
    return await bcrypt.compare(candidatePassword, userPassword);
}

module.exports = mongoose.model('Student', StudentSchema);