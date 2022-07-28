const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const isLoggedIn = require('../config/auth');
// comments

//post for execrise review
router.post('/exercises/:id/comments', isLoggedIn, commentsCtrl.create);
// Delete /reviews/:id
router.delete('/comments/:id', isLoggedIn, commentsCtrl.delete)

module.exports = router;