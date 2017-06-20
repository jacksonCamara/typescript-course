module.exports = function (sequelize, DataType) {
    var Enderecos = sequelize.define("Enderecos", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cep: {
            type: DataType.STRING
        },
        rua: {
            type: DataType.STRING
        },
        numeroResidencia: {
            type: DataType.STRING
        },
        edificio: {
            type: DataType.STRING
        },
        numeroApartamento: {
            type: DataType.STRING
        },
        blocoApartamento: {
            type: DataType.STRING
        },
        bairro: {
            type: DataType.STRING
        },
        cidade: {
            type: DataType.STRING
        },
        pontoReferencia: {
            type: DataType.STRING
        },
    });
    Enderecos.associate = function (models) {
        Enderecos.belongsTo(models.Clientes);
    };
    return Enderecos;
};
//# sourceMappingURL=enderecos.js.map