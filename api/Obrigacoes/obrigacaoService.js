const Obrigacao = require('./obrigacao')

Obrigacao.methods(['get', 'post'])
Obrigacao.updateOptions({new: true, rumValidators: true})

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

Obrigacao.route('count', function(req, res, next) {
  Obrigacao.count(function(error, value) {
    if(error) {
      res.status(500).json({errors: [error]})
    } else {
      res.json({value})
    }
  })
})

Obrigacao.route('lista', function(req, res, next) {
  Obrigacao.find({"regime":"Simples Nacional"}, function(err, obrigacao){
    res.json({obrigacao});
  })
})

module.exports = Obrigacao