const express = require('express')
const mongoose = require('mongoose')
const Note = require('./models/Note')
const User = require('./models/User')
const app = express()
app.use(express.json())
app.use(express.urlencoded())
const port = 3000
mongoose.connect('',function(error) {
  //check error in connection
  if(!error) {
    console.log("Successfully Connected")
  }
  
});
//endpoints will server the HTML
app.get('/', (req, res) => {
  res.sendFile("pages/index.html",{root: __dirname})
})

app.get('/login', (req, res) => {
  res.sendFile("pages/login.html",{root: __dirname})
})

app.get('/signup', (req, res) => {
  res.sendFile("pages/signup.html",{root: __dirname})
})
//API endpoints
app.post('/getnotes', async (req, res) => {
  let notes = await Note.find({email:req.body.email})
  res.status(200).json({success:true})

})
app.post('/login',async (req, res) => {

  let user = await User.findOne(req.body)
  console.log(user)
  if(!user) {
    res.status(200).json({success:false,message:"No user found"})
  } else {
    res.status(200).json({success:true,user:{email:user.email},message:"User found"})
  }
 
})

app.post('/signup',async (req, res) => {
  const {userToken} = req.body
  console.log(req.body)
  let user = await User.create(req.body) //create document inside monodo db databate
  res.status(200).json({success:true,user:user})
})
app.post('/addnote', async (req, res) => {
  const {userToken} = req.body
  let note = await Note.create(req.body)
  res.status(200).json({success:true,note})
})

app.post('/deletenote', (req, res) => {
  const {userToken} = req.body
  res.sendFile("pages/signup.html",{root: __dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})