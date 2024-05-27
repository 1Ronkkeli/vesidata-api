require('dotenv').config();
const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();

app.use(express.json());


const ratelimit = rateLimit({
  windowMs: 1 * 60 * 1000, 
  max: 1, 
  message: 'Liian monta pyyntöä tältä IP:ltä, yritä uudelleen minuutin kuluttua'
});


app.use('/api/get-temperature', ratelimit);

app.get('/', (req, res) => {
  res.send('vesapi');
});

app.get('/api/get-temperature', (req, res) => {
  res.json({ message: 'Hae lämpötila' });
});

app.listen(process.env.SERVER_PORT, () => {
  console.log('vesidata-api kuuntelee portissa:', process.env.SERVER_PORT);
});
