const mongoose = require('mongoose')

const CatSchema = new mongoose.Schema({
    name: String,
    coat: String
})

const Cat = new mongoose.model('Cat', CatSchema)

module.exports = {
    Cat:Cat,
    CatSchema:CatSchema
}