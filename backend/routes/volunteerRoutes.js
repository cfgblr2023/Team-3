const express = require('express');
const {addVolunteer,getVolunteers,updateVolunteer} = require('../controllers/volunteerController');

const router = express.Router();

router.post('/',addVolunteer);
router.get('/',getVolunteers);
router.put('/update/:id',updateVolunteer);

module.exports = router;