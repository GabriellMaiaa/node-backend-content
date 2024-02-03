const express = require('express')
const app = express();
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')

app.use(shopRoutes)
app.use(adminRoutes)

app.use(bodyParser.urlencoded({extended: false }));

app.listen(3000);