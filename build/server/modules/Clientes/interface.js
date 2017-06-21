"use strict";
function createTelefone(_a) {
    var numero = _a.numero;
    return { numero: numero };
}
function createEndereco(_a) {
    var rua = _a.rua, numeroResidencia = _a.numeroResidencia, bairro = _a.bairro, cidade = _a.cidade, estado = _a.estado;
    return { rua: rua, numeroResidencia: numeroResidencia, bairro: bairro, cidade: cidade, estado: estado };
}
function createCliente(_a) {
    var id = _a.id, nome = _a.nome, Telefones = _a.Telefones, Enderecos = _a.Enderecos;
    Telefones = Telefones.map(createTelefone);
    Enderecos = Enderecos.map(createEndereco);
    return {
        id: id, nome: nome, Telefones: Telefones, Enderecos: Enderecos
    };
}
exports.createCliente = createCliente;
function createClientes(data) {
    //console.log(JSON.stringify(data))
    return data.map(createCliente);
}
exports.createClientes = createClientes;
function createClienteById(_a) {
    var id = _a.id, nome = _a.nome, email = _a.email, password = _a.password;
    return {
        id: id, nome: nome, email: email, password: password
    };
}
exports.createClienteById = createClienteById;
function createClienteByEmail(_a) {
    var id = _a.id, nome = _a.nome, email = _a.email, password = _a.password;
    return {
        id: id, nome: nome, email: email, password: password
    };
}
exports.createClienteByEmail = createClienteByEmail;
//# sourceMappingURL=interface.js.map