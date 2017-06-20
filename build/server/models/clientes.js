"use strict";
var bcrypt = require("bcrypt");
module.exports = function (sequelize, DataType) {
    var Clientes = sequelize.define("Clientes", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cpf: {
            type: DataType.STRING,
        },
        nome: {
            type: DataType.STRING,
        },
        email: {
            type: DataType.STRING,
        },
        password: {
            type: DataType.STRING,
        },
        sexo: {
            type: DataType.STRING,
        }
    });
    Clientes.associate = function (models) {
        Clientes.hasMany(models.Telefones);
        Clientes.hasMany(models.Enderecos);
    };
    Clientes.beforeCreate(function (cliente) {
        return hashPassword(cliente);
    });
    Clientes.beforeUpdate(function (cliente) {
        return hashPassword(cliente);
    });
    function hashPassword(user) {
        var salt = bcrypt.genSaltSync(10);
        user.set('password', bcrypt.hashSync(user.password, salt));
    }
    return Clientes;
};
//# sourceMappingURL=clientes.js.map