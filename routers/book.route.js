const BookController=require('../controller/book.controller')
const router=require('express').Router()
const guardAuth=require('./guardAuth')
const multer=require('multer')
const body=require('express').urlencoded({ extended: true })


router.get('/books',guardAuth.IsAuth,BookController.getallbooksController)
router.get('/book/:id',guardAuth.IsAuth,BookController.getOneBookDetailsController)

router.get('/addbook',guardAuth.IsAuth,BookController.getAddBookController)
router.post('/addbook',multer({

storage:multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'assets/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, Date.now() + '-' + file.originalname  )
  }
})
}).single('image')

,guardAuth.IsAuth,BookController.postAddBookController)


module.exports=router