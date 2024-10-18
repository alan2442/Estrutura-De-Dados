/* ▪ No exemplo, é criado um software que simula com o padrão de projeto Builder a construção de um comercio
 eletrônico com diferentes tipos de roupas.
 ▪ OBuilder permite definir os atributos de cada roupa de forma flexível, mantendo a criação e a representação
 separadas. Tornando muito útil em um sistema de comércio eletrônico onde diferentes produtos podem ser
 personalizados de maneira flexível antes de serem exibidos aos clientes. */


class Roupa {
    constructor(tipo, tamanho, cor, preco) {
        this.tipo = tipo;
        this.tamanho = tamanho;
        this.cor = cor;
        this.preco = preco;
    }

    mostrarDetalhes () {
        console.log(`
            Roupa: ${this.tipo},
            Tamanho: ${this.tamanho},
            Cor: ${this.cor},
            Preço: ${this.preco}      
        `)
    }
}


class RoupaBuilder {
    constructor() {
        this.tipo = null;
        this.tamanho = null;
        this.cor = null;
        this.preco = null;
    }


    definirTipo(tipo) {
        this.tipo = tipo;
        return this;
    }

    definirTamanho(tamanho) {
        this.tamanho = tamanho;
        return this;
    }

    definirCor(cor) {
        this.cor = cor;
        return this;
    }

    definirPreco(preco) {
        this.preco = preco;
        return this;
    }

    construir() {
        return new Roupa(this.tipo, this.tamanho, this.cor, this.preco);
    }
}

const builder = new RoupaBuilder();

// Exemplo de uso
const blusa = builder
    .definirTipo('Blusa')
    .definirTamanho('M')
    .definirCor('Azul')
    .definirPreco(29.99)
    .construir();

const calca = builder 
    .definirTipo('Calça')
    .definirTamanho('P')
    .definirCor('Preta')
    .definirPreco(49.99)
    .construir();


blusa.mostrarDetalhes();
calca.mostrarDetalhes();