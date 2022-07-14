

exports.IsAuth=(req,res,next)=>{
if(req.session.userId){
next()
}else{
res.redirect('login')
}
}

exports.NotAuth=(req,res,next)=>{
if(req.session.userId){
res.redirect('/')

}else{
next()}
}