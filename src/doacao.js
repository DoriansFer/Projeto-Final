class Pessoa {
    constructor() {
        this.nameInput = document.querySelector("#nome");
        this.testeDiv = document.querySelector("#teste");
        this.enviarButton = document.querySelector("#botao");
        this.enviarButton.addEventListener("click", this.enviar.bind(this));
        this.dataDeNascimento = document.querySelector("#data");
        this.email = document.querySelector("#email");
        this.tamanho = document.querySelector("#tamanho");
        this.roupa = document.querySelector("#roupas");
        this.endereco = [document.querySelector("#rua"), document.querySelector("#cep"), document.querySelector("#numero")];
    }


    enviar() {
        const result = this.nameInput.value;
        this.testeDiv.textContent = (`${result}, obrigada pelas informações. O mais breve possível, enviaremos um voluntário no seu endereço para realizar o recolhimento das doações.`);
    }

}

const doacao = new Pessoa();   