const Tournament = require('../models/Tournament')
const Champion = require('../models/Champion')
const request = require('request');

const championController = {
    index: async (req, res) => {
        const tournamentId = req.params.tournamentId
        try {
            const champions = await Tournament.findById(tournamentId).populate('champions')
            res.json(champions.champions)
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = championController