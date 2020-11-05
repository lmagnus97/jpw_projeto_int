const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    fundacao: Date,
    categoria: String,
    modos: Array,
    jogadores: Array,
    emblema: String,
    cor_principal: String,
    cor_uniforme: String
})

module.exports = schema