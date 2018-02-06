const Cliente = require('./cliente')
const Obrigacao = require('../Obrigacoes/obrigacao')


Cliente.methods(['get', 'post'])
Cliente.updateOptions({new: true, rumValidators: true})

function sendErrorsOrNext(req, res, next) {
  const bundle = res.locals.bundle

  if(bundle.errors) {
    var errors = parseErrors(bundle.errors)
    res.status(500).json({errors})
  } else {
    next()
  }
}

function parseErrors(nodeRestfulErrors) {
  const errors = []
  _.forIn(nodeRestfulErrors, error => errors.push(error.message))
  return errors
}

Cliente.route('novo', function(req, res, next) {
 
  /*Cliente.count(function(error, value) {
    if(error) {
      res.status(500).json({errors: [error]})
    } else {
      //res.json({value})
    }
  })*/
})

Cliente.route('obrigacao', function(req, res, next) {
    Obrigacao.count(function(error, value) {
    if(error) {
      res.status(500).json({errors: [error]})
    } else {
      res.json({value})
    }
  })
})


module.exports = Cliente