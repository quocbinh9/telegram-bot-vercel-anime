const express = require('express');
const morgan = require("morgan");
const bodyParser = require('body-parser')
const bot = require('./services/telegram.service');
const { port } = require('./config/app.config');
const web = require('./routers/web.router')

const app = express()

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  req.bot = bot
  next()
})

app.use('/', web)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
})