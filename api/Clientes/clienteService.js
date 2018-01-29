const Cliente = require('./cliente')

Cliente.methods(['get', 'post'])

Cliente.updateOptions({new: true, rumValidators: true})

module.exports = Cliente