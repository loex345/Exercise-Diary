const express = require('express');
const router = express.Router();
const commentsCtrl= require('../controllers/comments');

// comments

//post for execrise review
router.post('/exercises/:id/comments', commentsCtrl.create);
// Delete /reviews/:id
router.delete('/comments/:id', commentsCtrl.delete)

module.exports = router;