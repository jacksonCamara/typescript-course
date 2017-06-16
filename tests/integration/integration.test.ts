import * as jwt from 'jwt-simple';
import { app, request, expect } from './config/helpers';
import * as HTTPStatus from 'http-status';
describe('Testes de Integracao', () => {


    'use strict';
    const config = require('../../server/config/env/config')();
    const model = require('../../server/models');

    let id;
    let token;


    const cliente = {
        nome: 'cliente',
        email: 'cliente@email.com',
        password: 'cliente'
    };

    const clienteSet = {
        id: 1,
        nome: 'jackson',
        email: 'jackson@email.com',
        password: '123'
    }


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




    describe("POST /api/clientes/create", () => {
        it('Deve criar um novo usuário', done => {
            request(app)
                .post('/api/clientes/create')
                .set('Content-Type', 'application/json')
                .set('Authorization', `JWT ${token}`)
                .send(cliente)
                .end((error, res) => {
                    expect(res.status).to.equal(HTTPStatus.OK);
                    expect(res.body.payload.nome).to.equal(cliente.nome);
                    expect(res.body.payload.email).to.equal(cliente.email);
                    expect(res.body.payload.password).to.equal(cliente.password);
                    done(error);
                })
        })
    })

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
                .put(`/api/clientes/${10}/update`)
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
                .delete(`/api/clientes/${11}/destroy`)
                .set('Content-Type', 'application/json')
                .set('Authorization', `JWT ${token}`)
                .end((error, res) => {
                    expect(res.status).to.equal(HTTPStatus.OK);
                    done(error);
                })
        });
    });




})