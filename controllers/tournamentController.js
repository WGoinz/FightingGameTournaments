const Tournament = require('../models/Tournament')


const tournamentController = {
    index: async (req, res) => {
        try {
            const tournaments = await Tournament.find({})
            res.json(tournaments)
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = tournamentController