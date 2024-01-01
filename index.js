const express = require('express')
const app = express();
const dbConnection = require('./config/configuredb');
require('dotenv').config();
const port = process.env.PORT  || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
dbConnection();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
