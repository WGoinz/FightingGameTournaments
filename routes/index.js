const express = require('express')
const router = express.Router()




const tournamentController = require('../controllers/tournamentController')
const championController = require('../controllers/championController')


router.get('/tournaments', tournamentController.index)
router.post('/tournaments', tournamentController.create)
router.get('/tournaments/:tournamentId', tournamentController.show)
router.get('/tournaments/getNew/:tournamentId', tournamentController.getTournament)
router.put('/tournaments/:tournamentId', tournamentController.update)
router.delete('/tournaments/:tournamentId', tournamentController.delete)

router.get('/tournaments/:tournamentId/champions', championController.index)
router.get('/tournaments/:tournamentId/champions/:championId', championController.show)
router.delete('/tournaments/:tournamentId/champions/:championId', championController.delete)









module.exports = router