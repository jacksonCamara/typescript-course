export interface ICliente{
    readonly id: number,
    nome: string,
    email: string,
    password: string
}

export interface  IClienteDetail extends  ICliente{
    id: number,
    nome: string,
    email: string,
    password: string
}

export function createCliente({id, nome, email, password}: any): ICliente{
    return {
        id, nome, email, password
    }
}

export function createClientes(data: any[]):  ICliente[]{
    return data.map(createCliente)
}

export function createClienteById({id, nome, email, password}: any):  IClienteDetail{
    return {
        id, nome, email, password
    }
}

export function createClienteByEmail({id, nome, email, password}: any):  IClienteDetail{
    return{
        id, nome, email, password
    }
}