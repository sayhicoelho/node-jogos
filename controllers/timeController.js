const Time = require('../schemas/timeSchema')

async function getAll(req, res) {
  const times = await Time.find({})

  res.json({ times })
}

async function create(req, res) {
  const { nome } = req.body

  if (!nome)
    return res.status(400).json({ error: 'Um nome é requerido.' })

  const data = {
    nome
  }

  const time = await Time.create(data)

  res.json({ time })
}

module.exports = {
  getAll,
  create
}
