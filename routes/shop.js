const express = require('express')

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('Middleware is running')
  res.send('<h1>testando</h1>')
  next()
})

module.exports = router;