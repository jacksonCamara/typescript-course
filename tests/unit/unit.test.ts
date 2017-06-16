import { testDouble, expect } from './config/helpers';
import User from '../../server/modules/Users/service';


describe('Testes Unitários do Service', () => {
    describe('Método Create', () => {
        it('Deve criar um novo Usuário', () => {
            const novoUsuario = {
                id: 1,
                name: "Novo usuário",
                email: 'novousuario@email.com',
                password: '1234',

            };
            const user = new User();
            return user.create(novoUsuario)
                .then(data => {
                    console.log('aqui dentro');
                    console.log(data)
                    expect(data.dataValues).to.have.all.keys(
                        ['email', 'id', 'name', 'password', 'updatedAt', 'createdAt']
                    )
                });
        });
    });

    describe('Método Update', () => {
        it('Deve atualizar um Usuário', () => {
            const usuarioAtualizado = {
                name: 'Nome Atualizado',
                email: 'atualizado@email.com'
            };
            const user = new User();
            return user.update(1, usuarioAtualizado).then(data => {
                expect(data[0]).to.be.equal(1);
            })
        })
    })

    describe('Método Get Users', () => {
        it('Deve retornar uma lista com todos usuários', () => {
            const user = new User();
            return user.getAll().then(data => {
                console.log('entrei no then do get')
                console.log(data);
                expect(data).to.be.an('array');
                expect(data[0]).to.have.all.keys(
                    ['id', 'email', 'name', 'password']
                )
            })
        })
    })

    describe('Método Delete', () => {
        it('Deve deletar um Usuários', () => {
            const user = new User();
            return user.delete(2).then(data => {
                expect(data).to.be.equal(1)
            })
        })
    })



});
