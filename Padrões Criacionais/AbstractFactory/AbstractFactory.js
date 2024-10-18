/*===========================Padrão Criacional: Abstract Factory -------------------------------- */

//Interface da fábrica abstrata
class FabricaAbstrata {
    criarProdutoA() {}
    criarProdutoB() {}
}

//Fábrica concreta1 que cria produtos do tipo A e do tipo B
class FabricaConcreta1 extends FabricaAbstrata {
    criarProdutoA() {
        return new ProdutoConcretoA1();
    }

    criarProdutoB() {
        return new ProdutoConcretoB1();
    }
}



//Fábrica concreta2 que cria produtos do tipo A e do tipo B
class FabricaConcreta2 extends FabricaAbstrata {
    criarProdutoA () {
        return new ProdutoConcretoA2()
    }

    criarProdutoB () {
        return new ProdutoConcretoB2()
    }
}



//Interface dos produtos do tipo A
class ProdutoAbstratoA {
    methodA () {}
}


//Implementação concreta do produto do tipo A
class ProdutoConcretoA1 extends ProdutoAbstratoA {
    methodA () {
        return "Produto do tipo A da fábrica 1";
    }
}


//Implementação concreta do produto do tipo A diferente
class ProdutoConcretoA2 extends ProdutoAbstratoA {
    methodA() {
        return "Produto do tipo A da fábrica 2"
    }
}



// interface dos produtos do tipo B
class ProdutoAbstratoB {
    methodB () {}
}


// //Implementação concreta do produto do tipo A
class ProdutoConcretoB1 extends ProdutoAbstratoB {
    methodB () {
        return "Produto do tipo B da fabrica 1"
    }
}


//Implementação concreta do produto do tipo B
class ProdutoConcretoB2 extends ProdutoAbstratoB {
    methodB () {
        return "Produto do tipo B da fábrica 2"
    }
}


//Função para demonstrar o padrão Abstract Factory
function CodigoCliente(fabrica) {
    const produtoA = fabrica.criarProdutoA()
    const produtoB = fabrica.criarProdutoB()


    console.log(produtoA.methodA())
    console.log(produtoB.methodB())
}


//Exemplo de uso com a primeira fábrica
const fabrica1 = new FabricaConcreta1()
CodigoCliente(fabrica1)


//Exemplo de uso com a segunda fábrica
const fabrica2 = new FabricaConcreta2()
CodigoCliente(fabrica2)


 
