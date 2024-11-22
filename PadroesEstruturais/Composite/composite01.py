#Classe Componente
class Componente:
    def __init__(self, nome):
        self.nome = nome
        
    def adicionar(self):
        pass
    
    def remover(self):
        pass
    
    def obterNome(self):
        pass
    

#Classe Folha
class Folha (Componente):
    def __init__(self, nome, preco):
        super().__init__(nome)
        self.preco = preco
        
    def obterNome(self):
        return self.nome
    
    def obterPreco(self):
        return self.preco
    
#Classe Container
class Container(Componente):
    def __init__(self, nome):
        super().__init__(nome)
        self.componentes = []
        
    def adicionar(self, componente):
        self.componentes.append(componente)
        
    def remover(self, componente):
        index = self.componentes.index(componente)
        self.componentes.pop(index)
        
    def obterNome(self):
        return self.nome
    
    def obterPreco(self):
        preco = 0
        for componentes in self.componentes:
            preco += componentes.obterPreco()
        return preco
    
    
#Interface de uso --------------------
maca = Folha('Maçã', 4.50)
laranja = Folha('laranja', 2.90)
uva = Folha('uva', 5.00)    
abacaxi = Folha('Abacaxi', 5.00)

# Criando os # Criando os elementos Embalagem -------
embalagem = Folha('Embalagem 1', 4.00)


# Criando Tabela de Frete --------------
freteSP = Folha('SP', 10.00)
freteRJ = Folha('RJ', 20.00)
freteMG = Folha('MG', 30.00)

# Criando os Containers:
frutas = Container('Frutas')
frutas.adicionar(maca)
frutas.adicionar(laranja)
frutas.adicionar(uva)
frutas.adicionar(abacaxi)


caixa = Container('Caixa de Fruta')
caixa.adicionar(frutas)
caixa.adicionar(embalagem)


frete = Container('Frete - Entrega')
frete.adicionar(caixa)
frete.adicionar(freteRJ)



print(f"Preço Frutas (Apenas as Frutas)....................... R$ {frutas.obterPreco()}")
print(f"Preço Caixa de Fruta (Frutas + Embalagem)..............R$ {caixa.obterPreco()}")
print(f"Preço Frete (Caixa de Fruta + Frete) - Preço Total.....R$ {frete.obterPreco()}")

