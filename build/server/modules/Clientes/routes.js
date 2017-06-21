"use strict";
var controller_1 = require("./controller");
var ClienteCtrl;
var ClienteRoutes = (function () {
    function ClienteRoutes() {
        ClienteCtrl = new controller_1.default();
    }
    ClienteRoutes.prototype.index = function (req, res) {
        return ClienteCtrl.getAll(req, res);
    };
    ClienteRoutes.prototype.create = function (req, res) {
        console.log('routes service=================================================');
        return ClienteCtrl.createCliente(req, res);
    };
    ClienteRoutes.prototype.findOne = function (req, res) {
        return ClienteCtrl.getById(req, res);
    };
    ClienteRoutes.prototype.update = function (req, res) {
        return ClienteCtrl.updateCliente(req, res);
    };
    ClienteRoutes.prototype.destroy = function (req, res) {
        return ClienteCtrl.deleteCliente(req, res);
    };
    return ClienteRoutes;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ClienteRoutes;
//# sourceMappingURL=routes.js.map