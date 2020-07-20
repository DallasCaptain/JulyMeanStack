const Pizza = require('../controllers/pizzas')

module.exports = function(app){
    app.get('/',(req,res)=>{
        
        Pizza.index(req,res)
    })
}