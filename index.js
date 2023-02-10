const express = require('express');
const { pets } = require('./data');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 4000;

const app = express();

app.use(cors());

app.get('/pets', async (req, res) => {
  return res.json(pets);
});

app.listen(port, () => {
  console.log(`server running at port http://localhost:${port}`);
});
