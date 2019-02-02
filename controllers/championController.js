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
    getPhaseGroup: (req, res) => {
        // let getTournament = new smashgg.Tournament("gbwk46");
        // res.json(getTournament)
        const phaseGroupId = parseInt(req.body.gamertag)
        // console.log(req.body.gamertag)
        request.get(`https://api.smash.gg/phase_group/${phaseGroupId}?expand[]=sets&expand[]=seeds`, (error, response, body) => {
            if (error) {
                return console.dir(error);
            }
            else {
                // console.log(JSON.parse(body))
                const passed = JSON.parse(body)
                res.send(passed)
            }
        })
    },
    update: async (req, res) => {
        try {
            const tournamentId = req.params.tournamentId
            const champion = req.params.championId
            const updatedChampion = req.body
            const savedChampion = await Champion.findByIdAndUpdate(champion, updatedChampion, { new: true })
            res.json(savedChampion)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    delete: async (req, res) => {
        try {
            const tournamentId = req.params.tournamentId
            const championId = req.params.championId
            await Champion.findByIdAndRemove(championId)
            res.json({
                "msg": "Successfully Deleted",
                "redirect": `/tournaments/${tournamentId}`
            })
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    standings: async (req, res) => {
        const tournamentId = req.params.tournamentId
        const championId = req.params.championId
        try {
            const champion = await Champion.findById(championId)
            res.json(champion)
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = championController