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
        }
    });
    return Clientes;
};
//# sourceMappingURL=clientes.js.map