import { ICliente, IClienteDetail, createCliente, createClientes, createClienteById, createClienteByEmail } from './interface';
import * as Bluebird from 'bluebird';
const model = require('../../models');

class Clientes implements ICliente {
    public id: number;
    public nome: string;
    public cpf: string;
    public email: string;
    public password: string;

    constructor() {

    }

    create(cliente: any) {
        console.log('create service=================================================')
        JSON.stringify(cliente);
        return model.Clientes.create({
            nome: cliente.nome,
            email: cliente.email,
            password: cliente.password,
            Telefones: cliente.telefones,
            Enderecos: cliente.enderecos,
        }, {
                include: [{ model: model.Telefones }, { model: model.Enderecos }]
            })
    }

    getAll(): Bluebird<ICliente[]> {
        console.log('getall')
        return model.Clientes.findAll({
             include: [{ model: model.Telefones }, { model: model.Enderecos }]
           
        }, {
                order: ['nome']
            })
            .then(createClientes)
    }
    getById(id: number): Bluebird<IClienteDetail> {
        return model.Clientes.findOne({
            where: { id }
        })
            .then(createClienteById);
    }

    getByEmail(email: string): Bluebird<IClienteDetail> {
        return model.Clientes.findOne({
            where: { email }
        })
            .then(createClienteByEmail);
    }

    update(id: number, user: any) {
        return model.Clientes.update(user, {
            where: { id },
            fields: ['nome', 'email', 'password'], //os dados que podem ser alterados
            hooks: true,
            individualHooks: true
        })
    }

    delete(id: number) {
        console.log('aqui no service')
        return model.Clientes.destroy({
            where: { id }
        });
    }
}

export default Clientes;