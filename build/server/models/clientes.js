"use strict";
module.exports = function (sequelize, DataType) {
    var Clientes = sequelize.define("Clientes", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
    }, {
        timestamps: false
    });
    Clientes.associate = function (models) {
        Clientes.hasMany(models.Telefones);
        Clientes.hasMany(models.Enderecos);
    };
    return Clientes;
};
//# sourceMappingURL=clientes.js.map