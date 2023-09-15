const Armazem = require('./armazem');

describe('Testes da classe Armazem', () => {
    let doador;
    beforeEach(() => {
        doador = new Armazem();

        doador.adicionarItem("blusa", "M", 5, "Blusa de algodão");
        doador.adicionarItem("camiseta", "G", 3, "Camiseta preta");
        doador.adicionarItem("jaqueta", "G", 2, "Jaqueta de couro");
        doador.adicionarItem("blusa", "P", 2, "Blusa de Cetim");

    });
    test('Calcular total de blusas', () => {
        const totalBlusas = doador.calcularTotaldeItens("blusa");
        expect(totalBlusas).toBe(7);
    });

    test('Testar listar itens', () => {
        doador.listarItens("top");
    })

    test('Testar excluir itens', () => {
        doador.excluirItem("jaqueta", "top", "G");
        doador.listarItens("top");
    })
});