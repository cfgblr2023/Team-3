const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');//for encrypting the password
const crypto = require('crypto');

const AdminSchema = new Schema({
    name:{type:String,required:true},
    mobile:{type:Number, required:true},
    password : {
        type : String,
        required: [true, 'Password is required!'],
        minlength: [8, 'The password should be minimum of 8 characters!'],
        select : false
    },
    role : {
        type : String,
        default : "student"
    }
});

userSchema.pre('save', async function(next){
    //Checking if password is updated
    if(!(this.isModified('password')))
       return next();
    //Encrypting the password
    this.password = await bcrypt.hash(this.password, 14);

    this.passwordConfirm = undefined; 
    if(!this.isNew)
       this.passwordChangedAt = Date.now() - 1000;
    next();
})

const Admin = new mongoose.model('Admin', AdminSchema);
module.export = Admin;