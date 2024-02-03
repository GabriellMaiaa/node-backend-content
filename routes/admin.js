const express = require('express')

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  console.log('Continue to next middleware')
  res.send('<form action="/product" method="POST"><input type="text" name="title"></input><button type="submit"> Add</button></form>')
})

router.use('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/')
})

module.exports = router;