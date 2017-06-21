import { ICliente, IClienteDetail, createCliente, createClientes, createClienteById, createClienteByEmail } from './interface';
import * as Bluebird from 'bluebird';
const model = require('../../models');

class Clientes implements ICliente {
    public id: number;
    public nome: string;
    public email: string;
    public password: string;

    constructor() {

    }

    create(cliente: any) {
        return model.clientes.create({
            nome: cliente.nome,
            email: cliente.email,
            password: cliente.password,
            telefones: cliente.telefones,
            enderecos: cliente.enderecos,
        }, {
                include: [{ model: model.telefones }, { model: model.enderecos }]
            })
    }

    getAll(): Bluebird<ICliente[]> {
        console.log('getall')
        return model.clientes.findAll({
             include: [{ model: model.telefones }, { model: model.enderecos }]
           
        }, {
                order: ['nome']
            })
            .then(createClientes)
    }
    getById(id: number): Bluebird<IClienteDetail> {
        return model.clientes.findOne({
            where: { id }
        })
            .then(createClienteById);
    }

    getByEmail(email: string): Bluebird<IClienteDetail> {
        return model.clientes.findOne({
            where: { email }
        })
            .then(createClienteByEmail);
    }

    update(id: number, user: any) {
        return model.clientes.update(user, {
            where: { id },
            fields: ['nome', 'email', 'password'], //os dados que podem ser alterados
            hooks: true,
            individualHooks: true
        })
    }

    delete(id: number) {
        console.log('aqui no service')
        return model.clientes.destroy({
            where: { id }
        });
    }
}

export default Clientes;