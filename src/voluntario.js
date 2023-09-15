class Voluntario {
    #dataNascimento;
    #cpf;
    nome;
    email;
    cidade;
    bairro;
    automovel;

    constructor(dataNascimento, cpf, nome, email, cidade, bairro, automovel) {
        this.#dataNascimento = dataNascimento;
        this.#cpf = cpf;
        this.nome = nome;
        this.email = email;
        this.cidade = cidade;
        this.bairro = bairro;
        this.automovel = automovel;
    }

    get cpf() {
        return this.#cpf;
    }

    set cpf(correcaoCpf) {
        return this.#cpf = correcaoCpf;
    }

    get dataNascimento() {
        return this.#dataNascimento;
    }

    set dataNascimento(correcaoDataNascimento) {
        return this.#dataNascimento = correcaoDataNascimento;
    }


}

module.exports = { Voluntario };