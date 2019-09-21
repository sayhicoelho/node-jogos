const mongoose = require('mongoose')

const db = {
  host: 'localhost',
  port: 27017,
  name: 'jogos'
}

const options = {
  user: 'admin',
  pass: 'admin',
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
}

const uri = `mongodb://${db.host}:${db.port}/${db.name}`

function connect() {
  return mongoose.connect(uri, options)
}

module.exports = { connect }
