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
        email: 'cliente@email.com',
        password: 'cliente',
        telefones: [
            {
                numero: "996265259"
            },
            {
                numero: "996440183"
            }
        ],
        enderecos: [
            {
                rua: "hortensias",
                numeroResidencia: "605",
                bairro: "teste",
                cidade: "itajaí",
                estado: "SC"
            },
            {
                rua: "stringari",
                numeroResidencia: "555",
                bairro: "teste",
                cidade: "itajaí",
                estado: "SC"
            }
        ]
    };
    var clienteSet = {
        nome: 'aaaaaaa',
        email: 'aaaaaaa',
        password: 'aaaaaaa',
        telefones: [
            {
                numero: "aaaaaaa"
            },
            {
                numero: "aaaaaaa"
            }
        ],
        enderecos: [
            {
                rua: "aaaaaaa",
                numeroResidencia: "aaaaaaa",
                bairro: "aaaaaaa",
                cidade: "aaaaaaa",
                estado: "aaaaaaa"
            },
            {
                rua: "aaaaaaa",
                numeroResidencia: "aaaaaaa",
                bairro: "aaaaaaa",
                cidade: "aaaaaaa",
                estado: "aaaaaaa"
            }
        ]
    };
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
    describe("POST /api/clientes/create", function () {
        it('Deve criar um novo usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .post('/api/clientes/create')
                .send(clienteSet)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.payload.nome).to.equal(clienteSet.nome);
                helpers_1.expect(res.body.payload.email).to.equal(clienteSet.email);
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