require('dotenv').config();

const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const productCtrl = require('./controllers/productCtrl');

const cors = require('cors');
const massive = require('massive');

const port = 3001;

var db = massive.connectSync({
  connectionString: process.env.CONNECTION_STRING,
});

app.use(
  session({
    secret: process.env.SECRET,
    saveUnitialized: false,
    resave: false,
  })
);

app.use(bodyParser.json());
app.use(express.static(`${__dirname}./../public`));

app.set('db', db);
var db = app.get('db');

app.get('/api/products', (req, res) => {
  db.get_all_products((err, products) => {
    res.status(200).send(products);
  });
});

app.listen(port, () => {
  console.log('Ship docked at port: ', port);
});
