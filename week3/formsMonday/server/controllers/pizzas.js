const {Pizza} = require('../models/pizza')

module.exports = {
    home: function(req,res){
        res.sendFile('index.html', { root: __dirname +'../../../FormFun/dist/FormFun' });
    },
    index: function(req,res){
        Pizza.find()
        .then(pizzas=>{
            res.json(pizzas)
        })
        .catch(err=>res.json(err))
    },

    create: (req,res)=>{
        let np = new Pizza;
        console.log('creating pizza:',req.body)
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