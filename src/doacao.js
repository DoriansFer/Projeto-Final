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
        this.endereco = [document.querySelector("#rua"), document.querySelector("#cep"), document.querySelector("#cep2"), document.querySelector("#numero")];
    }


    enviar() {
        const result = this.nameInput.value;
        const rua = this.endereco[0].value;
        const cep = this.endereco[1].value;
        const cep1 = this.endereco[2].value;
        const num = this.endereco[3].value;
        this.testeDiv.textContent = (`${result}, obrigada pelas informações. O mais breve possível, enviaremos um voluntário para realizar o recolhimento das doações no endereço a seguir: ${rua}, ${num}, ${cep}-${cep1}.`);
    }

}

const doacao = new Pessoa();   