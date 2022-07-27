const express = require('express');
const router = express.Router();
const foodsCtrl = require('../controllers/foods');

//to get all foods information
router.get('/', foodsCtrl.index);
//to get new form
router.get('/new', foodsCtrl.new);
// show function
router.get('/:id', foodsCtrl.show);
// to create new food
router.post('/', foodsCtrl.create);
// to edit foods
router.get('/:id/edit', foodsCtrl.edit);
// to update foods
router.put('/:id', foodsCtrl.update);
//Delete function
router.delete('/:id', foodsCtrl.delete);
module.exports = router;