export interface ICliente {
    readonly id: number,
    nome: string,
    cpf: string,
    email: string,
    password: string
}

export interface IClienteDetail extends ICliente {
    id: number,
    nome: string,
    cpf: string,
    email: string,
    password: string
}

export function createCliente({ id, nome, cpf, email, password }: any): ICliente {
    return {
        id, nome, cpf, email, password
    }
}

export function createClientes(data: any[]): ICliente[] {
    return data.map(createCliente)
}

export function createClienteById({ id, nome, cpf,email, password }: any): IClienteDetail {
    return {
        id, nome, cpf,email, password
    }
}

export function createClienteByEmail({ id, nome, cpf,email, password }: any): IClienteDetail {
    return {
        id, nome, cpf, email, password
    }
}