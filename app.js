//import modules
const express = require('express')
const app = express()

//for frontend to communicate with backend without cors issues
const cors = require('cors')

//to parse the request body to json format
const bodyParser = require('body-parser')

//package that helps node app to interact with mongo db
const mongoose = require('mongoose')

//imports routes from ./routes/userRoute.js
const route = require('./routes/userRoute');
const port = 3000

//middlewares
app.use('/',route)
app.use(cors())
app.use(bodyParser.json())


//connecting node js app to mongo database
try{
  const connect = mongoose.connect('mongodb://localhost:27017/library')
if(connect){
  console.log("connected successfully")
}
} catch(err){
  console.log('An error occured', err)
}

//listening(end points)

app.listen(port,()=>{
  console.log(`The server is listening on : http://localhost:${port}`)
})
