const express = require('express');
const {addVolunteer,getVolunteers,updateVolunteer,getVolunteer} = require('../controllers/volunteerController');
const {loginUser} = require('../controllers/authMentor')
const router = express.Router();

router.post('/',addVolunteer);
router.get('/',getVolunteers);
router.get('/:id',getVolunteer);
router.put('/update/:id',updateVolunteer);

router.post('/login', loginUser);

module.exports = router;