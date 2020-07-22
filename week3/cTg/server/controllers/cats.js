const { Cat } = require('../models/cat')


module.exports = {
    index: function(req,res){
        // console.log('in cat index')
        Cat.find()
        .then(cats => {
            res.json(cats)
        })
        .catch(err => res.json(err))
    }
}