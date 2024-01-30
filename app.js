const express = require('express')
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false }));

app.use('/add-product', (req, res, next) => {
  console.log('Continue to next middleware')
  res.send('<form action="/product" method="POST"><input type="text" name="title"></input><button type="submit"> Add</button></form>')
})

app.use('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/')
})

app.use('/', (req, res, next) => {
  console.log('Middleware is running')
  res.send('<h1>testando</h1>')
  next()
})

app.listen(3000);