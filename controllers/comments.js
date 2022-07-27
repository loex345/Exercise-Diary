const Exercise = require('../models/exercise');

module.exports = {
  create,
  delete:deleteComment
};

function create (req, res) {
    Exercise.findById(req.params.id, function(err,exercise){
      req.body.userId = req.user._id;
      req.body.userName = req.user.name;
      req.body.userAvatar = req.user.avatar;
      console.log(exercise);
      exercise.comments.push(req.body);
      exercise.save(function(err){
        console.log(err);
        res.redirect(`/exercises/${exercise._id}`);
      })
    })
}

function deleteComment(req, res) {
  Exercise.findOne({'comments._id': req.params.id, 'comments.userId': req.user._id},
  function(err, exercise) {
    if (!exercise || err ) return res.redirect(`/exercises/${exercise._id}`);
    exercise.comment.remove(req.params.id);
    exercise.save(function(err){
         res.redirect(`/exercises/${exercise._id}`);
      });
    }
  )
}