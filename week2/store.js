const {uckythings , tastythings ,tastes} = require('./fruit')


//console.log(fruit,vegies)
let items = tastythings.concat(uckythings) 
for(let i of items){
    console.log(tastes(i))
}