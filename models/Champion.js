const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Champion = new Schema({
    gamertag: String,
    gamePlayed: String,
    record: Array
})

module.exports = mongoose.model('Champion', Champion)