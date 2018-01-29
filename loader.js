const port = 3003

const bodyParser = require('body-parser')
const express = require('express');
const server = express();

server.use(bodyParser.urlencoded({ extended: true}))
server.use(bodyParser.json())

server.listen(port, function(){
    console.log('Sistema rodando na porta ' + port + '.')
})

server.use(function(req, res, next){
    console.log("Funcionou")
    next();
})