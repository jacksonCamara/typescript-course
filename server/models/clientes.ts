import * as bcrypt from 'bcrypt';

module.exports = (sequelize, DataType) => {
    const Clientes = sequelize.define("Clientes", {
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
    Clientes.associate = models => {
        Clientes.hasMany(models.Telefones);
        Clientes.hasMany(models.Enderecos);
    }

    Clientes.beforeCreate((cliente) => {
        return hashPassword(cliente);
    })

    Clientes.beforeUpdate((cliente) => {
        return hashPassword(cliente);
    })

    function hashPassword(user) {
        const salt = bcrypt.genSaltSync(10)
        user.set('password', bcrypt.hashSync(user.password, salt))
    }
    return Clientes;
};