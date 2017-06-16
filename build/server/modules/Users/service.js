"use strict";
var interface_1 = require("./interface");
var model = require('../../models');
var User = (function () {
    function User() {
    }
    User.prototype.create = function (user) {
        console.log('create service');
        console.log(model.User);
        return model.Pessoas.create({
            name: user.name,
            email: user.email,
            password: user.password
        });
    };
    User.prototype.getAll = function () {
        return model.Pessoas.findAll({
            order: ['name']
        })
            .then(interface_1.createUsers);
    };
    User.prototype.getById = function (id) {
        return model.Pessoas.findOne({
            where: { id: id }
        })
            .then(interface_1.createUserById);
    };
    User.prototype.getByEmail = function (email) {
        return model.Pessoas.findOne({
            where: { email: email }
        })
            .then(interface_1.createUserByEmail);
    };
    User.prototype.update = function (id, user) {
        return model.Pessoas.update(user, {
            where: { id: id },
            fields: ['name', 'email', 'password'] //os dados que podem ser alterados
        });
    };
    User.prototype.delete = function (id) {
        return model.Pessoas.destroy({
            where: { id: id }
        });
    };
    return User;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = User;
//# sourceMappingURL=service.js.map