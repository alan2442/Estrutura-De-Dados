# Interface da Fábrica Abstrata
class AbstractFactory:
    def criaProdutoA(self):
        pass

    def criaProdutoB(self):
        pass

    def criaProdutoC(self):
        pass

# Fábrica Concreta 1 que cria Produtos do Tipo A, B e C
class FabricaConcreta1(AbstractFactory):
    def criaProdutoA(self):
        return ProdutoConcretoA1()

    def criaProdutoB(self):
        return ProdutoConcretoB1()

    def criaProdutoC(self):
        return ProdutoConcretoC1()

# Fábrica Concreta 2 que cria Produtos do Tipo A, B e C
class FabricaConcreta2(AbstractFactory):
    def criaProdutoA(self):
        return ProdutoConcretoA2()

    def criaProdutoB(self):
        return ProdutoConcretoB2()

    def criaProdutoC(self):
        return ProdutoConcretoC2()

# Interface dos Produtos do Tipo A
class ProdutoAbstratoA:
    def metodoA(self):
        pass

# Implementação Concreta do Produto do Tipo A - Fábrica 1
class ProdutoConcretoA1(ProdutoAbstratoA):
    def metodoA(self):
        return "Produto do Tipo A da Fábrica 1"

# Implementação Concreta do Produto do Tipo A - Fábrica 2
class ProdutoConcretoA2(ProdutoAbstratoA):
    def metodoA(self):
        return "Produto do Tipo A da Fábrica 2"

# Interface dos Produtos do Tipo B
class ProdutoAbstratoB:
    def metodoB(self):
        pass

# Implementação Concreta do Produto do Tipo B - Fábrica 1
class ProdutoConcretoB1(ProdutoAbstratoB):
    def metodoB(self):
        return "Produto do Tipo B da Fábrica 1"

# Implementação Concreta do Produto do Tipo B - Fábrica 2
class ProdutoConcretoB2(ProdutoAbstratoB):
    def metodoB(self):
        return "Produto do Tipo B da Fábrica 2"

# Interface dos Produtos do Tipo C
class ProdutoAbstratoC:
    def metodoC(self):
        pass

# Implementação Concreta do Produto do Tipo C - Fábrica 1
class ProdutoConcretoC1(ProdutoAbstratoC):
    def metodoC(self):
        return "Produto do Tipo C da Fábrica 1"

# Implementação Concreta do Produto do Tipo C - Fábrica 2
class ProdutoConcretoC2(ProdutoAbstratoC):
    def metodoC(self):
        return "Produto do Tipo C da Fábrica 2"

# Função para Demonstrar o Padrão Abstract Factory
def codigoCliente(factory):
    produtoA = factory.criaProdutoA()
    produtoB = factory.criaProdutoB()
    produtoC = factory.criaProdutoC()

    print(produtoA.metodoA())
    print(produtoB.metodoB())
    print(produtoC.metodoC())

# Exemplo de Uso da 1ª Fábrica
factory1 = FabricaConcreta1()
codigoCliente(factory1)

# Exemplo de Uso da 2ª Fábrica
factory2 = FabricaConcreta2()
codigoCliente(factory2)
