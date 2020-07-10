const express = require("express");
const app = express();
const session = require('express-session');
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
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    res.render('users', {users: users_array});
});
app.get('/users/welcome',(req,res)=>{
    res.send('WELCOME')
})

app.get('/users/:id/',(req,res)=>{
    
    res.send('You requested user '+req.params.id)
})

app.get('/users', (req,res) =>{
    console.log(req.session)
    context={name : req.session.name}
    
    res.render('submissions', context)
})


app.post('/', (req,res) => {
    console.log(req.body)
    req.session.name = req.body.name
    res.redirect('/users')
})

app.listen(8000, () => console.log("listening on port 8000"));


