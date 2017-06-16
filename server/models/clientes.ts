module.exports = (sequelize, DataType) => {
    const Clientes = sequelize.define("Clientes", {
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