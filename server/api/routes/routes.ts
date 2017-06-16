import { Application, Request, Response } from 'express';
import UserRoutes from '../../modules/Users/routes';
const model = require('../../models');

class Routes {
    private router: UserRoutes;
    constructor(app: Application) {
        this.router = new UserRoutes();
        this.getRoutes(app);
    }

    getRoutes(app: Application): void {

        
        app.post("/api", (req, res) => {
            console.log('User abaixo')
        
            console.log(model.Pessoas);
            model.Pessoas.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }).then(resultado => {
                console.log(  'ta no routes.ts')
                res.json(resultado);
            })
            .catch(error => {
                res.status(412).json({ msg: error.message });
            });
        })



 app.post("/clientes", (req, res) => {
        model.Clientes.create({
            nome: req.body.nome,
            cpf: req.body.cpf,
        }, {
              
            }).then(resultado => {
                res.json(resultado);
            })
            .catch(error => {
                res.status(412).json({ msg: error.message });
            });
    });



        app.route('/api/users/all').get(this.router.index);
        app.route('/api/users/create').post(this.router.create);
        app.route('/api/users/:id').get(this.router.findOne);
        app.route('/api/users/:id/update').put(this.router.update);
        app.route('/api/users/:id/destroy').delete(this.router.destroy);
    }


}

export default Routes;