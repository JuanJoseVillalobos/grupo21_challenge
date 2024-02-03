const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api');

router.get('/api/aspirantes', apiController.api);

module.exports = router;