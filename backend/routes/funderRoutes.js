const express = require('express');

const { addFunder, getFunders} = require('../controllers/funderController');

const router = express.Router();

router.get('/', getFunders);
router.post('/',addFunder);

module.exports = router;