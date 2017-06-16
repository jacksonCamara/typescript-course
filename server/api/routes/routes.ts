import { Application, Request, Response } from 'express';
import ClienteRoutes from '../../modules/Clientes/routes';
const model = require('../../models');

class Routes {
    private router: ClienteRoutes;
    constructor(app: Application) {
        this.router = new ClienteRoutes();
        this.getRoutes(app);
    }

    getRoutes(app: Application): void {
        app.route('/api/clientes/all').get(this.router.index);
        app.route('/api/clientes/create').post(this.router.create);
        app.route('/api/clientes/:id').get(this.router.findOne);
        app.route('/api/clientes/:id/update').put(this.router.update);
        app.route('/api/clientes/:id/destroy').delete(this.router.destroy);
    }


}

export default Routes;