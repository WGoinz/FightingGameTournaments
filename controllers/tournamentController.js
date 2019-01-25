const Tournament = require('../models/Tournament')
const request = require('request');



const tournamentController = {
    index: async (req, res) => {
        try {
            const tournaments = await Tournament.find({})
            res.json(tournaments)
        } catch (err) {
            console.log(err)
        }
    },
    create: async (req, res) => {
        try {
            console.log(req.body)
            const newTournament = req.body
            const savedTournament = await Tournament.create(newTournament)
            res.json(savedTournament)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    show: (req, res) => {
        const tournamentId = req.params.tournamentId
        Tournament.findById(tournamentId).then((tournament) => {
            res.send(tournament)
        })
    },
    getTournament: (req, res) => {
        // let getTournament = new smashgg.Tournament("gbwk46");
        // res.json(getTournament)
        const newUrl = req.body.url
        console.log(req.body.url)
        request.get(`${newUrl}`, (error, response, body) => {
            if (error) {
                return console.dir(error);
            }
            else {
                // console.log(JSON.parse(body))
                const passed = JSON.parse(body)
                const tournament = passed.entities.tournament
                res.send(tournament)
            }
        })
    },
    update: async (req, res) => {
        try {
            const tournamentId = req.params.tournamentId
            const updatedTournament = req.body
            const savedTournament = await Tournament.findByIdAndUpdate(tournamentId, updatedTournament)
            res.json(savedTournament)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    delete: async (req, res) => {
        try {
            const tournamentId = req.params.tournamentId
            await Tournament.findByIdAndRemove(tournamentId)
            res.json({
                "msg": "Successfully Deleted",
                "redirect": "/"
            })
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }
}


module.exports = tournamentController