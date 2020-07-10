function petMaker(){
    var pet = {}
    pet.name = 'fido'

    pet.speak = function(){
        console.log('woof')
    }

    return pet
}

let fido = petMaker()

console.log(fido)
fido.speak()
console.log(typeof(fido))


function carMaker(make, color, secret){
    this.make = make
    this.color = color
    var privateInfo = secret
    this.start = function(){
        console.log('vroom')
        return this
    }
    this.go =function(){
        console.log('going')
    }

    this.getPrivateInfo = function(){
        return(privateInfo)
    }
}

mycar = new carMaker('ford', 'red','bannana')
console.log(mycar)
mycar.start()
console.log(typeof(mycar))
othercar = new carMaker('porche', 'white','solar')
console.log(othercar)
console.log(othercar.getPrivateInfo())
othercar.roofType ='boring'
othercar.__proto__.roofType = 'panoramic'
console.log(othercar.__proto__.roofType)
console.log(mycar.roofType)
console.log(othercar.roofType)
othercar.__proto__.setPrivateInfo = function(newpriv){
    privateInfo = newpriv
}
mycar.setPrivateInfo('fudge')
newcar = new carMaker('toyota', 'black','asdfasdf','sunroof')
console.log(newcar)

console.log(mycar.getPrivateInfo())
console.log(othercar.__proto__.privateInfo)

mycar.start().go()


