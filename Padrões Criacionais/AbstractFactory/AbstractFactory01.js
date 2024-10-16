// Interface da Fábrica Abstrata
class AbstractFactory {
    criaProdutoA() {}
    criaProdutoB() {}
    criaProdutoC() {}
}

// Fábrica 1 Concreta que cria Produtos do Tipo A, B e C (Opção 1)
class FabricaConcreta1 extends AbstractFactory {
    criaProdutoA() {
        return new ProdutoConcretoA1();
    }
    criaProdutoB() {
        return new ProdutoConcretoB1();
    }
    criaProdutoC() {
        return new ProdutoConcretoC1();
    }
}

// Fábrica Concreta que cria Produtos do Tipo A, B e C (Opção 2)
class FabricaConcreta2 extends AbstractFactory {
    criaProdutoA() {
        return new ProdutoConcretoA2();
    }
    criaProdutoB() {
        return new ProdutoConcretoB2();
    }
    criaProdutoC() {
        return new ProdutoConcretoC2();
    }
}

// Interface dos Produtos do Tipo A
class ProdutoAbstratoA {
    metodoA() {}
}

// Implementação Concreta do Produto do Tipo A - Fábrica 1
class ProdutoConcretoA1 extends ProdutoAbstratoA {
    metodoA() {
        return "Produto do Tipo A da Fábrica 1";
    }
}

// Implementação Concreta do Produto do Tipo A - Fábrica 2
class ProdutoConcretoA2 extends ProdutoAbstratoA {
    metodoA() {
        return "Produto do Tipo A da Fábrica 2";
    }
}

// Interface dos Produtos do Tipo B
class ProdutoAbstratoB {
    metodoB() {}
}

// Implementação Concreta do Produto do Tipo B - Fábrica 1
class ProdutoConcretoB1 extends ProdutoAbstratoB {
    metodoB() {
        return "Produto do Tipo B da Fábrica 1";
    }
}

// Implementação Concreta do Produto do Tipo B - Fábrica 2
class ProdutoConcretoB2 extends ProdutoAbstratoB {
    metodoB() {
        return "Produto do Tipo B da Fábrica 2";
    }
}

// Interface dos Produtos do Tipo C
class ProdutoAbstratoC {
    metodoC() {}
}

// Implementação Concreta do Produto do Tipo C - Fábrica 1
class ProdutoConcretoC1 extends ProdutoAbstratoC {
    metodoC() {
        return "Produto do Tipo C da Fábrica 1";
    }
}

// Implementação Concreta do Produto do Tipo C - Fábrica 2
class ProdutoConcretoC2 extends ProdutoAbstratoC {
    metodoC() {
        return "Produto do Tipo C da Fábrica 2";
    }
}

// Função para Demonstrar o Padrão Abstract Factory
function codigoCliente(factory) {
    const produtoA = factory.criaProdutoA();
    const produtoB = factory.criaProdutoB();
    const produtoC = factory.criaProdutoC();

    console.log(produtoA.metodoA());
    console.log(produtoB.metodoB());
    console.log(produtoC.metodoC());
}

// Exemplo de Uso da 1ª Fábrica
const factory1 = new FabricaConcreta1();
codigoCliente(factory1);

// Exemplo de Uso da 2ª Fábrica
const factory2 = new FabricaConcreta2();
codigoCliente(factory2);
