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
                password: '1234'
            };
            var user = new service_1.default();
            return user.create(novoUsuario)
                .then(function (data) {
                helpers_1.expect(data.dataValues).to.have.all.keys(['email', 'id', 'name', 'password', 'updatedAt', 'createdAt']);
            });
        });
    });
    /*
        describe('Método Update', () => {
            it('Deve atualizar um Usuário', () => {
    
            })
        })
    
        describe('Método Get Users', () => {
            it('Deve retornar uma lista com todos usuários', () => {
    
            })
        })
    
        describe('Método Delete', () => {
            it('Deve deletar um Usuários', () => {
    
            })
        })
    */
});
//# sourceMappingURL=unit.test.js.map