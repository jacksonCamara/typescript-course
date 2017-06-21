
module.exports = (sequelize, DataType) => {
    const Enderecos = sequelize.define("Enderecos", {
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
    },{
        timestamps: false
    });
    Enderecos.associate = models => {
        Enderecos.belongsTo(models.Clientes);
    }
    return Enderecos;
};


