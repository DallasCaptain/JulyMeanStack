const Cats = require('../controllers/cats')

module.exports = function(app){
    app.get('/', (req,res)=>{
        //replace with nothing once angular app built
        // res.json('Success')
    })

    app.get('/second',(req,res)=>{
        // console.log('in second route')
        Cats.index(req,res)
    })
}