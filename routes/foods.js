const express = require('express');
const router = express.Router();
const foodsCtrl = require('../controllers/foods');
//to get all foods information
router.get('/', foodsCtrl.index);
//to get new form
router.get('/new', foodsCtrl.new);
// to show new food
module.exports = router;