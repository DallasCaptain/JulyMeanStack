const express = require("express");
const app = express();
const session = require('express-session');
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/lNr', {useNewUrlParser: true})

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

require('./server/config/routes')(app)

app.listen(8000, () => console.log("listening on port 8000"));


