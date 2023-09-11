class Pessoa {
    nome;
    #dataDeNascimento;
    #email;
    tamanhoC; // tamanho de calças/saias e afins
    tamanhoB; // tamanho de blusas
    #endereco;

    constructor(nome, dataDeNascimento, email, tamanhoC, tamanhoB, endereco) {
        this.nome = nome;
        this.#dataDeNascimento = dataDeNascimento;
        this.#email = email;
        this.tamanhoC = tamanhoC;
        this.tamanhoB = tamanhoB;
        this.#endereco = endereco;
    }

    get dataDeNascimento() {
        return this.#dataDeNascimento;
    }
    set dataDeNascimento(newData) {
        return this.#dataDeNascimento = newData;
    }

    get email() {
        return this.#email;
    }
    set email(newEmail) {
        return this.#email = newEmail;
    }
    get endereco() {
        return this.#endereco
    }
    set endereco(newEndereco) {
        return this.#endereco = newEndereco;
    }

}

// nao esquecer de instanciar