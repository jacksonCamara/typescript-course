"use strict";
var _ = require("lodash");
var successHandler_1 = require("../../api/responses/successHandler");
var errorHandler_1 = require("../../api/responses/errorHandler");
var dbErrorHandler_1 = require("../../config/dbErrorHandler");
var service_1 = require("./service");
var ClienteController = (function () {
    function ClienteController() {
        this.ClienteService = new service_1.default();
    }
    ClienteController.prototype.createCliente = function (req, res) {
        console.log('create controller=================================================');
        this.ClienteService.create(req.body)
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(dbErrorHandler_1.dbErrorHandler, res))
            .catch(_.partial(errorHandler_1.onError, res, 'Erro ao inserir novo cliente'));
    };
    ClienteController.prototype.getAll = function (req, res) {
        this.ClienteService
            .getAll()
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(errorHandler_1.onError, res, 'Erro ao buscar todos os clientes'));
    };
    ClienteController.prototype.getById = function (req, res) {
        var userId = parseInt(req.params.id);
        this.ClienteService.getById(userId)
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(errorHandler_1.onError, res, 'Cliente não encontrado'));
    };
    ClienteController.prototype.updateCliente = function (req, res) {
        var userId = parseInt(req.params.id);
        var props = req.body;
        this.ClienteService.update(userId, props)
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(errorHandler_1.onError, res, 'Falha ao atualizar cliente'));
    };
    ClienteController.prototype.deleteCliente = function (req, res) {
        console.log('aqui no controler');
        var userId = parseInt(req.params.id);
        this.ClienteService.delete(userId)
            .then(_.partial(successHandler_1.onSuccess, res))
            .catch(_.partial(errorHandler_1.onError, res, 'Erro ao excluir cliente'));
    };
    return ClienteController;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ClienteController;
//# sourceMappingURL=controller.js.map