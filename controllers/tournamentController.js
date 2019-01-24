const Tournament = require('../models/Tournament')


const tournamentController = {
    index: (req, res) => {
        Creature.find().then((creatures) => {
            res.json(creatures)
        }).catch((err) => {
            console.log(err)
        })
    }
}

module.exports = tournamentController