"use strict";
var routes_1 = require("../../modules/Users/routes");
var model = require('../../models');
var Routes = (function () {
    function Routes(app) {
        this.router = new routes_1.default();
        this.getRoutes(app);
    }
    Routes.prototype.getRoutes = function (app) {
        app.post("/api", function (req, res) {
            console.log('User abaixo');
            console.log(model.Pessoas);
            model.Pessoas.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }).then(function (resultado) {
                console.log('ta no routes.ts');
                res.json(resultado);
            })
                .catch(function (error) {
                res.status(412).json({ msg: error.message });
            });
        });
        app.post("/clientes", function (req, res) {
            model.Clientes.create({
                nome: req.body.nome,
                cpf: req.body.cpf,
            }, {}).then(function (resultado) {
                res.json(resultado);
            })
                .catch(function (error) {
                res.status(412).json({ msg: error.message });
            });
        });
        app.route('/api/users/all').get(this.router.index);
        app.route('/api/users/create').post(this.router.create);
        app.route('/api/users/:id').get(this.router.findOne);
        app.route('/api/users/:id/update').put(this.router.update);
        app.route('/api/users/:id/destroy').delete(this.router.destroy);
    };
    return Routes;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Routes;
//# sourceMappingURL=routes.js.map