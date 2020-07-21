const Pizza = require('../controllers/pizzas')
const Burger = require('../controllers/burgers')

module.exports = function(app){
    app.get('/',(req,res)=>{
        
        Pizza.home(req,res)
    })

    //API BELOW
        //pizzas
    app.get('/api/pizzas', (req,res)=>{
        console.log('in pizza api')
        Pizza.index(req,res)
    })

    app.post('/api/pizzas',(req,res)=>{
        Pizza.create(req,res)
    })


        //burgers
    app.get('/api/burgers', (req,res)=>{
        Burger.index(req,res)
    })
    app.post('/api/burgers',(req,res)=>{
        Burger.create(req,res)
    })

    app.get('*',(req,res)=>{
        console.log('in catch all')
        Pizza.home(req,res)
    })
}