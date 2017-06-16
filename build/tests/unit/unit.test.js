"use strict";
var helpers_1 = require("./config/helpers");
var service_1 = require("../../server/modules/Users/service");
describe('Testes Unitários do Service', function () {
    describe('Método Create', function () {
        it('Deve criar um novo Usuário', function () {
            var novoUsuario = {
                id: 1,
                name: "Novo usuário",
                email: 'novousuario@email.com',
                password: '1234',
            };
            var user = new service_1.default();
            return user.create(novoUsuario)
                .then(function (data) {
                console.log('aqui dentro');
                console.log(data);
                helpers_1.expect(data.dataValues).to.have.all.keys(['email', 'id', 'name', 'password', 'updatedAt', 'createdAt']);
            });
        });
    });
    describe('Método Update', function () {
        it('Deve atualizar um Usuário', function () {
            var usuarioAtualizado = {
                name: 'Nome Atualizado',
                email: 'atualizado@email.com'
            };
            var user = new service_1.default();
            return user.update(1, usuarioAtualizado).then(function (data) {
                helpers_1.expect(data[0]).to.be.equal(1);
            });
        });
    });
    describe('Método Get Users', function () {
        it('Deve retornar uma lista com todos usuários', function () {
            var user = new service_1.default();
            return user.getAll().then(function (data) {
                console.log('entrei no then do get');
                console.log(data);
                helpers_1.expect(data).to.be.an('array');
                helpers_1.expect(data[0]).to.have.all.keys(['id', 'email', 'name', 'password']);
            });
        });
    });
    describe('Método Delete', function () {
        it('Deve deletar um Usuários', function () {
            var user = new service_1.default();
            return user.delete(2).then(function (data) {
                helpers_1.expect(data).to.be.equal(1);
            });
        });
    });
});
//# sourceMappingURL=unit.test.js.map