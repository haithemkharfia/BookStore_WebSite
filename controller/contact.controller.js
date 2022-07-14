


exports.getContactPage=(req,res)=>{

res.render('contact',{verifUSer:req.session.userId})

}