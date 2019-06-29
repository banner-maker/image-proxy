const express = require('express');
const request = require('request');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors());

app.get('/:url', (req, res, next) => {
  request(req.params.url).pipe(res);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server Listening...');
});
