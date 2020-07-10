class Person {
    static people = 0

    constructor(name,age){
        this.name = name
        this.age = age
        this._wallet = 0
        Person.people++
    }

    getBalance(){
        return this._wallet
    }

    getPaid(){
        this._wallet +=10
        return this
    }

    get wallet (){
        return this._wallet
    }

    set wallet (value){
        this._wallet = value
    }
}


bob = new Person('bob', 37)

console.log(bob.getBalance())

class Mailman extends Person {
    constructor(name,age,route){
        super(name,age)
        this.route = route
    }

    deliver(){
        super.getPaid()
        this._wallet += 1
    }

}

class expertMailman extends Mailman{
    constructor(name,age,route){
        super(name,age,route)
    }

    bigBucks(){
        super.getPaid().getPaid()
       
    }
}

carl = new Mailman('carl', 22, 'clifton')
console.log(carl)
carl.deliver()
console.log(carl)

bob.getPaid()
console.log(bob)

mark = new expertMailman('mark',66,'oldpark')
mark.bigBucks()
console.log(mark)

console.log(Person.people)