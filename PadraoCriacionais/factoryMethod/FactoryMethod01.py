#Classe base de veiculo
class Veiculo:
    def __init__(self, modelo):
        self.modelo = modelo

    def mostrarDetalhes(self):
        print(f"modelo:{self.modelo}")

#Subclasse de veiculo
class Carro(Veiculo):
    def __init__(self, modelo):
        super().__init__(modelo)   

class Moto(Veiculo):
    def __init__(self, modelo):
        super().__init__(modelo)  

class Barco(Veiculo):
    def __init__(self, modelo):
        super().__init__(modelo)            


#Fabrica Abstrata de veiculo

class FabricaDeVeiculos:
    def criarVeiculo(self, modelo):
        raise NotImplementedError("ERRO")


#Fabrica Concreta de Carros
class FabricaDeCarros (FabricaDeVeiculos):
   def criarVeiculo(self, modelo):
        return Carro(modelo)


    #Fabrica Concreta de Moto
class FabricaDeMotos (FabricaDeVeiculos):
   def criarVeiculo(self, modelo):
        return Moto(modelo)



   #Fabrica Concreta de Barco
class FabricaDeBarcos (FabricaDeVeiculos):
   def criarVeiculo(self, modelo):
        return Barco(modelo)


#Uso de FACTORYMETHOD

fabricaDeCarros = FabricaDeCarros()
carro01 = fabricaDeCarros.criarVeiculo("Hatch")
carro01.mostrarDetalhes()


carro02 = fabricaDeCarros.criarVeiculo("Sedan")
carro02.mostrarDetalhes()

fabricaDeMoto = FabricaDeMotos()
moto = fabricaDeMoto.criarVeiculo("CB")
moto.mostrarDetalhes()

fabricaDeBarco = FabricaDeBarcos()
barco = fabricaDeBarco.criarVeiculo("Lancha")
barco.mostrarDetalhes()