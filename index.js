// @ts-nocheck
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("Hey I'm a nodejs app!");
});

app.listen(3000, () => {
  console.log('app listening on port 3000');
});
