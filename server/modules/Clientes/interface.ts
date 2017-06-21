export interface ICliente{
    readonly id: number,
    nome: string,
    Telefones: Array<ITelefone>
    Enderecos: Array<IEndereco>
}

export interface IClienteDetail  {
    id: number,
    nome: string,
    email: string,
    password: string
}

export interface ITelefone{
    numero: string
}

export interface IEndereco{
    rua: string,
    numeroResidencia: string;
    bairro: string,
    cidade: string,
    estado: string
}

function createTelefone({numero}: any):ITelefone{
    return{numero}
}

function createEndereco({rua, numeroResidencia, bairro, cidade, estado}: any):IEndereco{
    return{rua, numeroResidencia, bairro, cidade, estado}
}

export function createCliente({ id, nome, Telefones, Enderecos}: any): ICliente {
    Telefones = Telefones.map(createTelefone);
    Enderecos = Enderecos.map(createEndereco);
    return {
        id, nome, Telefones, Enderecos
    }
}

export function createClientes(data: any[]): ICliente[] {    
    //console.log(JSON.stringify(data))
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