"use strict";
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
    /*
        beforeEach((done) => {
            model.Clientes.destroy({
                where: {}
            }).then(() => {
                return model.Clientes.create(clienteSet);
            }).then(c => {
                model.Clientes.create(cliente)
                    .then(() => {
                        token = jwt.encode({ id: c.id }, config.secret)
                        done();
                    })
            }).catch(err => {
                console.log("deu erro no before each")
            })
        })
    
    
        describe('POST /token', () => {
            it('Deve receber um JWT', done => {
                const credentials = {
                    email: clienteSet.email,
                    password: clienteSet.password
                };
                request(app)
                    .post('/token')
                    .send(credentials)
                    .end((error, res) => {
                        expect(res.status).to.equal(HTTPStatus.OK);
                        expect(res.body.token).to.equal(`${token}`)
                        done(error);
                    });
            });
    
            it('Não deve gerar Token', done => {
                const credentials = {
                    email: 'email@emailqualquer.com',
                    password: 'qualquer'
                };
                request(app)
                    .post('/token')
                    .send(credentials)
                    .end((error, res) => {
                        expect(res.status).to.equal(HTTPStatus.UNAUTHORIZED);
                        expect(res.body).to.empty;
                        done(error);
                    })
            })
        })
    
    
    
    */
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
    /*
        describe("GET /api/clientes/:id", () => {
            it('Deve retornar um Json com apenas um usuário', done => {
                request(app)
                    .get(`/api/clientes/1`)
                    .set('Content-Type', 'application/json')
                    .set('Authorization', `JWT ${token}`)
                    .end((error, res) => {
                        expect(res.status).to.equal(HTTPStatus.OK);
                        expect(res.body.payload.id).to.equal(1)
                        expect(res.body.payload).to.have.all.keys([
                            'id', 'nome', 'email', 'password'
                        ]);
                        id = res.body.payload.id;
                        done(error);
                    });
            });
        });
    
        describe("PUT /api/clientes/all:id/update", () => {
            it('Deve atualizar um usuário', done => {
                request(app)
                    .put(`/api/clientes/${1}/update`)
                    .set('Content-Type', 'application/json')
                    .set('Authorization', `JWT ${token}`)
                    .send(clienteSet)
                    .end((error, res) => {
                        expect(res.status).to.equal(HTTPStatus.OK);
                        done(error);
                    })
            })
        })
    
    
        describe("GET /api/clientes/all", () => {
            it('Deve retornar um Json com todos os Usuários', done => {
                request(app)
                    .get('/api/clientes/all')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', `JWT ${token}`)
                    .end((error, res) => {
                        expect(res.status).to.equal(HTTPStatus.OK);
                        expect(res.body.payload).to.be.an('array');
                        expect(res.body.payload[0].nome).to.be.equal(cliente.nome);
                        expect(res.body.payload[0].email).to.be.equal(cliente.email);
                        done(error);
                    })
            });
        });
    
        describe("DELETE /api/clientes/:id/destroy", () => {
            it('Deve deletar o usuário', done => {
                console.log('integration delete')
                request(app)
                    .delete(`/api/clientes/${1}/destroy`)
                    .set('Content-Type', 'application/json')
                    .set('Authorization', `JWT ${token}`)
                    .end((error, res) => {
                        expect(res.status).to.equal(HTTPStatus.OK);
                        done(error);
                    })
            });
        });
    */
});
//# sourceMappingURL=integration.test.js.map