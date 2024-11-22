class Carrinho:
    instance = None
    
    def __init__(self):
        if Carrinho.instance is None:
            Carrinho.instance = self
            self.items = []
        else:
            raise Exception("Esta classe é um Singleton")
    
    @staticmethod
    def getInstance():
        if not Carrinho.instance:
            Carrinho()
        return Carrinho.instance
    
    
    def addItem(self, item):
        self.items.append(item)
        
    def getItems(self):
        return self.items
    
class Produto: 
    def __init__(self, nome, preco):
        self.nome = nome
        self.preco = preco
        
        
#Exemplo de uso em um e-commerce de loja de roupas: ----------

#Criação dos carrinhos - Instanciamento
carrinho1 = Carrinho.getInstance()
carrinho2 = Carrinho.getInstance()


# Criando produtos para serem comercializados no sistema:
print("----Criando produto 1, 2, 3 e 4 no Sistema----")
produto1 = Produto("Produto 1", 50.00)
produto2 = Produto("Produto 2", 100.00)
produto3 = Produto("Produto 3", 40.00)
produto4 = Produto("Produto 4", 59.99)

#Exibindo items do carrinhos 1 e 2 (antes de adicionar produtos):
print("itens do carrinho 1 ---- (antes de adicionar produtos)")
for item in carrinho1.getItems():
    print(item.nome, " - ", item.preco)
    
print("itens do carrinho 1 ---- (antes de adicionar produtos)")
for item in carrinho1.getItems():
    print(item.nome, " - ", item.preco)


# Adicionando Produtos 1 e 3 no Carrinho 1:
print(" Adicionando produtos 1 e 3 no carrinho1")
carrinho1.addItem(produto1)
carrinho1.addItem(produto3)



#Exibindo items do carrinho 1 e carrinho 2:
print("itens do carrinho 1 ---- Após adicionar produtos(1 e 3) ")
for item in carrinho1.getItems():
    print(item.nome, " - ", item.preco)
    
print("itens do carrinho 2 ---- Após adicionar produtos(1 e 3)")
for item in carrinho2.getItems():
    print(item.nome, " - ", item.preco)


# Adicionando Produtos no Carrinho 2:
print("Adicionando produtos 2 e 4 no carrinho 2")
carrinho2.addItem(produto2)
carrinho2.addItem(produto4)


#Exibindo items do carrinho 1 e carrinho 2:
print("itens do carrinho 1 ---- Após adicionar produtos(2 e 4) ")
for item in carrinho1.getItems():
    print(item.nome, " - ", item.preco)
    
print("itens do carrinho 2 ---- Após adicionar produtos(2 e 4)")
for item in carrinho2.getItems():
    print(item.nome, " - ", item.preco)
    
    
carrinho1 = Carrinho.getInstance()
carrinho2 = Carrinho.getInstance()


