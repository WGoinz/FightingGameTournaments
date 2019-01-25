const express = require('express')
const router = express.Router()




const tournamentController = require('../controllers/tournamentController')


router.get('/tournaments', tournamentController.index)
router.post('/tournaments', tournamentController.create)
router.get('/tournaments/:tournamentId', tournamentController.show)
router.get('/tournaments/getNew/:tournamentId', tournamentController.getTournament)
router.put('/tournaments/:tournamentId', tournamentController.update)
router.delete('/tournaments/:tournamentId', tournamentController.delete)







module.exports = router