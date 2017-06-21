export interface ICliente {
    readonly id: number,
    nome: string,
    email: string,
    password: string
    telefones: Array<ITelefone>
    enderecos: Array<IEndereco>
}

export interface IClienteDetail {
    id: number,
    nome: string,
    email: string,
    password: string
}

export interface ITelefone {
    numero: string
}

export interface IEndereco {
    rua: string,
    numeroResidencia: string;
    bairro: string,
    cidade: string,
    estado: string
}

function createTelefone({ numero }: any): ITelefone {
    return { numero }
}

function createEndereco({ rua, numeroResidencia, bairro, cidade, estado }: any): IEndereco {
    return { rua, numeroResidencia, bairro, cidade, estado }
}

export function createCliente({ id, nome, email, password, telefones, enderecos }: any): ICliente {
    telefones = telefones.map(createTelefone);
    enderecos = enderecos.map(createEndereco);
    return {
        id, nome, email, password, telefones, enderecos
    }
}

export function createClientes(data: any[]): ICliente[] {
    return data.map(createCliente)
}



export function createClienteById({ id, nome, email, password }: any): IClienteDetail {
    return {
        id, nome, email, password
    }
}

export function createClienteByEmail({ id, nome, email, password }: any): IClienteDetail {
    return {
        id, nome, email, password
    }
}