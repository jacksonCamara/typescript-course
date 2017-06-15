"use strict";
var helpers_1 = require("./config/helpers");
var HTTPStatus = require("http-status");
describe('Testes de Integracao', function () {
    'use strict';
    var config = require('../..server/config/env/config')();
    var model = require('../../server/models');
    var id;
    var userTest = {
        id: 100,
        name: 'Usuário Teste',
        email: 'teste@email.com',
        password: 'teste'
    };
    var userDefault = {
        id: 1,
        name: 'Default User',
        email: 'default@gmail.com',
        password: 'default'
    };
    beforeEach(function (done) {
        model.User.destroy({
            where: {}
        }).then(function () {
            return model.User.create(userDefault);
        }).then(function (user) {
            model.User.create(userTest)
                .then(function () {
                done();
            });
        });
    });
    describe("GET /api/users/all", function () {
        it('Deve retornar um Json com todos os Usuários', function (done) {
            helpers_1.request(helpers_1.app)
                .get('/api/users/all')
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.payload).to.be.an('array');
                helpers_1.expect(res.body.payload[0].name).to.be.equal(userDefault.name);
                helpers_1.expect(res.body.payload[0].email).to.be.equal(userDefault.email);
                done(error);
            });
        });
    });
    describe("GET /api/users/:id", function () {
        it('Deve retornar um Json com apenas um usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .get("/api/users/" + userDefault.id)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.payload.id).to.equal(userDefault.id);
                helpers_1.expect(res.body.payload).to.have.all.keys([
                    'id', 'name', 'email', 'password'
                ]);
                id = res.body.payload.id;
                done(error);
            });
        });
    });
    describe("POST /api/users/create", function () {
        it('Deve criar um novo usuário', function (done) {
            var user = {
                id: 2,
                name: "Usuario Teste",
                email: 'usuario@email.com',
                password: 'novouser'
            };
            helpers_1.request(helpers_1.app)
                .post("/api/users/create")
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.payload.id).to.equal(user.id);
                helpers_1.expect(res.body.payload.name).to.equal(user.name);
                helpers_1.expect(res.body.payload.email).to.equal(user.email);
                done(error);
            });
        });
    });
    describe("PUT /api/users/all:id/update", function () {
        it('Deve atualizar um usuário', function (done) {
            var user = {
                nome: "TesteUpdate"
            };
            helpers_1.request(helpers_1.app)
                .put("/api/users/" + 1 + "/update")
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                done(error);
            });
        });
    });
    describe("DELETE /api/users/:id/destroy", function () {
        it('Deve deletar um usuario', function (done) {
            helpers_1.request(helpers_1.app)
                .delete("/api/users/" + 1 + "/destroy")
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                done(error);
            });
        });
    });
});
//# sourceMappingURL=integration.test.js.map