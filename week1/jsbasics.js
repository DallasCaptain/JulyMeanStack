// comment: 

// this function does x and y
function something(){

}

function add(x,y){
    console.log(x+y)
    
    return ('sum is ' + (x + y))
    //unreachable
    console.log(x+y)
}

function log(string){
    //outputs code to the terminal
}

//console.log(add(9,5))
//default variable is a var
var name = 'chris'

let othername = 'bob'
const number = 9

var i = 100
for(i = 0; i<10;i++){
    //console.log(i)
    continue
}
//number = 89
//console.log(i)

let float = 6.7

let arr = [
    8,
    'bob',
    float,
    8,
    'bob',
    float,
   
    //anything you want
]

let dict = {
    'key' : 9,
    'name' : 'bob',
    'arr' : arr,
    'friend' : {
        'name' : 'carl'
    }
}

//console.log(dict.arr[3])

let user1 = {
                            'name':'bob',
    'favColor' : 'red',
    
}

let user2 = {
    'name' : 'carl',
    'favColor' : 'green',
    'friend' : user1
}

user1['friend']= user2
//console.log(user1,user2)

//template literals are equivalent of f string
//pythong f'asdfasdfasfd'
//js `asdfasdf ${user.name}`

function notify(user){
    console.log('The User ' + user.name + ' has a favorite color of ' + user.favColor)
    console.log(`The User ${user.name} has a favorite color of ${user.favColor}`)
}

//notify(user2)
//console.log(user1)


//if statement
var i = 1900
if(i < 10){
    console.log('i is less than 10')
}
else if(i > 1000){
    console.log('i is huge')
}
else{
    console.log('i is only kinda big')
}

if(true){
    console.log('its true')
} else console.log('its false')

while(i < 2000){
    console.log(i)
    i += 10
}



