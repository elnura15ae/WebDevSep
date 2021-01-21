const express = require('express')
const app= express()
const bodyParser= require('body-parser')
const {HomeController} = require('./controller/HomeController')
const path= require('path')

app.use(bodyParser({
    extended:false
}))

app.set('views'.path.join(__dirname,''))
app.set('view engine', 'ejs')

app.get('/', HomeController)

app.listen(3009, ()=>{
    console.log('Server is running')
})