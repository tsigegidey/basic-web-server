//A basic web server that says "Hello World". 

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname + "/about.html")
})

app.listen(port, () => {
  console.log(`${port}`)
})