const router=require('express').Router()
const ContactController=require('../controller/contact.controller')


router.get('/contact',ContactController.getContactPage)


module.exports=router