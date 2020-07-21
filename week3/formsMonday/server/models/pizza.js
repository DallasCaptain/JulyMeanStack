

const mongoose = require('mongoose')

const PizzaSchema = new mongoose.Schema({
    name: String,
    toppings: [String],
    price: Number,
    check: Boolean
})

const Pizza = new mongoose.model('Pizza', PizzaSchema)



module.exports = {
    Pizza:Pizza,
    PizzaSchema: PizzaSchema
}