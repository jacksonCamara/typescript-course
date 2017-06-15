"use strict";
var http = require("http");
var api_1 = require("./api/api");
var models = require('./models');
var config = require('./config/env/config')(); //Abre e fecha parentese já faz a função ser executada na chamada, sem ele apenas seria chamada a funcao e depois teria que ser executada
var server = http.createServer(api_1.default);
var envi = "" + process.env.NODE_ENV;
console.log("NODE_ENV" + envi);
models.sequelize.sync().then(function () {
    server.listen(config.serverPort);
    server.on('listening', function () { return console.log("Servidor esta Rodando na porta " + config.serverPort); });
    server.on('error', function (error) { return console.log("Ocorreu um erro: " + error); });
});
//# sourceMappingURL=server.js.map