const restful = require('node-restful')
const mongoose = restful.mongoose
required: true
const pendenciaSchema = new mongoose.Schema({
    empresaFantasia: { type: String },
    empresaRazaoSocial: { type: String},
    entrega: { type: String},
    obrigação: { type: String},
    regime: { type: String},
    situacao: { type: String},
},{ versionKey: false})

module.exports = restful.model('Pendencia', pendenciaSchema)

