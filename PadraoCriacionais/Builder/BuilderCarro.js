/* ▪ No exemplo, é criado um software que simula a construção de um carro, onde o Builder nos permitirá definir
 diferentes partes do carro de forma flexível.
 ▪ Começa definindo as diferentes partes do carro e na sequência se cria o Builder, que permite construir
 diferentes tipos de carros;
 ▪ Secria uma classe Carro que receberá as partes construídas pelo Builder e na pra fechar, usa-se o Builder para
 construir diferentes tipos de carros */



// Definindo Partes de um Carro
class Motor {
    constructor(tipo) {
        this.tipo = tipo;
    }
}

class Carroceria {
    constructor(estilo) {
        this.estilo = estilo;
    }
}

class Rodas {
    constructor(tamanho) {
        this.tamanho = tamanho;
    }
}

class Interior {
    constructor(cor) {
        this.cor = cor;
    }
}


// Builder
class CarroBuilder {
    constructor() {
        this.motor = null;
        this.carroceria = null;
        this.rodas = null;
        this.interior = null;
    }

    adicionarMotor(tipo) {
        this.motor = new Motor(tipo);
        return this;
    }

    adicionarCarroceria(estilo) {
        this.carroceria = new Carroceria(estilo);
        return this;
    }

    adicionarRodas(tamanho) {
        this.rodas = new Rodas(tamanho);
        return this;
    }

    adicionarInterior(cor) {
        this.interior = new Interior(cor);
        return this;
    }

    construir() {
        return new Carro(this.motor, this.carroceria, this.rodas, this.interior);
    }
}


//Constuindo Carro
class Carro {
    constructor(motor, carroceria, rodas, interior) {
        this.motor = motor;
        this.carroceria = carroceria;
        this.rodas = rodas;
        this.interior = interior;
    }


    mostrarDetalhes() {
        console.log(`
            Carro com motor ${this.motor.tipo}, 
            carroceria ${this.carroceria.estilo}, 
            rodas do tamanho ${this.rodas.tamanho} e
            interior na cor ${this.interior.cor}            
            `);
    }
}


const builder = new CarroBuilder();

const carroEsportivo = builder
    .adicionarMotor('V8')
    .adicionarCarroceria('Esportiva')
    .adicionarRodas('18')
    .adicionarInterior('Preto')
    .construir();


const carroSedan = builder
    .adicionarMotor('4 cilindros')
    .adicionarCarroceria('Sedan')
    .adicionarRodas(16)
    .adicionarInterior('Bege')
    .construir();


carroEsportivo.mostrarDetalhes();
carroSedan.mostrarDetalhes();