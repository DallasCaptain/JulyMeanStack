const express = require("express");
const app = express();
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/PizzaMonday', {useNewUrlParser: true})

app.use(express.static(__dirname + "/FormFun/dist/FormFun"));


require('./server/config/routes.js')(app)

app.listen(8000, () => console.log("listening on port 8000"));