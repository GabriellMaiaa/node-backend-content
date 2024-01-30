const http = require('http')
const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log('Middleware is running')
  next()
})
app.use((req, res, next) => {
  console.log('Continue to next middleware')
  res.send('Testando')
})


const server = http.createServer(app)
server.listen(3000)