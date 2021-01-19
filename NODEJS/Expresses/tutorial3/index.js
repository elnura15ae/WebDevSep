const express = require('express')
const app = express();
const {homepageController, loginController, registerController, apiController} = require('./controller/index') 
const bodyParser = require('body-parser')
let apiToken="12345"

app.use(bodyParser({
    extended:true
}))

function loginCheck(req, res, next){
    let islogged= false;
    if(!islogged){
        console.log('Middleware is running isLogged-true')
        next();
        }
    }
// app.use(loginCheck);  // application level middleware

function captureData(req, res, next){
 console.log(req.body);
 next();
}

function CheckToken(req, res, next){
    let token =req.headers.token
    console.log(token)
    next()
}

app.get('/', homepageController); 
app.get('/login', loginCheck, loginController)// Router level middleware
app.post('/register', captureData, registerController)
app.get('/api', CheckToken, apiController)





app.listen(3002, (req, res)=>{
    console.log('Server is running...')
})