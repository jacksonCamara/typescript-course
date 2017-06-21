"use strict";
var routes_1 = require("../../modules/Clientes/routes");
var model = require('../../models');
var Routes = (function () {
    function Routes(app) {
        this.router = new routes_1.default();
        this.getRoutes(app);
    }
    Routes.prototype.getRoutes = function (app) {
        app.route('/api/clientes/all').get(this.router.index);
        app.route('/api/clientes/create').post(this.router.create);
        app.route('/api/clientes/:id').get(this.router.findOne);
        app.route('/api/clientes/:id/update').put(this.router.update);
        app.route('/api/clientes/:id/destroy').delete(this.router.destroy);
    };
    return Routes;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Routes;
//# sourceMappingURL=routes.js.map