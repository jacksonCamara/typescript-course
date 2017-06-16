module.exports = (sequelize, DataType) => {
    const Pessoas = sequelize.define("Pessoas", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataType.STRING,
        },
        email: {
            type: DataType.STRING,
        }
    });
    return Pessoas;
};