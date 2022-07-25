const Exercise = require('../models/exercise');

module.exports = {
    index,
    show,
    create,
    new: newExercise
};

function index(req, res) {
    //find all exercises
    Exercise.find({}, function (err, exercises) {
        res.render('exercises/index', { title: 'All Exercises', exercises })
    });
}

function show(req, res){
    Exercise.findById(req.params.id, function(err, exercise){
     res.render('exercises/show', {title:'Exercise', exercise})
    });
}

function create(req, res) {
    let exercise = new Exercise(req.body);
    console.log(exercise);
    exercise.save(function (err) {
        if (err) return res.redirect('/exercises/new');
        res.redirect(`/exercises/${exercise._id}`);
    });
}

function newExercise(req, res) {
    res.render('exercises/new', { title: 'Add New Workout' });
}