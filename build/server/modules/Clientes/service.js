"use strict";
var interface_1 = require("./interface");
var model = require('../../models');
var Clientes = (function () {
    function Clientes() {
    }
    Clientes.prototype.create = function (cliente) {
        return model.clientes.create({
            nome: cliente.nome,
            email: cliente.email,
            password: cliente.password,
            telefones: cliente.telefones,
            enderecos: cliente.enderecos,
        }, {
            include: [{ model: model.telefones }, { model: model.enderecos }]
        });
    };
    Clientes.prototype.getAll = function () {
        console.log('getall');
        return model.clientes.findAll({
            include: [{ model: model.telefones }, { model: model.enderecos }]
        }, {
            order: ['nome']
        })
            .then(interface_1.createClientes);
    };
    Clientes.prototype.getById = function (id) {
        return model.clientes.findOne({
            where: { id: id }
        })
            .then(interface_1.createClienteById);
    };
    Clientes.prototype.getByEmail = function (email) {
        return model.clientes.findOne({
            where: { email: email }
        })
            .then(interface_1.createClienteByEmail);
    };
    Clientes.prototype.update = function (id, user) {
        return model.clientes.update(user, {
            where: { id: id },
            fields: ['nome', 'email', 'password'],
            hooks: true,
            individualHooks: true
        });
    };
    Clientes.prototype.delete = function (id) {
        console.log('aqui no service');
        return model.clientes.destroy({
            where: { id: id }
        });
    };
    return Clientes;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Clientes;
//# sourceMappingURL=service.js.map