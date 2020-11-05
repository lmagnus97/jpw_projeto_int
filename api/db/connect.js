mongoose = require('mongoose')
mongoose.connect("mongodb+srv://dbShop:96589680@cluster0.crm8y.gcp.mongodb.net/dbsoccer?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
module.exports = mongoose