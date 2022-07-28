const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodSchema = new Schema({
    foodName: {
        type: String,
    },
    date: {
        type: Date,
        default: function () {
            return new Date();
        },
    },
    mealNumber: {
        type: Number,
    },
    servings: {
        type: Number,
    },
    satiety: {
        type: Number,
    },
    disc: {
        type: String,
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Food', foodSchema);