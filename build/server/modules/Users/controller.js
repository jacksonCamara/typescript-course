"use strict";
var HTTPStatus = require("http-status");
var service_1 = require("./service");
var UserController = (function () {
    function UserController() {
        this.UserService = new service_1.default();
    }
    UserController.prototype.createUser = function (req, res) {
        console.log(req.body);
        this.UserService.create(req.body)
            .then(function (data) {
            res.status(HTTPStatus.OK).json({ payload: data });
        })
            .catch(function (err) {
            console.log("deu merda aqui");
            res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Erro ao cadastrar novo usuário' });
        });
    };
    UserController.prototype.getAll = function (req, res) {
        this.UserService
            .getAll()
            .then(function (data) {
            res.status(HTTPStatus.OK).json({
                payload: data
            });
        })
            .catch(function (err) {
            res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Erro ao buscar todos usuários' });
        });
    };
    UserController.prototype.getById = function (req, res) {
        var userId = parseInt(req.params.id);
        this.UserService.getById(userId)
            .then(function (data) {
            res.status(HTTPStatus.OK).json({ payload: data });
        })
            .catch(function (err) { return [
            res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Erro ao buscar usuário' })
        ]; });
    };
    UserController.prototype.updateUser = function (req, res) {
        var userId = parseInt(req.params.id);
        var props = req.body;
        this.UserService.update(userId, props)
            .then(function (data) { return [
            res.status(HTTPStatus.OK).json({
                payload: data
            })
        ]; })
            .catch(function (err) {
            res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Erro ao atualizar usuário' });
        });
    };
    UserController.prototype.deleteUser = function (req, res) {
        var userId = parseInt(req.params.id);
        this.UserService.delete(userId)
            .then(function (data) { return [
            res.status(HTTPStatus.OK).json({
                payload: data
            })
        ]; })
            .catch(function (err) {
            res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Erro ao excluir usuário' });
        });
    };
    return UserController;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserController;
//# sourceMappingURL=controller.js.map