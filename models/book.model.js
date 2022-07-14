const { rejects } = require('assert')
const mongoose =require('mongoose')
const { resolve } = require('path')


var schemaBook= mongoose.Schema({
id :String,
title : String,
description : String,
author : String,
price : Number,
image: String,
userId: String,

})

Book=mongoose.model('book',schemaBook)



url='mongodb://localhost:27017/library'

exports.getThreebooks=()=>{
    return new Promise((resolve,rejects)=>{
   mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true})
   .then(()=>{
   return Book.find().limit(3) }).then(books=>{
   mongoose.disconnect() 
    resolve(books)
}).catch(error=>rejects(error))
    

})}


exports.getallbooks=()=>{
    return new Promise((resolve,rejects)=>{
   mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true})
   .then(()=>{
   return Book.find() }).then(books=>{
   mongoose.disconnect() 
    resolve(books)
}).catch(error=>rejects(error))
    

})}

exports.getOneBookDetails=(id)=>{

    return new Promise((resolve,rejects)=>{
        mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>{return Book.findById(id)}).then(books=>{
            mongoose.disconnect() 
             resolve(books)
         }).catch(error=>rejects(error))

    }
    
    )
}

exports.postDataBookModel=(title,author,price,desc,image,userId)=>{

return new Promise((resolve,rejects)=>{
 mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>{
        
        let book= new Book({
                            
            title:title,
            price:price,   
            author:author,

            desc:desc,
            image:image,
            userId:userId
                            })
    console.log(book)

          return  book.save()
        }).then(book=>{
            mongoose.disconnect() 
             resolve('book add !!')
         }).catch(error=>rejects(error))

    }  )}
   



 
    // getMyBooooks

exports.getMybooks=(userId)=>{
    return new Promise((resolve,rejects)=>{
   mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true})
   .then(()=>{
   return Book.find({userId:userId}) }).then(books=>{
   mongoose.disconnect() 
    resolve(books)
}).catch(error=>rejects(error))
    

})}



exports.DeleteBook=(id)=>{
    return new Promise((resolve,rejects)=>{
   mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true})
   .then(()=>{
   return Book.deleteOne({_id:id}) }).then(books=>{
   mongoose.disconnect() 
    resolve(true)
}).catch(error=>rejects(error))
    

})}



// ------------update 

exports.getMybookUpdateModel=(id)=>{
    return new Promise((resolve,rejects)=>{
   mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true})
   .then(()=>{
   return Book.findById(id) }).then(books=>{
   mongoose.disconnect() 
    resolve(books)
}).catch(error=>rejects(error))
    

})}



exports.UpdateBookModel=(bookId,title,author,price,desc,image)=>{

return new Promise((resolve,rejects)=>{
 mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>{
        
     return   Book.updateOne({"_id": bookId},{title:title,author:author,price:price,desc:desc,image:image})

        }).then(book=>{

            mongoose.disconnect() 
             resolve('book updated !!')
         }).catch(error=>rejects(error))

    }  )}
   

