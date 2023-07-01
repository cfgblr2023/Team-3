const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VolunteerSchema = new Schema({
    name:{type:String,required:true},
    mobile:{type:Number, required:true},
    email:{type:String, required:true},
});

const Volunteer = mongoose.model('Volunteer', VolunteerSchema);
module.export = Volunteer;


