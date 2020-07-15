const { People } = require("../models/people")

module.exports ={
    index: function(req,res){
        People.find()
        .then(people=>{

            res.json(people)
        })
    },

    named: function(req,res){
        res.json({status:'success',name:req.params.name})
    },
    
    login: function(req,res){
        console.log('login request from', req.body.name)
        res.json({status:'loggedin'})
    },

    create: function(req,res){
        let person = new People()
        person.name = req.body.name
        person.age = req.body.age
        person.save()
        .then(newPerson => {
            res.json(newPerson)
        })
    }
}