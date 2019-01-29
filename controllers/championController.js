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
    },
    show: async (req, res) => {
        const championId = req.params.championId
        try {
            const champion = await Champion.findById(championId)
            res.json(champion)
        } catch (err) {
            console.log(err)
        }
    },
    create: (req, res) => {
        const tournamentId = req.params.tournamentId
        Tournament.findById(tournamentId).then((tournament) => {
            Champion.create(req.body).then(champion => {
                tournament.champions.push(champion)
                tournament.save()
                res.json(tournament)
            })
        })
        // try {
        //     const tournamentId = req.params.tournamentId
        //     const tournament = Tournament.findById(tournament)
        //     const newChampion = req.body
        //     const savedChampion = await Champion.create(newChampion)
        //     tournament.champions.push(savedChampion)
        //     res.json(savedChampion)
        // } catch (err) {
        //     console.log(err)
        //     res.status(500).json(err)
        // }
    },
    delete: async (req, res) => {
        try {
            const tournamentId = req.params.tournamentId
            const championId = req.params.championId
            await Champion.findByIdAndRemove(championId)
            res.json({
                "msg": "Successfully Deleted",
                "redirect": `/tournaments/${tournamentId}/champions`
            })
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }
}

module.exports = championController