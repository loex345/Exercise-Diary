const Food = require('../models/food');

module.exports = {
    index,
    new:newFood,
    create,
    update,
    show,
    edit,
    delete:deleteFood
};

function index(req, res){
    Food.find({},function(err,foods){
       res.render('foods/index',{title:'All Nutrition', foods})
    });
}

function newFood(req, res){
    res.render('foods/new',{title:'Add New Food'});
}

function create(req, res){
    const food = new Food(req.body);
    food.user = req.user._id;
    food.save(function(err){
       if(err) return res.redirect('foods/new')
       res.redirect(`/foods/${food.id}`);
    });
}

function show(req, res){
    Food.findById(req.params.id, function(err,food){
      res.render('foods/show', {title:'Food', food})
    })
}

function edit(req, res){
    Food.findOne({id:req.params.id, user:req.user.id}, function(err, food){
      res.render('foods/edit', {title:'Update Food', food})
    });
}

function update(req, res){
    Food.findOneAndUpdate(
     {id: req.params.id, user: req.user.id},
     req.body,
     {new:true},
     function(err, food){
      if (err || !food) return res.redirect('/food');
     res.redirect(`/foods/${food.id}`);
     }
    );
  }

  function deleteFood(req, res){
    Food.findOneAndDelete({_id:req.params.id, user: req.user.id}, function(err){
    res.redirect('/foods');
    });
   } 
