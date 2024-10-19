/*===========================Padrão Criacional: Factory Method -------------------------------- */

// Classe base de veiculo
class Veiculo {

    constructor(modelo, cor, ano) {
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
    }

    mostrarDetalhes() {
        console.log(`
            Modelo: ${this.modelo} 
            Cor: ${this.cor}
            Ano: ${this.ano}
        `);
    }
} 



//Subclasses de Veiculo
class Carro extends Veiculo {
    constructor(modelo, cor, ano) {
        super(modelo, cor, ano);
    }
}

class Moto extends Veiculo {
    constructor(modelo, cor, ano) {
        super(modelo, cor, ano)
    }
}


class Caminhao extends Veiculo {
    constructor(modelo, cor, ano) {
        super(modelo, cor, ano)
    }
}


//--------------------Fabricas------------------


//Fabrica abstrata de veiculos
class FabricaDeVeiculos {
    criarVeiculo(modelo, cor, ano) {
        throw new Error('O metodo criarVeiculo deve ser implementado pelas subclasses');
    }
}


//Fabrica concreta de carros
class FabricaDeCarros extends FabricaDeVeiculos {
    criarVeiculo(modelo, cor, ano) {
        return new Carro(modelo, cor, ano);
    }
}


//Fabrica concreta de Motos
class FabricaDeMotos extends FabricaDeVeiculos {
    criarVeiculo(modelo, cor, ano) {
        return new Moto(modelo, cor, ano);
    }
}



//Fabrica concreta de Caminhões
class FabricaDeCaminhoes extends FabricaDeVeiculos {
    criarVeiculo(modelo, cor, ano) {
        return new Caminhao(modelo, cor, ano);
    }
}




//Uso das Fábricas

//Uso das Fabrica de Carros
console.log("Carros:")
const fabricaDeCarros = new FabricaDeCarros();

const carro1 = fabricaDeCarros.criarVeiculo("Ferrari", "Preta", 2020);
const carro2 = fabricaDeCarros.criarVeiculo("Opala", "Preto", 1995)
carro1.mostrarDetalhes();
carro2.mostrarDetalhes();
console.log("--------------------------------------------------")

//Uso da Fabrica de Motos
console.log("Motos:")
const fabricaDeMotos = new FabricaDeMotos();

const moto1 = fabricaDeMotos.criarVeiculo("cg150", "vermelha", 2018)
const moto2 = fabricaDeMotos.criarVeiculo("gs1250", "Branca", 2024)
moto1.mostrarDetalhes();
moto2.mostrarDetalhes();

console.log("--------------------------------------------------")


console.log("Caminhões:")
const fabricaDeCaminhoes = new FabricaDeCaminhoes();

caminhao1 = fabricaDeCaminhoes.criarVeiculo("Scania", "Preto", 2021)
caminhao2 = fabricaDeCaminhoes.criarVeiculo("Mercedez", "Azul", 2019)
caminhao1.mostrarDetalhes()
caminhao2.mostrarDetalhes()