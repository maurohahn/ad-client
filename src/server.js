const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');

//Init App
const app = express();

//Config bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
app.use("/", require("./routes"));

//error404
app.use((req, res) => {
  res.status(404).send({ url: req.originalUrl + ' not found' })
})

//Exec App
app.listen(config.port, () => console.log(`Running - Api AD Client Auth... ( port: ${config.port} )`));
