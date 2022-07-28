const express = require('express');
const router = express.Router();
const exercisesCtrl = require('../controllers/exercises');
const isLoggedIn = require('../config/auth');

//to see all exercises
router.get('/', isLoggedIn, exercisesCtrl.index);
// show route
router.get('/new', exercisesCtrl.new);
// to  form for new exercises
router.get('/:id', exercisesCtrl.show);
// to create new exercises
router.post('/', exercisesCtrl.create);
// to edit exercises
router.get('/:id/edit', exercisesCtrl.edit);
// to update
router.put('/:id', exercisesCtrl.update);
//Delete function
router.delete('/:id', exercisesCtrl.delete);

module.exports = router;