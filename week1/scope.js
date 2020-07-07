//vars are function scoped

var name = 'asdf'
i = 100

function something(cb){
    //loop that takes 5 minutes
    console.log(name)
    name ='erqq'
    var name = 'fdas'
    var y = 90
    for(let i = 0; i<10;i++){
        var y = 0
    }
    console.log(i)
    return cb()
}

function whocares(){
    console.log('who cares')
}


something(whocares)
console.log(name)
console.log(i)

'asynchronous javascript and xml'

name = something()
somethingelse()