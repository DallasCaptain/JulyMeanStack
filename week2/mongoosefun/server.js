const express = require("express");
const app = express();
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mongofun', {useNewUrlParser: true})
const ShoeSchema = new mongoose.Schema({
    name: String
})
const Shoe = mongoose.model('Shoe', ShoeSchema)

const UserSchema = new mongoose.Schema({
    name: String,
    age: { type: Number, required: true },
    favShoe: ShoeSchema,
})

const User = mongoose.model('User', UserSchema)

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));



app.set('view engine', 'ejs');  
app.set('views', __dirname + '/views');


app.get('/', (req, res) => {
    
    User.find()
    .then(data => {
        console.log('data from .then',data)
        res.render('users', {users: data});
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
            console.log('err:', err)
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
    newshoe.save()
    .then(()=>{
        res.redirect('/')
    })
})

app.listen(8000, () => console.log("listening on port 8000"));
