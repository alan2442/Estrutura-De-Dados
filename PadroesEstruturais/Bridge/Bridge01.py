from abc import ABC, abstractmethod


#IMPLEMENTAÇÃO DE CORES
#Interface das cores
class Cor(ABC):
    def getCor(self):
        @abstractmethod
        def getCor(self):
            pass

# implementação das Cores:
class VermelhoCor(Cor):
    def getCor(self):
        return "vermelho"
    

class AzulCor(Cor):
    def getCor(self):
        return "azul"
    

class VerdeCor(Cor):
    def getCor(self):
        return "verde"
    

#IMPLEMENTAÇÃO DAS FORMAS -----------------
class Forma(ABC): 
    def __init__(self, cor:Cor):
        self.cor = cor

@abstractmethod
def desenho(self):
    pass

# Abstração Refinada:
class Circulo(Forma):
    def desenho(self):
        print(f"Desenhando um ciruclo {self.cor.getCor()}")


class Quadrado(Forma):
    def desenho(self):
        print(f"Desenhando um quadrado {self.cor.getCor()}")


class Triangulo(Forma):
    def desenho(self):
        print(f"Desenhando um triangulo {self.cor.getCor()}")



# CLIENTE ------------------------------------
vermelho = VermelhoCor()
azul = AzulCor()
verde = VerdeCor()

circulo1 = Circulo(vermelho)
circulo2 = Circulo(azul)
circulo3 = Circulo(verde)

quadrado1 = Quadrado(vermelho)
quadrado2 = Quadrado(azul)
quadrado3 = Quadrado(verde)

triangulo1 = Triangulo(vermelho)
triangulo2 = Triangulo(azul)
triangulo3 = Triangulo(verde)


circulo1.desenho()
circulo2.desenho()
circulo3.desenho()

print("______________________________________________________")

quadrado1.desenho()
quadrado2.desenho()
quadrado3.desenho()

print("______________________________________________________")

triangulo1.desenho()
triangulo2.desenho()
triangulo3.desenho()

