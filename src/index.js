require('dotenv').config();
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('vesapi')
})

app.listen(process.env.SERVER_PORT, () => {
  console.log('vesidata-api listening on port:', process.env.SERVER_PORT)
})
