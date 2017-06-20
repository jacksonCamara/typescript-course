"use strict";
function createCliente(_a) {
    var id = _a.id, nome = _a.nome, cpf = _a.cpf, email = _a.email, password = _a.password;
    return {
        id: id, nome: nome, cpf: cpf, email: email, password: password
    };
}
exports.createCliente = createCliente;
function createClientes(data) {
    return data.map(createCliente);
}
exports.createClientes = createClientes;
function createClienteById(_a) {
    var id = _a.id, nome = _a.nome, cpf = _a.cpf, email = _a.email, password = _a.password;
    return {
        id: id, nome: nome, cpf: cpf, email: email, password: password
    };
}
exports.createClienteById = createClienteById;
function createClienteByEmail(_a) {
    var id = _a.id, nome = _a.nome, cpf = _a.cpf, email = _a.email, password = _a.password;
    return {
        id: id, nome: nome, cpf: cpf, email: email, password: password
    };
}
exports.createClienteByEmail = createClienteByEmail;
//# sourceMappingURL=interface.js.map