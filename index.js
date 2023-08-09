const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded())
const port = 3000
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
app.post('/getnotes', (req, res) => {
  const {userToken} = req.body
  res.sendFile("pages/signup.html",{root: __dirname})
})
app.post('/login', (req, res) => {
  const {userToken} = req.body
  res.sendFile("pages/signup.html",{root: __dirname})
})

app.post('/signup', (req, res) => {
  const {userToken} = req.body
  res.sendFile("pages/signup.html",{root: __dirname})
})
app.post('/addnote', (req, res) => {
  const {userToken} = req.body
  res.sendFile("pages/signup.html",{root: __dirname})
})

app.post('/deletenote', (req, res) => {
  const {userToken} = req.body
  res.sendFile("pages/signup.html",{root: __dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})