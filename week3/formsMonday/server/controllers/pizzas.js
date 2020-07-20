const {Pizza} = require('../models/pizza')

module.exports = {
    index: function(req,res){
        console.log('in pizzas')
        
    },

    create: (req,res)=>{
        let np = new Pizza;
        np.name = req.body.name
        np.toppings = req.body.toppings
        np.price = req.body.price
        np.check = req.body.check
        np.save()
        .then((pizza)=>{
            req.res(pizza)
        })
        .catch(err=>res.json(err))
    }
}