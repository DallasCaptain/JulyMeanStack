const express = require("express");
const app = express();
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('express-flash');
mongoose.connect('mongodb://localhost/mongofun', {useNewUrlParser: true})

const ShoeSchema = new mongoose.Schema({
    name: String,
    
})
const Shoe = mongoose.model('Shoe', ShoeSchema)

const WardrobeSchema = new mongoose.Schema({
    name: String,
    articles: [ShoeSchema]
})

const Wardrobe = mongoose.model('Wardrobe', WardrobeSchema)

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    wardrobe: WardrobeSchema,
    favShoe: ShoeSchema,
})

const User = mongoose.model('User', UserSchema)

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.use(flash())
app.use(session({
    secret: 'I solemly swear i am upto no good',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

app.set('view engine', 'ejs');  
app.set('views', __dirname + '/views');


app.get('/', (req, res) => {
    var errors = req.flash('errors')
    User.find()
    .then(data => {
        console.log('data from .then',data)
        res.render('users', {users: data,errors:errors});
    })
    console.log('after .then')
});

app.post('/users', (req,res) => {
    const user = new User();
    user.name = req.body.name
    user.age = req.body.age
    Shoe.findOne({})
    .then(data => {
        console.log('favshoe?:',data)
        user.favShoe = data
        user.save()
        .then(data => {
            console.log('new user?: ', data)
            res.redirect('/')
        })
        .catch(err => {
            console.log('err:', err.errors.age)
            if(err.errors.name){
                req.flash('errors','Name is required')
            }
            if(err.errors.age){
                
                req.flash('errors','Age is required')
            }
            
            res.redirect('/')
        })
    })
    

})

app.get('/byeBob', (req,res) => {
    User.remove({name:'bob',})
    .then(()=>{
        res.redirect('/')
    })
})

app.get('/funny', (req,res)=>{
    User.findOne({name:'Bob'})
    .then(data => {
        user = data
        user.name = 'funnyBob'
        user.save()
        .then(()=>{
            res.redirect('/')
        })
    })
})

app.get('/initshoes', (req,res)=>{
    newshoe = new Shoe()
    newshoe.name = 'mykicks'

    othershoe = new Shoe()
    othershoe.name = 'othershoe'
    newshoe.save()
    .then((shoe1)=>{
        othershoe.save()
        .then((shoe2)=>{
            newwardrobe = new Wardrobe()
            newwardrobe.name = 'bobs clothes'
            newwardrobe.articles = [shoe1,shoe2]
            newwardrobe.save()
            .then((wd)=>{
                console.log('new wardrobe: ',wd)
                res.redirect('/')
            })
        })
        
    })
})

app.listen(8000, () => console.log("listening on port 8000"));
