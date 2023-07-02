const Funder = require('../models/Funder');

const addFunder= async(req,res)=>{
    const {name,mobile,email,amount} = req.body;
    const newFunder = new Funder({name,mobile:parseInt(mobile),email,amount:parseInt(amount)});
    
    try{
        await newFunder.save();
        return res.status(201).json(newFunder);
    }
    catch(error){
        return res.status(404).json({message:error.message});
    }
};

const getFunders = async(req,res)=>{
    const Funders = await Funder.find({});
    res.send(Funders);
};

module.exports = {addFunder,getFunders};