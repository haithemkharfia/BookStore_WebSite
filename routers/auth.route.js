const router=require('express').Router()
const AuthController=require('../controller/auth.controller')

const body=require('express').urlencoded({ extended: true })

const guardAuth=require('./guardAuth')

router.get('/registre',guardAuth.NotAuth,AuthController.getRegistrePage)
router.post('/registre',body,AuthController.postRegistreData)

router.get('/login',guardAuth.NotAuth,AuthController.getLoginPage)
router.post('/login',body,AuthController.postloginData)

router.post('/logout',AuthController.logoutFunctionController)

module.exports=router