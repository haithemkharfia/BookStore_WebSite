const authModel=require('../models/auth.model')

exports.getRegistrePage=(req,res,next)=>{
    res.render('registre',{message:req.flash('error')[0],verifUSer:req.session.userId})
}

exports.postRegistreData=(req,res,next)=>{

authModel.registreFunctionModel(req.body.name,req.body.email,req.body.password)
.then((user)=>{
res.render('login',{verifUSer:req.session.userId})
console.log(user)

}).catch((err) => {
req.flash('error',err)
  res.redirect('/registre')

    console.log(err)
})
    


}

// --------------------------login-----------------------

exports.getLoginPage=(req,res,next)=>{
    res.render('login',{message:req.flash('error')[0],verifUSer:req.session.userId})
}

exports.postloginData=(req,res,next)=>{

authModel.loginFunctionModel(req.body.email,req.body.password).then((id)=>{

     req.session.userId=id
     res.redirect('/')

    
}).catch(err=>{
req.flash('error',err)

     res.redirect('/login')

    console.log(err)})

    }

exports.logoutFunctionController=(req,res,next)=>{

req.session.destroy(()=>{
res.render('login',{verifUSer:null})})
   

}