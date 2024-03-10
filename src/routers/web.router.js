const express = require('express');
const { environment, baseUrl } = require('../config/app.config');
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json('Listening to bot events...');
})

router.all('/webhook', (req, res) => {
  if (req.method == 'POST') {
    console.log(req.body);
    req.bot.processUpdate(req.body)
    res.sendStatus(200)
  }
  if (environment == 'production') {
    console.log(baseUrl + "/webhook");
    req.bot.setWebHook(baseUrl + "/webhook")
      .then(res => {
        console.log(res);
      })
  }
  res.status(200).json('Setup webhook success...');
})

router.use((error, request, response, next) => {
  // Error handling middleware functionality
  const status = error.status || 400;
  // send back an easily understandable error message to the caller
  response.status(status).json(error.message)
});

module.exports = router
