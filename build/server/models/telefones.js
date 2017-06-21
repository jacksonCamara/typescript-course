module.exports = function (sequelize, DataType) {
    var Telefones = sequelize.define("Telefones", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        numero: {
            type: DataType.STRING,
        }
    }, {
        timestamps: false
    });
    Telefones.associate = function (models) {
        Telefones.belongsTo(models.Clientes);
    };
    return Telefones;
};
//# sourceMappingURL=telefones.js.map