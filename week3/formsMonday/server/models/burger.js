

const mongoose = require('mongoose')

const BurgerSchema = new mongoose.Schema({
    name: String,
    toppings: [String],
    price: Number,
    check: Boolean
})

const Burger = new mongoose.model('Burger', BurgerSchema)



module.exports = {
    Burger:Burger,
    BurgerSchema: BurgerSchema
}