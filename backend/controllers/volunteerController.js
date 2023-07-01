const Volunteer = require('../models/Volunteer');

export const addVolunteer = async(req,res)=>{
    const {name,mobile,email} = req.body;
    const newVolunteer = new Volunteer({name,mobile,email});

    try{
        await newVolunteer.save();
        return res.status(201).json(newVolunteer);
    }
    catch(error){
        return res.status(404).json({message:error.message});
    }

};

// export const getVolunteer= async(req,res)=>{
//     const {id} = req.params;

//     try {
//         const Volunteer = await Volunteer.findById(id);        
//         res.status(200).json(Volunteer);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// };