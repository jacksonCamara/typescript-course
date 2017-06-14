'use strict';
var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(module.filename);
var config = require('../config/env/config')();
var env = config.env || 'development';
var db = {};
if (config.dbURL) {
    console.log("entrou aqui no dialect 0");
    var sequelize = new Sequelize(process.env[config.dbURL], {
        dialect: 'postgres'
    });
}
else {
    console.log("entrou aqui no dialect");
    var sequelize = new Sequelize(config.db, config.username, config.password, {
        dialect: 'postgres'
    });
}
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
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
//# sourceMappingURL=index.js.map