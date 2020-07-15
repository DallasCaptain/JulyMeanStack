const api = require('../controllers/api')

module.exports = function(app){
    app.get('/', (req,res)=>{
        api.index(req,res)
    })

    app.get('/:name',(req,res)=>{
        api.named(req,res)
    })

    app.post('/login',(req,res)=>{
        api.login(req,res)
    })

    app.post('/people',(req,res)=>{
        api.create(req,res)
    })
}