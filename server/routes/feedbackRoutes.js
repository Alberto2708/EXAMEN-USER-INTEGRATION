const express = require('express');
const router = express.Router();
const feedbackControllers = require('../controllers/feedbackController');

router.get('/:id', feedbackControllers.getfeedbackbyID);
router.post('/:userId', feedbackControllers.createFeedback);

module.exports = router;