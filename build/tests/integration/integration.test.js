"use strict";
var helpers_1 = require("./config/helpers");
var HTTPStatus = require("http-status");
describe('Testes de Integracao', function () {
    'use strict';
    var config = require('../../server/config/env/config')();
    var model = require('../../server/models');
    var id;
    var userTest = {
        id: 11,
        name: 'Usuário Teste',
        email: 'teste@email.com',
        password: 'teste'
    };
    var userDefault = {
        id: 10,
        name: 'Default User',
        email: 'default@gmail.com',
        password: 'default'
    };
    /**
     *
     
        beforeEach((done) => {
            model.User.destroy({
                where: {}
            }).then(() => {
                return model.User.create(userDefault);
            }).then(user => {
                model.User.create(userTest)
                    .then(() => {
                        done();
                    })
            }).catch(err =>{
                console.log("deu erro no before each")
            })
        })
    */
    describe("POST /api/users/create", function () {
        it('Deve criar um novo usuário', function (done) {
            var user = {
                name: "Usuario Teste111",
                email: 'usuario@email.com111',
                password: 'novouser111'
            };
            helpers_1.request(helpers_1.app)
                .post('/api/users/create')
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.payload.name).to.equal(user.name);
                helpers_1.expect(res.body.payload.email).to.equal(user.email);
                done(error);
            });
        });
    });
    describe("GET /api/users/:id", function () {
        it('Deve retornar um Json com apenas um usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .get("/api/users/1")
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.payload.id).to.equal(1);
                helpers_1.expect(res.body.payload).to.have.all.keys([
                    'id', 'name', 'email'
                ]);
                id = res.body.payload.id;
                done(error);
            });
        });
    });
    describe("PUT /api/users/all:id/update", function () {
        it('Deve atualizar um usuário', function (done) {
            var user = {
                name: "TesteUpdate",
                email: "jogo"
            };
            helpers_1.request(helpers_1.app)
                .put("/api/users/2/update")
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                done(error);
            });
        });
    });
    /*
    
    
        describe("GET /api/users/all", () => {
            it('Deve retornar um Json com todos os Usuários', done => {
                request(app)
                    .get('/api/users/all')
                    .end((error, res) => {
                        expect(res.status).to.equal(HTTPStatus.OK);
                        expect(res.body.payload).to.be.an('array');
                        expect(res.body.payload[0].name).to.be.equal(userDefault.name);
                        expect(res.body.payload[0].email).to.be.equal(userDefault.email);
                        done(error);
                    })
            });
        });
    
    
    
    
    
        describe("PUT /api/users/all:id/update", () => {
            it('Deve atualizar um usuário', done => {
                const user = {
                    nome: "TesteUpdate"
                }
                request(app)
                    .put(`/api/users/${6}/update`)
                    .send(user)
                    .end((error, res) => {
                        expect(res.status).to.equal(HTTPStatus.OK);
                        done(error);
                    })
            })
        })
    
    */
});
//# sourceMappingURL=integration.test.js.map