const express = require('express')
const app = express();
const {homepageController, loginController, registerController, apiController, UserController, singleUserController, postController} = require('./controller/index') 
const bodyParser = require('body-parser');
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
    if(token!=apiToken){
        res.status(500).send('invalid token')
    }
    next()
}

app.get('/', homepageController); 
app.get('/login', loginCheck, loginController)// Router level middleware
app.post('/register', captureData, registerController)
app.get('/api', CheckToken, apiController)
app.all('/user', UserController) // all http requests(get, post, put, delete)
app.get('/user/:userid', singleUserController)

app.get('/post-(.*)', postController) // routing

// https://stackabuse.com/?page=2&limit=3
// 





app.listen(3002, (req, res)=>{
    console.log('Server is running...')
})