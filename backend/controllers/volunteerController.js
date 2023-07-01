const Volunteer = require('../models/Volunteer');

const addVolunteer= async(req,res)=>{
    const {name,mobile,email,password,interest,gender,age,occupation,role} = req.body;
    const newVolunteer = new Volunteer({name,mobile,email,password,interest,gender,age,occupation,role});
    
    try{
        await newVolunteer.save();
        return res.status(201).json(newVolunteer);
    }
    catch(error){
        return res.status(404).json({message:error.message});
    }
};

const getVolunteers = async(req,res)=>{
    const Volunteers = await Volunteer.find({});
    res.send(Volunteers);
};

const updateVolunteer = function (req, res) {
    Volunteer.findByIdAndUpdate(req.body.id, {$set:req.body}, function(err, result){
        if(err){
            res.status(404).json({message:err});
        }
        
    });
    res.status(201).json({message:"Success"});
}

module.exports = {addVolunteer,getVolunteers,updateVolunteer};