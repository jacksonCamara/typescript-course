export default function(sequelize, DataTypes){
    const User = sequelize.define('User', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                noEmpty: true
            }
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                noEmpty: true
            }
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                noEmpty: true
            }
        }
    })
    return User;
}