const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Volunteer = require('./Volunteer')

const SessionSchema = new Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    date:{type:Date,required:true},
    duration:{type:Number,required:true},
    tag:{type:String,required:true},
    link:{type:String,required:true}
});

const Session = mongoose.model('Session', SessionSchema);
module.export = Session;


