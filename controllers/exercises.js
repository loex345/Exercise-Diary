
const Exercise = require('../models/exercise');

module.exports = {
    index,
    show,
    create,
    new: newExercise,
    edit,
    update,
    delete:deleteExercise
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
    exercise.user = req.user._id;
    exercise.save(function (err) {
        if (err) return res.redirect('/exercises/new');
        res.redirect(`/exercises/${exercise._id}`);
    });
}

function newExercise(req, res) {
    res.render('exercises/new', { title: 'Add New Workout' });
}

function edit(req, res) {
  Exercise.findOne({id: req.params.id, user:req.user.id}, function(err, exercise){
      res.render('exercises/edit', {title:'Update', exercise })
  });
}

function update(req, res){
  Exercise.findOneAndUpdate(
   {_id: req.params.id, user: req.user.id},
   req.body,
   {new:true},
   function(err, exercise){
    if (err || !exercise) return res.redirect('/exercises');
   res.redirect(`/exercises/${exercise._id}`);
   }
  );
}

function deleteExercise(req, res){
 Exercise.findOneAndDelete({_id:req.params.id, user: req.user.id}, function(err){
 res.redirect('/exercises');
 });
}