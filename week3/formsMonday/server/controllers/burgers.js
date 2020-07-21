const {Burger} = require('../models/burger')

module.exports = {
    home: function(req,res){

    },
    index: function(req,res){
        Burger.find()
        .then(burgers=>{
            res.json(burgers)
        })
        .catch(err=>res.json(err))
    },

    create: (req,res)=>{
        let np = new Burger;
        console.log('creating pizza:',req.body)
        np.name = req.body.name
        np.toppings = req.body.toppings
        np.price = req.body.price
        np.check = req.body.check
        np.save()
        .then((burger)=>{
            req.res(burger)
        })
        .catch(err=>res.json(err))
    }
}