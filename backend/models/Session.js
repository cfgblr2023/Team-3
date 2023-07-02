const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Volunteer = require('./Volunteer')

const SessionSchema = new Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    date:{type:String,required:true},
    duration:{type:String,required:true},
    tag:{type:String,required:true},
    link:{type:String,required:true}
});

const Session = mongoose.model('Session', SessionSchema);
module.export = Session;


