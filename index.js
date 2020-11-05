const express = require('express')
const app = express()
var rotas = {
    "jogador" : require('./api/routes/jogador'),
    /*"time" : require('./api/routes/time'),
    "jogo" : require('./api/routes/jogo'),*/
}

app.use(express.json())
app.use('/jogador', rotas.jogador)
/*app.use('/time', rotas.time)
app.use('/jogo', rotas.jogo)*/

app.listen(3000)
