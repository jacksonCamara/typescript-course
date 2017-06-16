"use strict";
var helpers_1 = require("./config/helpers");
var HTTPStatus = require("http-status");
describe('Testes de Integracao', function () {
    'use strict';
    var config = require('../../server/config/env/config')();
    var model = require('../../server/models');
    var id;
    var cliente = {
        nome: 'cliente',
        email: 'cliente@email.com',
        password: 'cliente'
    };
    var clienteSet = {
        id: 10,
        nome: 'clienteSet',
        email: 'clienteset@email.com',
        password: 'clienteSet'
    };
    /*
       beforeEach((done) => {
           model.Clientes.destroy({
               where: {}
           }).then(() => {
               return model.Clientes.create(userDefault);
           }).then(user => {
               model.Clientes.create(userTest)
                   .then(() => {
                       done();
                   })
           }).catch(err =>{
               console.log("deu erro no before each")
           })
       })
   */
    describe("POST /api/clientes/create", function () {
        it('Deve criar um novo usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .post('/api/clientes/create')
                .send(cliente)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.payload.nome).to.equal(cliente.nome);
                helpers_1.expect(res.body.payload.email).to.equal(cliente.email);
                helpers_1.expect(res.body.payload.password).to.equal(cliente.password);
                done(error);
            });
        });
    });
    describe("GET /api/clientes/:id", function () {
        it('Deve retornar um Json com apenas um usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .get("/api/clientes/10")
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.payload.id).to.equal(10);
                helpers_1.expect(res.body.payload).to.have.all.keys([
                    'id', 'nome', 'email', 'password'
                ]);
                id = res.body.payload.id;
                done(error);
            });
        });
    });
    describe("PUT /api/clientes/all:id/update", function () {
        it('Deve atualizar um usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .put("/api/clientes/" + 10 + "/update")
                .send(clienteSet)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                done(error);
            });
        });
    });
    describe("GET /api/clientes/all", function () {
        it('Deve retornar um Json com todos os Usuários', function (done) {
            helpers_1.request(helpers_1.app)
                .get('/api/clientes/all')
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.payload).to.be.an('array');
                helpers_1.expect(res.body.payload[0].nome).to.be.equal(cliente.nome);
                helpers_1.expect(res.body.payload[0].email).to.be.equal(cliente.email);
                done(error);
            });
        });
    });
    describe("DELETE /api/clientes/:id/destroy", function () {
        it('Deve deletar o usuário', function (done) {
            console.log('integration delete');
            helpers_1.request(helpers_1.app)
                .delete("/api/clientes/" + 11 + "/destroy")
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                done(error);
            });
        });
    });
});
//# sourceMappingURL=integration.test.js.map