// @ts-check
const express = require('express');
let app = express();

app.get('/favorites', (req, res) => {
  res.json([
    {name: 'PUPPY!'}
  ])
});

app.listen(process.env.PORT || 3000);