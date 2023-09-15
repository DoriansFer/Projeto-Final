class Armazem {
    top;
    parteInferior;
    sapatos;
    vestidos;
    brinquedos;
    outros;

    constructor() {
        this.top = [];
        this.parteInferior = [];
        this.sapatos = [];
        this.vestidos = [];
        this.brinquedos = [];
        this.outros = [];
    }

    adicionarItem(tipo, tamanho, qtd, descricao) {
        switch (tipo) {
            case "short":
            case "calça":
            case "bermuda":
            case "saia":
            case "calção":
            case "legging":
                this.parteInferior.push({ tipo: tipo, tamanho: tamanho, quantidade: qtd, descrição: descricao });
                break;
            case "blusa":
            case "camisa":
            case "camiseta":
            case "jaqueta":
            case "smoking":
            case "terno":
            case "paletó":
            case "colete":
                this.top.push({ tipo: tipo, tamanho: tamanho, quantidade: qtd, descrição: descricao });
                break;
            case "tenis":
            case "sapatos":
            case "sapatilha":
            case "sandália":
            case "salto":
            case "bota":
            case "chinelo":
            case "alpagarta":
                this.sapatos.push({ tipo: tipo, tamanho: tamanho, quantidade: qtd, descrição: descricao });
                break;
            case "vestido":
                this.vestidos.push({ tipo: tipo, tamanho: tamanho, quantidade: qtd, descrição: descricao });
                break;
            case "carrinho":
            case "urso":
            case "pelúcia":
            case "bloco de montar":
            case "barbie":
            case "boneca":
            case "amigurumi":
                this.brinquedos.push({ tipo: tipo, tamanho: tamanho, quantidade: qtd, descrição: descricao });
                break;
            default:
                this.outros.push({ tipo: tipo, tamanho: tamanho, quantidade: qtd, descrição: descricao });
        }
    }

    excluirItem(roupa, tipo, tamanho) {
        switch (tipo) {
            case "top":
                this.top = this.top.filter(item => item.tipo !== roupa || item.tamanho !== tamanho);
                break;
            case "parte inferior":
                this.parteInferior = this.parteInferior.filter(item => item.tipo !== roupa || item.tamanho !== tamanho);
                break;
            case "sapato":
                this.sapatos = this.sapatos.filter(item => item.tipo !== roupa || item.tamanho !== tamanho);
                break;
            case "vestido":
                this.vestidos = this.vestidos.filter(item => item.tipo !== roupa || item.tamanho !== tamanho);
                break;
            case "brinquedo":
                this.brinquedos = this.brinquedos.filter(item => item.tipo !== roupa || item.tamanho !== tamanho);
                break;
            case "outros":
                this.outros = this.outros.filter(item => item.tipo !== roupa || item.tamanho !== tamanho);
                break;
            default:
                console.log("Tipo não localizado");
        }
    }


    listarItens(tipo) {
        switch (tipo) {
            case "top":
                console.log(this.top);
                break;
            case "parte inferior":
                console.log(this.parteInferior);
                break;
            case "sapato":
                console.log(this.sapatos);
                break;
            case "vestido":
                console.log(this.vestidos);
                break;
            case "brinquedo":
                console.log(this.brinquedos);
                break;
            case "outros":
                console.log(this.outros);
                break;
            default:
                console.log("Tipo não localizado");
        }
    }

    calcularTotaldeItens(tipoDesejado) {
        let total = 0;


        for (let i = 0; i < this.top.length; i++) {
            const top = this.top[i];
            if (top.tipo === tipoDesejado) {
                total += top.quantidade;
                console.log(`Quantidade do item: ${tipoDesejado} é de ${total}.`);
            }
        }

        for (let i = 0; i < this.parteInferior.length; i++) {
            const parteInferior = this.parteInferior[i];
            if (parteInferior.tipo === tipoDesejado) {
                total += parteInferior.quantidade;
                console.log(`Quantidade do item: ${tipoDesejado} é de ${total}.`);
            }
        }

        for (let i = 0; i < this.sapatos.length; i++) {
            const sapatos = this.sapatos[i];
            if (sapatos.tipo === tipoDesejado) {
                total += sapatos.quantidade;
                console.log(`Quantidade do item: ${tipoDesejado} é de ${total}.`);
            }
        }

        for (let i = 0; i < this.brinquedos.length; i++) {
            const brinquedos = this.brinquedos[i];
            if (brinquedos.tipo === tipoDesejado) {
                total += brinquedos.quantidade;
                console.log(`Quantidade do item: ${tipoDesejado} é de ${total}.`);
            }
        }

        for (let i = 0; i < this.vestidos.length; i++) {
            const vestidos = this.vestidos[i];
            if (vestidos.tipo === tipoDesejado) {
                total += vestidos.quantidade;
                console.log(`Quantidade do item: ${tipoDesejado} é de ${total}.`);
            }
        }

        for (let i = 0; i < this.outros.length; i++) {
            const outros = this.outros[i];
            if (outros.tipo === tipoDesejado) {
                total += outros.quantidade;
                console.log(`Quantidade do item: ${tipoDesejado} é de ${total}.`);
            }
        }

        return total;
    }

}

module.exports = Armazem; 