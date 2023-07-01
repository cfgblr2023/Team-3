const Student = require('../models/Student');

const addStudent= async(req,res)=>{
    const {name,mobile,email,password,role,gender,age,education,interest,occupation} = req.body;
    const newStudent = new Student({name,mobile,email,password,role,gender,age,education,interest,occupation});
    
    try{
        await newStudent.save();
        return res.status(201).json(newStudent);
    }
    catch(error){
        return res.status(404).json({message:error.message});
    }
};

const getStudents = async(req,res)=>{
    const Students = await Student.find({});
    res.send(Students);
};

module.exports = {addStudent,getStudents};