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

const getStudent = async(req,res)=>{
    const {id} = req.params;

    try {
        const student = await Student.findById(id);        
        res.status(200).json(student);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = {addStudent,getStudents,getStudent};