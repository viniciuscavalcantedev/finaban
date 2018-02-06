const restful = require('node-restful')
const mongoose = restful.mongoose
required: true
const obrigacaoSchema = new mongoose.Schema({
    nome: { type: String },
    regime: { type: String},
    dia: { type: String},
    mes: { type: String},
},{ versionKey: false})

module.exports = restful.model('Obrigacao', obrigacaoSchema)