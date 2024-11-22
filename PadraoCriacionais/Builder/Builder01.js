// Definindo Partes de um Carro:
class Motor{
    constructor(tipo){
        this.tipo = tipo;
    }
}

class Carroceria{
    constructor(estilo){
        this.estilo = estilo;
    }
}

class Rodas{
    constructor(tamanho){
        this.tamanho = tamanho;
    }
}

class Aparencia{
    constructor(cor){
        this.cor = cor;
    }
}

// Builder
class CarroBuilder{
    constructor(){
        this.motor = null;
        this.carroceria = null;
        this.rodas = null;
        this.aparencia = null;
    }

    addMotor(tipo){
        this.motor = new Motor(tipo);
        return this;
    }

    addCarroceria(estilo){
        this.carroceria = new Carroceria(estilo);
        return this;
    }

    addRodas(tamanho){
        this.rodas = new Rodas(tamanho);
        return this;
    }

    addAparencia(cor){
        this.aparencia = new Aparencia(cor);
        return this;
    }

    construir(){
        return new Carro(this.motor, this.carroceria, this.rodas, this.aparencia);
    }
}

// Construindo um Carro
class Carro{
    constructor(motor, carroceria, rodas, aparencia){
        this.motor = motor;
        this.carroceria = carroceria;
        this.rodas = rodas;
        this.aparencia = aparencia;
    }

    mostrarDetalhes(){
        console.log(`DETALHES DO CARRO: 
            Motor:${this.motor.tipo} 
            Carroceria: ${this.carroceria.estilo} 
            Rodas: ${this.rodas.tamanho} 
            Cor: ${this.aparencia.cor}`);
    }
}

// INTERFACE DE UTILIZAÇÃO - USANDO O BUILDER PARA CONSTRUIR UM CARRO -----------------------
const builder = new CarroBuilder();

const carro1 = builder
    .addMotor('1.4')
    .addCarroceria('Sedan')
    .addRodas('14')
    .addAparencia('Preto')
    .construir();

const carro2 = builder
    .addMotor('Eletrico')
    .addCarroceria('Pick-Up')
    .addRodas('15')
    .addAparencia('Vermelho')
    .construir()

carro1.mostrarDetalhes();
carro2.mostrarDetalhes();

