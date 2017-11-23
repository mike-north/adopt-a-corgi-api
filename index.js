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
    gender: "male"
  },
  {
    name: "Babe",
    breed: "Pembroke Welsh Corgi",
    birthday: "10/18/2017",
    vaccinated: true,
    gender: "female"
  },
  {
    name: "Sire",
    breed: "Pembroke Welsh Corgi",
    birthday: "10/18/2012",
    vaccinated: true,
    gender: "female"
  },
  {
    name: "Biscuit",
    breed: "Pembroke Welsh Corgi",
    birthday: "10/01/2017",
    vaccinated: true,
    gender: "male"
  }
];

app.use(cors({
   origin: "*"
}));

app.get('/favorites', (req, res) => {
  res.json(PUPPY_DATA);
});

app.listen(process.env.PORT || 3000);