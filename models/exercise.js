const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//comments on workouts
const commentSchema = new Schema({
  content: {
    type: String,
  },
  duration: {
    type: Number,
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  userName: String,
  userAvatar: String
});

const exerciseSchema = new Schema({
  name: {
    type: String,
  },
  createdby:{
    type:String,
  },
  date: {
    type: Date,
    default: function () {
      return new Date()
    },
  },
  reps: {
    type: Number,
    min: 1
  },
  rpe: {
    type: Number,
    min: 1,
    max: 10
  },
  resistance: {
    type: Number,
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  userName: String,
  userAvatar: String,
  comments: [commentSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Exercise', exerciseSchema)