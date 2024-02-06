const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api');

router.get('/api/aspirantes', apiController.aspirants);
router.get('/api/profesiones', apiController.profesion);

module.exports = router;