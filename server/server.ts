import * as http from 'http';
import Api from './api/api';
const models =  require('./models');
const config = require('./config/env/config')(); //Abre e fecha parentese já faz a função ser executada na chamada, sem ele apenas seria chamada a funcao e depois teria que ser executada
const server = http.createServer(Api);

var envi = `${process.env.NODE_ENV}`
console.log("NODE_ENV" + envi)

models.sequelize.sync().then(() =>{
server.listen(config.serverPort);
server.on('listening', () => console.log(`Servidor esta Rodando na porta ${config.serverPort}`));
server.on('error',  (error: NodeJS.ErrnoException) => console.log(`Ocorreu um erro: ${error}`));
})

//{force: "true"}