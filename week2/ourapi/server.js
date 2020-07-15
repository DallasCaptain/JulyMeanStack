const express = require("express");
const app = express();
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/ourapi', {useNewUrlParser: true})

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));


require('./server/config/routes')(app)

app.listen(8000, () => console.log("listening on port 8000"));


