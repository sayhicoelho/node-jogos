const Time = require('../schemas/timeSchema')
const Jogo = require('../schemas/jogoSchema')

async function getAll(req, res) {
  const jogos = await Jogo.find({}).populate('time1', 'nome').populate('time2', 'nome')

  res.json({ jogos })
}

function create(req, res) {
  const { time1, time2 } = req.body

  if (!time1 || !time2)
    return res.status(400).json({ error: 'Os campos time1 e time2 são obrigatórios.' })

  if (time1 == time2)
    return res.status(400).json({ error: 'Um time não pode jogar contra ele mesmo!' })

  Promise.all([
    Time.findOne({ nome: time1 }),
    Time.findOne({ nome: time2 })
  ]).then(async times => {
    if (!times[0] || !times[1])
      return res.status(404).json({ error: 'Um dos times não foram encontrados em nossa base de dados. Por favor, verifique se digitou os nomes corretamente.' })

    const data = {
      time1ID: times[0]._id,
      time2ID: times[1]._id
    }

    const jogo = await Jogo.create(data)

    res.json({ jogo })
  })
}

async function comecar(req, res) {
  const { id } = req.params
  const comecouEm = new Date()
  const jogo = await Jogo.findByIdAndUpdate(id, { comecouEm })

  if (!jogo)
    return res.status(404).json({ error: 'Jogo não encontrado.' })

  return res.json({ message: 'Jogo iniciado.' })
}

async function terminar(req, res) {
  const { id } = req.params
  const terminouEm = new Date()
  const jogo = await Jogo.findByIdAndUpdate(id, { terminouEm })

  if (!jogo)
    return res.status(404).json({ error: 'Jogo não encontrado.' })

  return res.json({ message: 'Jogo finalizado.' })
}

module.exports = {
  getAll,
  create,
  comecar,
  terminar
}
