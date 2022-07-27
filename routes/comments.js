const express = require('express');
const router = express.Router();
const commentsCtrl= require('../controllers/comments');

// comments

//post for execrise review
router.post('/comments/:id/edit', commentsCtrl.create)