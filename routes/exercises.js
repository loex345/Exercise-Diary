const express = require('express');
const router = express.Router();
const exercisesCtrl = require('../controllers/exercises');

//to see all exercises
router.get('/', exercisesCtrl.index);
// to create new exercises
router.get('/new', exercisesCtrl.new);

module.exports = router;