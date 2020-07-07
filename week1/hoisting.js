// // GIVEN


// // console.log(example);
// // var example = "I'm the example!";


// // AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";


// // console.log(hello);                                   
// // var hello = 'world';           

// var hello;
// console.log(hello) // logs undefinded
// hello = 'world'


// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);

var mean;

//console.log(food)

mean = function(){
    food = "chicken";
	console.log(food);
	food = "fish";
    console.log(food);
    
    if(true){y = 0}

    console.log(y)
}

mean()
console.log(y)
console.log(food)