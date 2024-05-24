require('dotenv').config();
const express = require('express')
const app = express()

app.use(express.json());

app.get('/', (req, res) => {
  res.send('vesapi')
})

app.get('/api/get-temperature', (req, res) => {
  res.json({ message: 'Get temperature' })
})

app.listen(process.env.SERVER_PORT, () => {
  console.log('vesidata-api listening on port:', process.env.SERVER_PORT)
})
