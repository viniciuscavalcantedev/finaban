const restful = require('node-restful')
const mongoose = restful.mongoose
required: true
const obrigacaoSchema = new mongoose.Schema({
    nome: { type: String },
    regimeTributario: { type: String},
    data: { type: String},
},{ versionKey: false})

module.exports = restful.model('Obrigacao', obrigacaoSchema)