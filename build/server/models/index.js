var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(module.filename);
var config = require('../config/env/config')();
var env = config.env || 'development';
var db = {};
console.log(config.db);
var sequelize = new Sequelize(config.db, config.username, config.password, {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
fs
    .readdirSync(__dirname)
    .filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
})
    .forEach(function (file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
});
Object.keys(db).forEach(function (modelName) {
    console.log('===================entrou no index =======================');
    console.log(db[modelName]);
    console.log(db[modelName].associate);
    if (db[modelName].associate) {
        console.log('===================entrou no index associate=======================');
        console.log(db[modelName]);
        db[modelName].associate(db);
    }
});
sequelize
    .authenticate()
    .then(function () {
    console.log('Connection has been established successfully.');
})
    .catch(function (err) {
    console.error('Unable to connect to the database:', err);
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
/*
if (config.dbURL) {
  console.log("entrou aqui no dialect 0")
  var sequelize = new Sequelize(process.env[config.dbURL]);
} else {
  console.log("entrou aqui no dialect")
  var sequelize = new Sequelize(config.db, config.username, config.password,
    {
      dialect: 'postgres'
    }
  );
}
*/ 
//# sourceMappingURL=index.js.map