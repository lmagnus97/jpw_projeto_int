const express = require('express')
const mongoose = require("./api/db/connect");
var Schema_auth = require("./api/model/auth");
var Autenticador = mongoose.model("Auth", Schema_auth, "autenticacao");

const app = express()
var rotas = {
    "jogador": require('./api/routes/jogador'),
    "time": require('./api/routes/time'),
    "jogo": require('./api/routes/jogo'),
    "auth": require('./api/routes/auth'),
}

app.use(express.json())
app.use('/auth', rotas.auth)

var login = function (req, res, next) {

    Autenticador.countDocuments({ key: req.query.key }, function (err, count) {
        console.log(req.query.key)
        if (err || req.params.key || count == 0) {
            res.status(401).json({ erro: "Sem autorização!" });
        } else {
            next()
        }
    });

};

app.use(login);

app.use('/jogador', rotas.jogador)
app.use('/time', rotas.time)
app.use('/jogo', rotas.jogo)

app.listen(3000)
