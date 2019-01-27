const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Tournament = new Schema({
    name: String,
    url: String,
    date: String,
    location: String,
    phases: [],
    champions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Champion'
        }
    ]
})

module.exports = mongoose.model('Tournament', Tournament)