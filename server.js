const express = require('express')
const database = require('./startup/database')
const routes = require('./routes')
const logger = require('morgan')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))
app.use(routes)

database.connect().then(() => {
  app.listen(3333, () => console.log('App started at http://localhost:3333'))
})
