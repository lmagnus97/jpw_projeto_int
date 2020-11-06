const express = require("express");
const mongoose = require("../../db/connect");
const router = express.Router();
var Schema = require("../../model/auth");
var Model = mongoose.model("Auth", Schema, "autenticacao");

router.get("/", function (req, res) {

  Model.findOne({ usuario: req.body.usuario, senha: req.body.senha }, function (err, doc) {
    if (!err) {
      res.status(200).json({ key: doc.key });
    } else {
      res.status(500).json({ erro: "Dados inválidos!" });
    }
  });
});

module.exports = router;
