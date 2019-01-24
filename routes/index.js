const express = require('express')
const router = express.Router()

const tournamentController = require('../controllers/tournamentController')


router.get('/tournaments', tournamentController.index)


module.exports = router