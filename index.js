const express = require('express');
const { pets } = require('./data');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/pets', async (req, res) => {
  return res.json(pets);
});

app.listen(4000, () => {
  console.log('listening');
});
