const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const geminiController = require('../controllers/geminiController');
const ragControllers = require('../controllers/ragControllers');


router.post('/context', ragControllers.getContextResponse);
router.post('/', chatController.getResponseChat);
router.post('/gemini', geminiController.getResponseChatGemini);


module.exports = router;