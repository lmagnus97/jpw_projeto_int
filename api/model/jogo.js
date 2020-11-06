const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    data: {
        type: Date,
        require: true
    },
    time_casa: {
        type: String,
        require: true
    },
    time_visitante: {
        type: String,
        require: true
    },
    placar_casa: {
        type: Number,
        default: 0
    },
    placar_visitante: {
        type: Number,
        default: 0
    },
    local: String,
    modo: String,
    status: {
        type: String,
        default: "A"
    }
})

module.exports = schema