/*===========================Padrão Criacional: Factory Method -------------------------------- */

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    exibirDetalhes() {
        console.log(`
                Nome: ${this.nome}
                Preço: ${this.preco}
            `);
    }
}


//Subclasses Produto
class Eletronico extends Produto {
    constructor(nome, preco) {
        super(nome, preco)
    }
}

class Roupa extends Produto{
    constructor(nome, preco) {
        super(nome, preco)
    }
}


//Fábrica Abstrata de Produto
class FabricaDeProdutos {
    criarProduto(nome, preco) {
        throw new Error("O metodo criarProduto deve ser implementado pelas subclasses")
    }
}


class FabricaDeEletronicos extends FabricaDeProdutos {
    criarProduto(nome,preco) {
        return new Eletronico(nome, preco)
    }
}

class FabricaDeRoupas extends FabricaDeProdutos {
    criarProduto(nome, preco) {
        return new Roupa(nome, preco)
    }
}



//Uso da fabrica de Eletronicos
console.log("Eletronicos:")
const fabricaDeEletronico = new FabricaDeEletronicos()

eletronico1 = fabricaDeEletronico.criarProduto("Computador", 6000)
eletronico2 = fabricaDeEletronico.criarProduto("Televisão", 2500)
eletronico1.exibirDetalhes()
eletronico2.exibirDetalhes()

console.log("----------------------------------------------------------------")

//Uso da fabrica de Roupas
console.log("Roupas:")
const fabricaDeRoupas = new FabricaDeRoupas()

roupa1 = fabricaDeRoupas.criarProduto("Camisa Lacoste", 235)
roupa2 = fabricaDeRoupas.criarProduto("Calça jeans", 60)
roupa1.exibirDetalhes()
roupa2.exibirDetalhes()
