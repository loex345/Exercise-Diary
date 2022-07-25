const express = require('express');
const router = express.Router();
const exercisesCtrl = require('../controllers/exercises');

//to see all exercises
router.get('/', exercisesCtrl.index);
// to  form for new exercises
router.get('/new', exercisesCtrl.new);
// to create new exercises
router.post('/', exercisesCtrl.create)
module.exports = router;