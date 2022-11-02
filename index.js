const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.SERVER_PORT;
const name = process.env.MY_NAME;
const city = process.env.MY_CITY;
const lang = process.env.MY_LANGUAGE;

app.use(express.json());

app.listen(port, () => {
  console.log(`
  Server running on ${port}
  I am ${name}, wilder in ${city}, and I love ${lang}
  `);
});
