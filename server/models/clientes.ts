import * as bcrypt from 'bcrypt';

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
        email: {
            type: DataType.STRING,
        },
        password: {
            type: DataType.STRING,
        },  
    },{
        timestamps: false
    });
    Clientes.associate = models => {
        Clientes.hasMany(models.Telefones);
        Clientes.hasMany(models.Enderecos);
    }

    return Clientes;
};