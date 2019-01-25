const express = require('express')
const router = express.Router()




const tournamentController = require('../controllers/tournamentController')


router.get('/tournaments', tournamentController.index)
router.post('/tournaments', tournamentController.create)
router.get('/tournaments/:tournamentId', tournamentController.getTournament)





module.exports = router