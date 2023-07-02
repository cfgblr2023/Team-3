const express = require('express');
const {addStudent,getStudents, getStudent} = require('../controllers/studentController');

const router = express.Router();

router.post('/',addStudent);
router.get('/',getStudents);
router.get('/:id',getStudent);

module.exports = router;