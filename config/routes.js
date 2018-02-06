const express = require('express')

module.exports = function(server){
    const router = express.Router()
    server.use('/api', router)

    const clienteService = require('../api/Clientes/clienteService')
    clienteService.register(router, '/cliente')

    const obrigacaoService = require('../api/Obrigacoes/obrigacaoService')
    obrigacaoService.register(router, '/obrigacao')
}