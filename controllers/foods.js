const Food = require('../models/food');

module.exports = {
    index,
    new:newFood
};

function index(req, res){
    Food.find({},function(err,foods){
       res.render('foods/index',{title:'All Nutrition', foods})
    });
}

function newFood(req, res){
    res.render('foods/new',{title:'Add New Food'});
}