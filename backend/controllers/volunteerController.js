const Volunteer = require('../models/Volunteer');

const addVolunteer= async(req,res)=>{
    const {name,mobile,email,password,interest,gender,age,occupation} = req.body;
    const newVolunteer = new Volunteer({name,mobile:parseInt(mobile),email,password,interest,gender,age:parseInt(age),occupation});
    try{
        await newVolunteer.save()
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

const updateVolunteer = async function (req, res) {
    try {
        const updatedVolunteer = await Volunteer.findOneAndUpdate(req.body.id,  req.body , { new: true });
        res.status(201).json({ message: "Success", volunteer: updatedVolunteer });
    } catch (err) {
        res.status(404).json({ message: err });
    }
};

const getVolunteer = async(req,res)=>{
    const {id} = req.params;

    try {
        const newVolunteer = await Volunteer.findById(id);        
        res.status(200).json(newVolunteer);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = {addVolunteer,getVolunteers,updateVolunteer, getVolunteer};