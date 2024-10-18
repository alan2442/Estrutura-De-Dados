/*===========================Padrão Criacional: Abstract Factory -------------------------------- */
class FabricaAbstrata {
    criarProdutoEletronico() {}
    criarProdutoModa() {}
}


//Fábrica concreta para criar produtos Eletrônicos
class FabricaEletronico extends FabricaAbstrata {
    criarProdutoEletronico() {
        return new Telefone(); 
    }

    criarProdutoModa() {
        return new ProdutoModa();
    }
}


//Fábrica concreta para criar produtos de moda
class FabricaModa extends FabricaAbstrata {
    criarProdutoEletronico() {
        return new Telefone()
    }

    criarProdutoModa() {
        return new Camisa()
    }
}

/*-------------------------------------------------------- */


//Classe Abstrata para produtos Eletrônicos
class ProdutoEletronico {
    constructor() {
        this.tipo = "Eletronico";
    }

    descricao() {
        return `Produto ${this.tipo}: telefone` 
    }
}

// Classe para produtos de Moda
class ProdutoModa {
    constructor() {
        this.tipo = "moda";
    }

    descricao() {
        return `Produto ${this.tipo}: produto de moda`
    }
}

/*-------------------------------------------------------- */

//Classe concreta para produtos eletrônicos
class Telefone extends ProdutoEletronico {
    descricao() {
        return `Produto ${this.tipo}: telefone`
    }
}

// Classe concreta para produtos de moda
class Camisa extends ProdutoModa {
    descricao() {
        return `Produto ${this.tipo}: camisa` 
    }
}

/*-------------------------------------------------------- */


// Função para simular o uso do padrao Abstract Factory em uma loja virtual
function lojaVirtual (cliente, fabrica) {
    const produtoEletronico = fabrica.criarProdutoEletronico();
    const produtoModa = fabrica.criarProdutoModa();

    console.log(`${cliente} comprou:`);
    console.log(produtoEletronico.descricao());
    console.log(produtoModa.descricao());
}


const cliente1 = "Cliente 1";
const fabricaEletronicaModa = new FabricaEletronico();
lojaVirtual(cliente1, fabricaEletronicaModa);



console.log("\n-------\n");


// Exemplo de uso com fabrica de produtos de moda
const cliente2 = "Cliente 2";
const fabricaModa = new FabricaModa();
lojaVirtual(cliente2, fabricaModa);
