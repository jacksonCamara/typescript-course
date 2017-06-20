"use strict";
var jwt = require("jwt-simple");
var helpers_1 = require("./config/helpers");
var HTTPStatus = require("http-status");
describe('Testes de Integracao', function () {
    'use strict';
    var config = require('../../server/config/env/config')();
    var model = require('../../server/models');
    var id;
    var token;
    var cliente = {
        nome: 'cliente',
        cpf: "0342098340932",
        email: 'cliente@email.com',
        password: 'cliente',
        telefones: [
            {
                numero: "AAAAAAAAA"
            },
            {
                numero: "BBBBBBBBBBBB"
            }
        ],
        enderecos: [
            {
                cep: "888888",
                rua: "88888888"
            },
            {
                cep: "9999999",
                rua: "99999999"
            }
        ]
    };
    var clienteSet = {
        nome: 'cliente1',
        cpf: "03420983409321",
        email: 'cliente@email.com1',
        password: 'cliente1',
        telefones: [
            {
                numero: "AAAAAAAAA1"
            },
            {
                numero: "BBBBBBBBBBBB1"
            }
        ],
        enderecos: [
            {
                cep: "8888881",
                rua: "888888881"
            },
            {
                cep: "99999991",
                rua: "999999991"
            }
        ]
    };
    beforeEach(function (done) {
        model.Clientes.destroy({
            where: {}
        }).then(function () {
            return model.Clientes.create(clienteSet);
        }).then(function (c) {
            model.Clientes.create(cliente)
                .then(function () {
                token = jwt.encode({ id: c.id }, config.secret);
                done();
            });
        }).catch(function (err) {
            console.log("deu erro no before each");
        });
    });
    describe('POST /token', function () {
        it('Deve receber um JWT', function (done) {
            var credentials = {
                email: clienteSet.email,
                password: clienteSet.password
            };
            helpers_1.request(helpers_1.app)
                .post('/token')
                .send(credentials)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.token).to.equal("" + token);
                done(error);
            });
        });
        it('Não deve gerar Token', function (done) {
            var credentials = {
                email: 'email@emailqualquer.com',
                password: 'qualquer'
            };
            helpers_1.request(helpers_1.app)
                .post('/token')
                .send(credentials)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.UNAUTHORIZED);
                helpers_1.expect(res.body).to.empty;
                done(error);
            });
        });
    });
    describe("POST /api/clientes/create", function () {
        it('Deve criar um novo usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .post('/api/clientes/create')
                .set('Content-Type', 'application/json')
                .set('Authorization', "JWT " + token)
                .send(cliente)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.payload.nome).to.equal(cliente.nome);
                helpers_1.expect(res.body.payload.email).to.equal(cliente.email);
                done(error);
            });
        });
    });
    describe("GET /api/clientes/:id", function () {
        it('Deve retornar um Json com apenas um usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .get("/api/clientes/1")
                .set('Content-Type', 'application/json')
                .set('Authorization', "JWT " + token)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.payload.id).to.equal(1);
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
                .put("/api/clientes/" + 1 + "/update")
                .set('Content-Type', 'application/json')
                .set('Authorization', "JWT " + token)
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
                .set('Content-Type', 'application/json')
                .set('Authorization', "JWT " + token)
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
                .delete("/api/clientes/" + 1 + "/destroy")
                .set('Content-Type', 'application/json')
                .set('Authorization', "JWT " + token)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                done(error);
            });
        });
    });
});
//# sourceMappingURL=integration.test.js.map