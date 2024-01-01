const express = require('express')
const app = express();
const dbConnection = require('./config/configuredb');
require('dotenv').config();
const port = process.env.PORT  || 3000;
const apiRoutes = require('./routes/v1/index')

app.use('/', apiRoutes);
dbConnection();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
