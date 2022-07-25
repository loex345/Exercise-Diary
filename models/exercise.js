const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
     name:{
      type:String,
     },
     reps:{
      type:Number,
      min:1
     },
     rpe:{
       type:Number,
       min:1,
       max:10 
     },
     resistance:{
        type:Number,
     },
     user:{type: Schema.Types.ObjectId, ref: 'User'},

});

module.exports = mongoose.model('Exercise', exerciseSchema)