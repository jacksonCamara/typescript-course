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
        cpf: {
            type: DataType.STRING,
        }
    });
    return Clientes;
};
//# sourceMappingURL=clientes.js.map