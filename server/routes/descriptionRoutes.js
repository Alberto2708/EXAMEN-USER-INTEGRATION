const express = require('express');
const router = express.Router();
const descriptionControllers = require('../controllers/descriptionController');

router.get('/:id', descriptionControllers.getDescriptionbyID);
router.post('/:userId', descriptionControllers.createDescription);

module.exports = router;