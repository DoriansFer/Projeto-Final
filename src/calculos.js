class CalculadoraValor {
    constructor() {
        this.inicializarElements();
        this.inicializarEventListener();
    }

    inicializarElements() {
        this.selecionarTipoProduto = document.getElementById("product-type");
        this.entradaQuantidade = document.getElementById("quantity");
        this.ValorResultado = document.getElementById("result-value");
        this.botaoCalcular = document.getElementById("calcularButton");
        this.taxasConversao = { // por kilo
            compressor: 3.0,
            motor: 3.0,
            ferro: 20.0,
            mel: 38.0,
            misto: 35.0,
            latinha: 5.50,
            natural: 9.0,
            pintado: 8.0,
            panela: 8.0,
            bloco: 5.0,
            inox: 5.0,
            chaparia: 5.20,
            metal: 21.0,
            bronze: 23.0,
            bateria: 3.0,
            sucata: 0.80,
            motorG: 25.0,
            radiador: 14.0,
            chumbo: 5.50,
            carro: 35.0,
            caminhao: 100.0,
            sucataF: 1.30,
            mae: 16.0,
            notebook: 16.0,
            pino: 30.0,
            comum: 18.0,
            video: 5.0,
            eletrico: 3.20,
            memoria: 25.0,
            garrafa: 0.98,
            papelao: 0.21,
            jornal: 0.53,
        };
    }

    inicializarEventListener() {
        this.botaoCalcular.addEventListener("click", () => this.calcularValor());
    }

    calcularValor() {
        const tipoProduto = this.selecionarTipoProduto.value;
        const quantidade = parseFloat(this.entradaQuantidade.value);
        const valorReceber = (this.taxasConversao[tipoProduto] || 0) * quantidade;
        const valorReceberConvert = valorReceber.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        this.ValorResultado.textContent = valorReceberConvert;
    }
}


const calculadora = new CalculadoraValor();