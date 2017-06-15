import { testDouble, expect } from './config/helpers';
import User from '../../server/modules/Users/service';


describe('Testes Unitários do Service', () => {
    describe('Método Create', () => {
        it('Deve criar um novo Usuário', () => {
            const novoUsuario = {
                id: 1,
                name: "Novo usuário",
                email: 'novousuario@email.com',
                password: '1234'
            };
            const user = new User();

            return user.create(novoUsuario)
                .then(data => {
                    expect(data.dataValues).to.have.all.keys(
                        ['email', 'id', 'name', 'password', 'updatedAt', 'createdAt']
                    )
                });

        });
    });
    /*
        describe('Método Update', () => {
            it('Deve atualizar um Usuário', () => {
    
            })
        })
    
        describe('Método Get Users', () => {
            it('Deve retornar uma lista com todos usuários', () => {
    
            })
        })
    
        describe('Método Delete', () => {
            it('Deve deletar um Usuários', () => {
    
            })
        })
    */
});
