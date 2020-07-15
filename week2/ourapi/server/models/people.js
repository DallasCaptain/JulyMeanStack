const mongoose = require('mongoose')

const PeopleSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const People = new mongoose.model('People',PeopleSchema)

module.exports= {
    People:People,
    PeopleSchema:PeopleSchema
}