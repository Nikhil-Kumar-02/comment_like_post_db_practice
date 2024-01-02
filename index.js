const express = require('express')
const app = express();
const dbConnection = require('./config/configuredb');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

const port = process.env.PORT  || 3000;
const apiRoutes = require('./routes/v1/index');

app.use('/v1', apiRoutes);

dbConnection();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
