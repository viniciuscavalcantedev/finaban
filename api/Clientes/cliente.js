const restful = require('node-restful')
const mongoose = restful.mongoose

const clienteSchema = new mongoose.Schema({
    name: { type: String, required: true},
    
},{ versionKey: false})

module.exports = restful.model('Cliente', clienteSchema)

