const BookModel=require('../models/book.model')


exports.getallbooksController=(req,res,next)=>{
        
    BookModel.getallbooks().then(books=>{

        res.render('books',{books:books,verifUSer:req.session.userId})
    
    }    )
}

exports.getOneBookDetailsController=(req,res,next)=>{
        let id=req.params.id
    BookModel.getOneBookDetails(id).then(resbook=>{

        res.render('details',{book:resbook,verifUSer:req.session.userId})
    
    }    )
}



// ----add book

exports.getAddBookController=(req,res,next)=>{
    res.render('addbook',{verifUSer:req.session.userId})
}

exports.postAddBookController=(req,res,next)=>{

BookModel.postDataBookModel(req.body.title,req.body.author,req.body.price,req.body.desc,req.file.filename, req.session.userId).then((msg)=>{

// req.flash('succesmessage',msg)
res.redirect('/AddBook')
}).catch((err) => {
    console.log(err)
})
}


exports.getmybookspage=(req,res,next)=>{
BookModel.getMybooks(req.session.userId).then((books)=>{
res.render('mybooks',{mybooks:books,verifUSer:req.session.userId})
})
}


exports.deleteBookController=(req,res,next)=>{
let id =req.params.id
BookModel.DeleteBook(id).then((verif)=>{
res.redirect('/mybooks')
})}


// update

exports.getmybookForUpdate=(req,res,next)=>{
let id =req.params.id

BookModel.getMybookUpdateModel(id).then((book)=>{
res.render('updateBook',{bookUpdate:book,verifUSer:req.session.userId})
})
}


exports.UpdateBookController=(req,res,next)=>{
if(req.file){
BookModel.UpdateBookModel(req.body.bookId,req.body.title,req.body.author,req.body.price,req.body.desc,req.file.filename).then(verif=>{
console.log(verif)
res.redirect(`/mybooks/update/${req.body.bookId}`)
})}else{

BookModel.UpdateBookModel(req.body.bookId,req.body.title,req.body.author,req.body.price,req.session.userId,req.body.oldimage).then(verif=>{
console.log(verif)

res.redirect(`/mybooks/update/${req.body.bookId}`)

}
)}
}
