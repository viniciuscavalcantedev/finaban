const Cliente = require('./cliente')
const Obrigacao = require('../Obrigacoes/obrigacao')
const Pendencia = require('../Pendencias/pendencia')


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

Cliente.route('novo', function(req, res, next)  {
    Cliente.collection.insert(req.body, function(){
      geraPendencia(req.body)
    })
})

function geraPendencia(empresa){
  Obrigacao.find({"regime":empresa.regime}, function(err, obrigacao){
    for(var i = 0; i < obrigacao.length; i++){
      data = new Date
      pendencia = {
        "empresaFantasia": empresa.nomeFantasia,
        "empresaRazaoSocial": empresa.nomeRazaoSocial,
        "entrega": obrigacao[i].dia + "/" + data.getMonth() + "/" + data.getFullYear(),
        "obrigação": obrigacao[i].nome,
        "regime":  obrigacao[i].regime,
        "situacao": "Pendente"
      }
      
      Pendencia.collection.insert(pendencia, function(err, obrigacao){
        
      })
    }
  })
}


module.exports = Cliente


/*

Obrigacao.count(function(error, value) {
    if(error) {
      res.status(500).json({errors: [error]})
    } else {
      res.json({value})
    }
  })

*/