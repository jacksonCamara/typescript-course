import { IUser, IUserDetail, createUser, createUsers, createUserById, createUserByEmail} from './interface';
import * as Bluebird from 'bluebird';
const model = require ('../../models');

class User implements IUser{
    public id: number;
    public name: string;
    public email: string;
    public password: string;

    constructor(){

    }

    create(user: any){
        console.log('create service')
        console.log(model.User);
       return  model.Pessoas.create({
           name: user.name,
           email: user.email,
           password: user.password
       })
    }

    getAll(): Bluebird<IUser[]>{
        return model.Pessoas.findAll({
            order: ['name'] 
        })
        .then(createUsers)
    }
    getById(id: number): Bluebird<IUserDetail>{
        return model.Pessoas.findOne({
            where: {id}
        })
        .then(createUserById);
    }

    getByEmail(email: string): Bluebird<IUserDetail>{
                return model.Pessoas.findOne({
            where: {email}
        })
        .then(createUserByEmail);
    }

    update(id: number, user: any){
        return model.Pessoas.update(user, {
            where: {id},
            fields: ['name', 'email', 'password'] //os dados que podem ser alterados
        })
    }

    delete(id: number){
        return model.Pessoas.destroy({
            where: {id}
        });
    }
}

export default User;