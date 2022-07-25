const express = require('express');
const router = express.Router();
const exercisesCtrl = require('../controllers/exercises');

//to see all exercises
router.get('/', exercisesCtrl.index);
// show route
router.get('/new', exercisesCtrl.new);
// to create new exercises
router.get('/:id', exercisesCtrl.show);
// to  form for new exercises
router.post('/', exercisesCtrl.create);
// to show details

module.exports = router;