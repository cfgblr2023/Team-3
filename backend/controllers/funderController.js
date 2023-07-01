const Funder = require('../models/Funder');

export const addFunder = async(req,res)=>{
    const {name,mobile,email} = req.body;
    const newFunder = new Funder({name,mobile,email});

    try{
        await newFunder.save();
        return res.status(201).json(newFunder);
    }
    catch(error){
        return res.status(404).json({message:error.message});
    }

};

export const getFunders = async(req,res)=>{
    const Funders = await Funder.find({});
    res.send(Funders);
};