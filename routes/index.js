const express = require('express')
const router = express.Router()
const request = require('request');




const tournamentController = require('../controllers/tournamentController')


router.get('/tournaments', tournamentController.index)
router.get('/tournaments/specific', tournamentController.getTournament)




module.exports = router