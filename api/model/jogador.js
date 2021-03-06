const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    apelido: String,
    posicao: Array,
    foto: String,
    data_nascimento: Date,
    perna_preferida: String,
    altura: Number
})

module.exports = schema