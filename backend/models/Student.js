const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name:{type:String,required:true},
    mobile:{type:Number, required:true},
    email:{type:String, required:false},
});

const Student = mongoose.model('Student', StudentSchema);
module.export = Student;


