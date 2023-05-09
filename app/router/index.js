const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController');

router.get('/', appController.homePage);


module.exports = router;