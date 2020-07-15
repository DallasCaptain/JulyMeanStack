const express = require("express");
const app = express();
const session = require('express-session');
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
mongoose.connect('mongodb://localhost/lNr', {useNewUrlParser: true})

const UserSchema = new mongoose.Schema({
    name: String,
    password: String,
})

const User = new mongoose.model('User', UserSchema)

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.get('/', (req, res) => {
    //console.log(req.session)
    if('user' in req.session){
        user = req.session.user
    }else{
        req.session.user = {name: 'none'}
    }
    res.render('index',{user : req.session.user});
});

app.get('/failed',(req,res)=>{
    res.render('failed')
})

app.post('/login', (req,res)=>{
    User.findOne({name:req.body.name})
    .then(user =>{
        if(user){
            console.log(user)
            bcrypt.compare(req.body.password, user.password)
                .then(result =>{
                    if(result){
                        req.session.user = {name : req.body.name}
                        res.redirect('/')
                    }else{
                        res.redirect('/failed')
                    }
                })
                .catch(err=>{
                    console.log(err)
                    res.redirect('/')
                })
                
        }else{
            res.redirect('/failed')
        }
        
    })
    .catch(err=>{
        console.log(err)
        res.redirect('/')
    })
})

app.post('/register', (req,res)=>{

    user = new User()
    user.name = req.body.name
    bcrypt.hash(req.body.password,10)
    .then(hashedpassword =>{
        user.password = hashedpassword
        user.save()
        .then(()=>{
            res.redirect('/')
        })
        .catch(err=>{
            console.log(err)
            res.redirect('/')
        })
    })
    .catch(err=>{
        console.log(err)
        res.redirect('/')
    })
    

})


app.listen(8000, () => console.log("listening on port 8000"));


