//Definindo partes da Pizza
class Tamanho{
    constructor(tamanho) {
        this.tamanho = tamanho;
    }
}

class Sabor {
    constructor(sabor) {
        this.sabor = sabor;
    }
}

class Borda {
    constructor(borda) {
        this.borda = borda;
    }
}

class Adicional {
    constructor (adicional) {
        this.adicional = adicional;
    }
}

// Construindo uma pizza
class Pizza {

    contructor(tamanho, sabor, borda, adicional) {
        this.tamanho = tamanho;
        this.sabor = sabor;
        this.borda = borda;
        this.adicional = adicional;
    }

    mostrarDetalhes() {
        console.log(`Detalhes da Pizza: 
            Tamanho da Pizza:${this.tamanho.tamanho}
            Sabor: ${this.sabor.sabor}
            Borda: ${this.borda.borda}
            Adicional: ${this.adicional.adicional}
            `)
    }
}


//BuilderPizza 
class PizzaBuilder {
    constructor() {
        this.tamanho = null;
        this.sabor = null;
        this.borda = null;
        this.adicional = null;
    }

    addTamanho(tamanho) {
        this.tamanho = new Tamanho(tamanho);
        return this;
    }

    addSabor(sabor) {
        this.sabor = new Sabor(sabor);
        return this;
    }

    addBorda(borda) {
        this.borda = new Borda(borda);
        return this;
    }

    addAdicional(adicional) {
        this.adicional = new Adicional(adicional);
        return this;
    }

    construir(){
        return new Pizza(this.tamanho, this.sabor, this.borda, this.adicional);
    }                       

}





//Interface de Utilização - Usando o BUILDER para construir uma Pizza
const builder = new PizzaBuilder();

const pizza1 = builder
    .addTamanho('Grande')
    .addSabor('Mussarela')
    .addBorda('Cheddar')
    .addAdicional('Milho');
pizza1.mostrarDetalhes;

const pizza2 = builder
    .addTamanho('Broto')
    .addSabor('Toscana')
    .addBorda('Sem Recheio')
    .addAdicional('Tomate');
pizza2.mostrarDetalhes;


const pizza3 = builder
    .addTamanho('Grande')
    .addSabor('Portuguesa')
    .addBorda('Catupiry')
    .addAdicional('cheddar');
pizza3.mostrarDetalhes;