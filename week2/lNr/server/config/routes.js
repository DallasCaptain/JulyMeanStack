const Users = require('../controllers/users')

module.exports = function(app){

    app.get('/', (req, res) => {
        Users.index(req, res)
    });

    app.get('/failed',(req,res)=>{
        Users.failed(req,res)
    })

    app.post('/login', (req,res)=>{
        Users.login(req,res)
    })

    app.post('/register', (req,res)=>{
        Users.create(req,res)
    })
}




