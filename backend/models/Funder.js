const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FunderSchema = new Schema({
    name:{type:String,required:true},
    mobile:{type:Number, required:true},
    email:{type:String, required:true},
});

const Funder = mongoose.model('Funder', FunderSchema);
module.export = Funder;

