//Classe base de veiculo
class Veiculo{
    constructor(modelo){
        this.modelo = modelo;
    }
    mostrarDetalhes(){
        console.log(`modelo: ${this.modelo}`);
    }
}

//Subclasse de veiculo
class Carro extends Veiculo{
    constructor(modelo){
        super(modelo);
    }
}

class Moto extends Veiculo{
    constructor(modelo){
        super(modelo);
    }
}

class Barco extends Veiculo{
    constructor(modelo){
        super(modelo);
    }
}

//Fabrica Abstrata de veiculo
class FabricaDeVeiculos{
    criarVeiculo(modelo){
        throw new Error("O modelo criarVeiculo deve ser implementado pela subclasse")
    }
}

//Fabrica Concreta de Carros
class FabricaDeCarros extends FabricaDeVeiculos{
    criarVeiculo(modelo){
        return new Carro(modelo);
    }
}

    //Fabrica Concreta de Moto
class FabricaDeMotos extends FabricaDeVeiculos{
    criarVeiculo(modelo){
        return new Moto(modelo);
    }
}

   //Fabrica Concreta de Barco
   class FabricaDeBarcos extends FabricaDeVeiculos{
    criarVeiculo(modelo){
        return new Barco(modelo);
    }
}
//Uso de FACTORYMETHOD

const fabricaDeCarros = new FabricaDeCarros();
const carro01 = fabricaDeCarros.criarVeiculo("Hatch");
carro01.mostrarDetalhes();


const carro02 = fabricaDeCarros.criarVeiculo("Sedan");
carro02.mostrarDetalhes();

const fabricaDeMoto = new FabricaDeMotos();
const moto = fabricaDeMoto.criarVeiculo("CB");
moto.mostrarDetalhes();

const fabricaDeBarco = new FabricaDeBarcos();
const barco = fabricaDeBarco.criarVeiculo("Lancha");
barco.mostrarDetalhes();