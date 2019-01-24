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
    getTournament: (req, res) => {
        // let getTournament = new smashgg.Tournament("gbwk46");
        // res.json(getTournament)
        request.get("https://api.smash.gg/tournament/gbwk48", (error, response, body) => {
            if (error) {
                return console.dir(error);
            }
            else {
                console.log(JSON.parse(body))
                const passed = JSON.parse(body)
                const tournament = passed.entities.tournament
                res.send(tournament)
            }
        })
    }
}

module.exports = tournamentController