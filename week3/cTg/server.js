const express = require('express')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/ctg', {useNewUrlParser: true})


const app = express()
app.use(express.static(__dirname + "/CTG/dist/CTG"));


require('./server/config/routes')(app)

app.listen(8000,()=>console.log('Server Running'))