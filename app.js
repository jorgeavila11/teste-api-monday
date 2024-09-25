const express = require('express')
const app = express();

var bodyParser = require('body-parser')
const {PirsmaClient} = require('@prisma/client')

app.set('view engine', 'ejs')

app.set('views', './app/views')

app.use(bodyParser.urlencoded({extended:true}))

const rotaHome = require('./app/routes/rotaHome')(app)
const rotaLista = require('./app/routes/rotaLista')(app)



app.listen('3000', ()=>{
    console.log('Servidor Up')
})