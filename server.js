const express=require('express')
const path=require('path')

var session = require('express-session')
var MongoDBStore = require('connect-mongodb-session')(session)

const flash=require('connect-flash') 


const app= express()

const RouterHome=require('./routers/home.route')
const RouterBook=require('./routers/book.route')
const RouterAuth=require('./routers/auth.route')
const RouterMyBooks=require('./routers/mybooks.route')
const RouterContact=require('./routers/contact.router')


app.use(express.static(path.join(__dirname,'assets')))
app.set('view engine','ejs')
app.set('views','views')


var Store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/library',
    collection: 'Mysessions'
  });
app.use(flash())
app.use(session({
    secret: 'This is a secret',
    cookie: {
         maxAge: 99999999,

     },
    store: Store,
    resave: true,
    saveUninitialized: true
}))


app.use('/',RouterHome)
app.use('/',RouterBook)
app.use('/mybooks',RouterMyBooks)

app.use('/',RouterAuth)
app.use('/',RouterContact)




//  app.get('/',(req,res,next)=>{
    
//     res.render('',{})


//  })




app.listen(3000,()=>console.log('server running on port 3000'))