require('dotenv').config()

const port = process.env.PORT || 3000
const baseUrl = process.env.BASE_URL || ""
const environment = process.env.NODE_ENV || "development"
const botToken = process.env.BOT_TOKEN || ""

module.exports = {
  port,
  baseUrl,
  environment,
  botToken
}