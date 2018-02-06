const restful = require('node-restful')
const mongoose = restful.mongoose
required: true
const clienteSchema = new mongoose.Schema({
    nomeFantasia: { type: String },
    nomeRazaoSocial: { type: String},
    endereco: { type: String},
    numeroEndereco: { type: Number,  min: 0},
    complemento: { type: String},
    bairro: { type: String},
    referencia: { type: String},
    cidade: { type: String},
    uf: { type: String},
    cep: { type: String},
    telefone: { type: String},
    email: { type: String}
},{ versionKey: false})

module.exports = restful.model('Cliente', clienteSchema)

