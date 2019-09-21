const { Router } = require('express')
const timeController = require('../controllers/timeController')
const jogoController = require('../controllers/jogoController')

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Hello World! '})
})

router.get('/times', timeController.getAll)
router.post('/times', timeController.create)

router.get('/jogos', jogoController.getAll)
router.post('/jogos', jogoController.create)
router.patch('/jogos/:id/comecar', jogoController.comecar)
router.patch('/jogos/:id/terminar', jogoController.terminar)

module.exports = router
