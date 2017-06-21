import { Request, Response } from 'express';
import * as HTTPStatus from 'http-status';
import * as _ from 'lodash';
import { onSuccess } from '../../api/responses/successHandler';
import { onError } from '../../api/responses/errorHandler';
import { dbErrorHandler } from '../../config/dbErrorHandler';
import Cliente from './service';


class ClienteController {

    private ClienteService: Cliente

    constructor() {
        this.ClienteService = new Cliente();
    }

    createCliente(req: Request, res: Response) {
        this.ClienteService.create(req.body)
            .then(_.partial(onSuccess, res))
            .catch(_.partial(dbErrorHandler, res))
            .catch(_.partial(onError, res, 'Erro ao inserir novo cliente'))
    }

    getAll(req: Request, res: Response) {
        this.ClienteService
            .getAll()
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onError, res, 'Erro ao buscar todos os clientes'))

    }


    getById(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        this.ClienteService.getById(userId)
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onError, res, 'Cliente não encontrado'))
    }

    updateCliente(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        const props = req.body;
        this.ClienteService.update(userId, props)
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onError, res, 'Falha ao atualizar cliente'))
    }

    deleteCliente(req: Request, res: Response) {
        console.log('aqui no controler')
        const userId = parseInt(req.params.id);

        this.ClienteService.delete(userId)
            .then(_.partial(onSuccess, res))
            .catch(_.partial(onError, res, 'Erro ao excluir cliente'))
    }
}

export default ClienteController;