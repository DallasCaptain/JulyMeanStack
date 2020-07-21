const express = require("express");
const app = express();
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/PizzaMonday', {useNewUrlParser: true})

app.use(express.static(__dirname + "/FormFun/dist/FormFun"));

app.use(express.urlencoded({extended: true}));
app.use(express.json())
require('./server/config/routes.js')(app)

app.listen(8000, () => console.log("listening on port 8000"));