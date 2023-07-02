const express = require("express")

const { addSession, getSession, getSessions} = require('../controllers/sessionsController');

const router = express.Router();

router.get('/:id', getSession);
router.post('/',addSession);
router.get('/all',getSessions);

module.exports = router;