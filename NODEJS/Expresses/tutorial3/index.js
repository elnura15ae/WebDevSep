const express = require('express')
const app = express();
const {homepageController, loginController} = require('./controller/index') 

function loginCheck(req, res, next){
    let islogged= false;
    if(!islogged){
        console.log('Middleware is running isLogged-true')
        next();
        }
    }
// app.use(loginCheck);  // application level middleware


app.get('/',loginCheck, homepageController); // Router level middleware
app.get('/login', loginController)


app.listen(3002, (req, res)=>{
    console.log('Server is running...')
})