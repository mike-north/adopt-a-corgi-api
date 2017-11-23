// @ts-check
const express = require('express');
const cors = require('cors');
let app = express();

const PUPPY_DATA = [
  {
    name: "Fred",
    breed: "Pembroke Welsh Corgi",
    birthday: "10/27/2017",
    vaccinated: true,
    isFavorited: true,
    gender: "male",
    "url": "./img/Fred1.png"
  },
  {
    name: "Babe",
    breed: "Pembroke Welsh Corgi",
    birthday: "10/18/2017",
    vaccinated: true,
    isFavorited: true,
    gender: "female",
    "url": "./img/Babe1.png"
  },
  {
    name: "Sire",
    breed: "Pembroke Welsh Corgi",
    birthday: "10/18/2012",
    vaccinated: true,
    isFavorited: true,
    gender: "female",
    "url": "./img/Sire1.png"
  },
  {
    name: "Biscuit",
    breed: "Pembroke Welsh Corgi",
    birthday: "10/01/2017",
    vaccinated: true,
    isFavorited: true,
    gender: "male",
    "url": "./img/Biscuit1.png"
  }
];

app.use(cors({
   origin: "*"
}));

app.use((req, res, next) => {
  let srcOrigin = req.query["__amp_source_origin"] || '*';
  res.setHeader("AMP-Access-Control-Allow-Source-Origin", srcOrigin);
  res.setHeader("AMP-Access-Control-Allow-Source-Origin", srcOrigin);
  res.setHeader("Access-Control-Expose-Headers", "AMP-Access-Control-Allow-Source-Origin");
  next();
});

app.get('/favorites', (req, res) => {
  res.json({items: PUPPY_DATA});
});

app.listen(process.env.PORT || 3000);
