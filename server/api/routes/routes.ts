import { Application, Request, Response } from 'express';
import ClienteRoutes from '../../modules/Clientes/routes';
import TokenRoutes from '../../modules/auth/auth'
const model = require('../../models');

class Routes {
    private router: ClienteRoutes;
    private tokenRoute;
    private auth;
    
    constructor(app: Application, auth: any) {
        this.router = new ClienteRoutes();
        this.tokenRoute = new TokenRoutes();
        this.auth = auth;
        this.getRoutes(app);
    }

    getRoutes(app: Application): void {
        app.route('/api/clientes/all').all(this.auth.authenticate()).get(this.router.index);
        app.route('/api/clientes/create').all(this.auth.authenticate()).post(this.router.create);
        app.route('/api/clientes/:id').all(this.auth.authenticate()).get(this.router.findOne);
        app.route('/api/clientes/:id/update').all(this.auth.authenticate()).put(this.router.update);
        app.route('/api/clientes/:id/destroy').all(this.auth.authenticate()).delete(this.router.destroy);
        app.route('/token').post(this.tokenRoute.auth)
    }


}

export default Routes;