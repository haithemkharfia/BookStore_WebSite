const { rejects } = require('assert')
const mongoose=require('mongoose')
const { resolve } = require('path')
const bcrypt=require('bcrypt')
const { nextTick } = require('process')

var schemAuth=mongoose.Schema({
    name: String,
   email:String,
password:String, 
})

var User=mongoose.model('user',schemAuth)

url= "mongodb://localhost:27017/library"

exports.registreFunctionModel=(name,email,password)=>{
return new Promise((resolve,rejects)=>{

    mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true})

.then(()=>{
    return User.findOne({email:email})

}).then((user)=>{
    if(user){
        mongoose.disconnect()
        rejects('email is used')

    }else{
        return bcrypt.hash(password,10)

    }
}).then((hPassword)=>{
    let user= new User({
        name:name,
        email:email,
        password:hPassword,
    })
return user.save()

}).then((user)=>{
    mongoose.disconnect()
    resolve('user added')

}).catch(err=>{   
     mongoose.disconnect()
     rejects(err)})



    })}

    exports.loginFunctionModel=(email,password)=>{
        return new Promise((resolve,rejects)=>{
        
            mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true})
            .then(()=>{  
                  return User.findOne({email:email})})

        .then((user)=>{
            if(user){

                bcrypt.compare(password,user.password).then((verif)=>{

                    if(verif){
                          
                mongoose.disconnect()
                resolve(user._id)
                    }else{
                          
                mongoose.disconnect()
                rejects('invalide password')
                    }


                })
            
        
            }else{
                          
                mongoose.disconnect()
                rejects('user not founded')
                    }
        
        
        }).catch(err=>{   
             mongoose.disconnect()
             rejects(err)})
        
        
        
            })}
        
        
        
