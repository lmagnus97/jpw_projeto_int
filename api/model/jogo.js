const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    data: Date,
    time_casa: String,
    time_visitante: Array,
    placar_casa: Array,
    placar_visitante: String,
    estadio: String,
    modo: String,
    status: {
        type: String,
        default: "A"
    }
})

module.exports = schema