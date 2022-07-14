const BookModel=require('../models/book.model')

exports.getThreebooksController=(req,res,next)=>{
        
    BookModel.getThreebooks().then(books=>{

        res.render('index',{books:books, verifUSer:req.session.userId})
    
    }    )
}

