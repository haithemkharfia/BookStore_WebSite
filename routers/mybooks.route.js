const router=require('express').Router()
const BookController=require('../controller/book.controller')
const multer=require('multer')
const guardAuth=require('./guardAuth')

router.get('/',guardAuth.IsAuth,BookController.getmybookspage)
router.get('/delete/:id',guardAuth.IsAuth,BookController.deleteBookController)

router.get('/update/:id',guardAuth.IsAuth,BookController.getmybookForUpdate)
router.post('/UpdateBook',guardAuth.IsAuth,multer({

storage:multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'assets/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, Date.now() + '-' + file.originalname  )
  }
})
}).single('image'),BookController.UpdateBookController)



module.exports=router