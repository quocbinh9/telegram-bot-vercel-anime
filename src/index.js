const express = require('express');
const morgan = require("morgan");
const bodyParser = require('body-parser')
const createBot = require('./services/telegram.service');
const { port } = require('./config/app.config');
const web = require('./routers/web.router');
const createConnection = require('./database/index.database');

const app = express()

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

createConnection()
  .then(connection => {
    const bot = createBot(connection)
    app.use(async (req, res, next) => {
      req.bot = bot
      req.connectionManager = connection
      next()
    })

    app.use('/', web)

    app.listen(port, () => {
      console.log(`Example app listening on port http://localhost:${port}`);
    })
  })
  .catch(error => console.error('ERROR: ' + error.message))