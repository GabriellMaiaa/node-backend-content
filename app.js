const express = require('express')
const app = express()

app.use('/add-product', (req, res, next) => {
  console.log('Continue to next middleware')
  res.send('Testando o outro middleware')
})

app.use('/', (req, res, next) => {
  console.log('Middleware is running')
  res.send('<h1>testando</h1>')
  next()
})

app.listen(3000);