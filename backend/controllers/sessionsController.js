const Session = require('../models/Session');

const addSession = async(req,res)=>{
    const {name,description,date,duration,volunteeredId,tags,link} = req.body;
    const newSession = new Session({name,description,date,duration,volunteerId,tags,link});

    try{
        await newSession.save();
        return res.status(201).json(newSession);
    }
    catch(error){
        return res.status(404).json({message:error.message});
    }

};

const getSession= async(req,res)=>{
    const {id} = req.params;

    try {
        const session = await Session.findById(id);        
        res.status(200).json(session);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const getSessions = async(req,res)=>{
    const Sessions = await Session.find({});
    res.send(Sessions);
};

module.exports = {addSession,getSession,getSessions}