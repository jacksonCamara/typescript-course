module.exports = function (sequelize, DataType) {
    var Enderecos = sequelize.define("enderecos", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        rua: {
            type: DataType.STRING
        },
        numeroResidencia: {
            type: DataType.STRING
        },
        bairro: {
            type: DataType.STRING
        },
        cidade: {
            type: DataType.STRING
        },
        estado: {
            type: DataType.STRING
        },
    }, {
        timestamps: false
    });
    Enderecos.associate = function (models) {
        Enderecos.belongsTo(models.clientes);
    };
    return Enderecos;
};
//# sourceMappingURL=enderecos.js.map