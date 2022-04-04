const express = require('express')
const app = express()
const bp = require('body-parser')
const Connection = require('./middleware/db')
const userrouter = require('./route/user')
const offerrouter = require('./route/offer')
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}


Connection()

app.use(bp.json())

app.use(express.json())
app.use(cors(corsOptions)) // Use this after the variable declaration

app.use('/user',userrouter)
app.use('/offer',offerrouter)


app.get('/',(req,res)=>{res.json('hello world')})
app.listen(3001,()=>{console.log('server listening on port 3001')})