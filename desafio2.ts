enum Trabalho {
    Atriz,
    Padeiro
}

type Pessoa = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Pessoa = {
    nome: 'Larissa',
    idade: 29,
    profissao: Trabalho.Atriz
};

let pessoa2: Pessoa = {
    nome: 'Alberto',
    idade: 19,
    profissao: Trabalho.Padeiro
};

let pessoa3: Pessoa = {
    nome: 'Mariana',
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4: Pessoa = {
    nome: "Alexandre",
    idade: 19,
    profissao: Trabalho.Padeiro
}