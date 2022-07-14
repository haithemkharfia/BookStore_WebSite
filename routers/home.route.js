const HomeController=require('../controller/home.controller')
const router=require('express').Router()

router.get('/',HomeController.getThreebooksController)

module.exports=router