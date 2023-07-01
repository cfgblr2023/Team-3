const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VolunteerSchema = new Schema({
    name:{type:String,required:true},
    mobile:{type:Number, required:true},
    email:{
        type:String, 
        required:false,
        unique: true, 
        lowercase: true, 
        validate : [validator.isEmail, 'Please enter a valid Email']
    },
    password : {
        type : String,
        required: [true, 'Password is required!'],
        minlength: [8, 'The password should be minimum of 8 characters!'],
        select : false
    },
    passwordConfirm : {
        type : String,
        required: [true, 'Confirm Password is required!'],
        minlength: [8, 'The password should be minimum of 8 characters!'],
        validate : {
            //This only works when the user is created 
            validator : function(el){
                return el === this.password;
            },
            message : 'Passwords are not same!'
        }
    },
    passwordChangedAt : {
        type : Date,
        required : true,
        default : new Date()
    },
    resetPasswordToken : String,
    resetPasswordTokenExpiresIn : Date 
});

const Volunteer = new mongoose.model('Volunteer', VolunteerSchema);
module.export = Volunteer;


