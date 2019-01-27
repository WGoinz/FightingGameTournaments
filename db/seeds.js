const mongoose = require('mongoose')
const Tournament = require('../models/Tournament')
const Champion = require('../models/Champion')

const Neon = new Champion({
    gamertag: "Neon",
    gamePlayed: "SFV",
    record: "6-0"
})
const Soriku = new Champion({
    gamertag: "Soriku",
    gamePlayed: "SFV",
    record: "5-1"
})
const Kb = new Champion({
    gamertag: "KB",
    gamePlayed: "SFV",
    record: "4-1"
})
const Dapvip = new Champion({
    gamertag: "DapVip",
    gamePlayed: "SFV",
    record: "7-0"
})

const weeklyDojo = new Tournament({
    name: "The Weekly Dojo 48",
    url: "https://smash.gg/gbwk48",
    date: "1-14-19",
    location: "The Wasteland Gaming",
    phases: [1, 2, 3],
    champions: [Neon, Soriku]
})
const gwinnettBrawl = new Tournament({
    name: "Gwinnett Brawl",
    url: "https://smash.gg/gb63",
    date: "1-12-19",
    location: "The Wasteland Gaming",
    phases: [4, 5, 6],
    champions: [Kb, Dapvip]
})



Tournament.remove({})
    .then(() => Champion.remove({}))
    .then(() => Champion.insertMany([Neon, Soriku, Kb, Dapvip]))
    .then(() => weeklyDojo.save())
    .then(() => gwinnettBrawl.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())