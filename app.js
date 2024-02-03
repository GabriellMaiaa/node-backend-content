const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const path = require('path')

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false }));

app.use('/admin', adminRoutes); // /admin/add-product
app.use(shopRoutes);

//Pode se fazer um try catch
app.use((req, res, next) => { //Aqui temos o tratamento para qd não retornar nada na url
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000);