const express = require('express')
const app = express()//part 1
require('dotenv').config()
const Orderapi = require('./api/router/order')//part 2
const morgan = require('morgan')// extra 
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(morgan("dev"))

mongoose.connect(process.env.mongoconnect)
app.use('/order',Orderapi)



module.exports = app