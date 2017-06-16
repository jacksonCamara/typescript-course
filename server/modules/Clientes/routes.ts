import { Request, Response } from 'express';
import ClienteController from './controller';
let ClienteCtrl;

class ClienteRoutes {
    constructor() {
        ClienteCtrl = new ClienteController();
    }

    index(req: Request, res: Response){
        
        return ClienteCtrl.getAll(req, res)
    }

    create(req: Request, res: Response){
        return ClienteCtrl.createCliente(req, res)
        
    }

    findOne(req: Request, res: Response){
        return ClienteCtrl.getById(req, res)
    }

    update(req: Request, res: Response){
        return ClienteCtrl.updateCliente(req, res)
    }

    destroy(req: Request, res: Response){
        console.log('aqui na rota do cliente')
        return ClienteCtrl.deleteCliente(req, res)
    }
}


export default ClienteRoutes;