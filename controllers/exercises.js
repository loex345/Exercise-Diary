const Exercise = require('../models/exercise');

module.exports ={
    index,
    create,
    new:newExercise
};

function index (req, res) {
    //find all exercises
 Exercise.find({}, function(err, exercises){
  res.render('exercises/index', {title:'All Execrises', exercises})
 });
}



function newExercise (req, res){
 res.render('exercises/new', {title:'Add New Workout'});
}


function create (req, res) {
}