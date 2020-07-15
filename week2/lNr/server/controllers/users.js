const {User} = require('../models/user')
const bcrypt = require('bcrypt')
module.exports = {
    index: function (req,res){
        if('user' in req.session){
            user = req.session.user
        }else{
            req.session.user = {name: 'none'}
        }
        res.render('index',{user : req.session.user});
    },

    failed: function(req,res){
        res.render('failed')
    },

    login: function(req,res){
        User.findOne({name:req.body.name})
        .then(user =>{
            if(user){
                console.log(user)
                bcrypt.compare(req.body.password, user.password)
                    .then(result =>{
                        if(result){
                            req.session.user = {name : req.body.name}
                            res.redirect('/')
                        }else{
                            res.redirect('/failed')
                        }
                    })
                    .catch(err=>{
                        console.log(err)
                        res.redirect('/')
                    })
                    
            }else{
                res.redirect('/failed')
            }
            
        })
        .catch(err=>{
            console.log(err)
            res.redirect('/')
        })
    },

    create: function(req,res){
        user = new User()
        user.name = req.body.name
        bcrypt.hash(req.body.password,10)
        .then(hashedpassword =>{
            user.password = hashedpassword
            user.save()
            .then(()=>{
                res.redirect('/')
            })
            .catch(err=>{
                console.log(err)
                res.redirect('/')
            })
        })
        .catch(err=>{
            console.log(err)
            res.redirect('/')
        })
    },
}