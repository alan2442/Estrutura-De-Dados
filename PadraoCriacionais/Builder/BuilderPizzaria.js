/*No exemplo,é criado um software que simula a construção
 de uma aplicação de pizzaria.
 ▪ O padrão de projeto Builder para criar diferentes tipos de
 pizzas em uma pizzaria.
 ▪ O Builder permite configurar os atributos de cada pizza de
 forma flexível e separada da criação dos objetos finais.
 ▪ Pode ser utilizado em um sistema de pedidos de pizza onde
 os clientes podem escolher os ingredientes de maneira
 personalizada */

//Classe Pizza
class Pizza {
    constructor(tamanho, massa, molho, coberturas) {
        this.tamanho = tamanho;
        this.massa = massa;
        this.molho = molho;
        this.coberturas = coberturas;
    }

    mostrarDetalhes() {
        console.log(`
            Pizza
            tamanho: ${this.tamanho},
            massa: ${this.massa},
            molho: ${this.molho},
            coberturas: ${this.coberturas.join(', ')}
        `)
    }
 }


 //Classe Pizza Builder
 class PizzaBuilder {
    constructor() {
        this.tamanho = null;
        this.massa = null;
        this.molho = null;
        this.coberturas = [];
    }

    definirTamanho(tamanho) {
        this.tamanho = tamanho;
        return this;
    }

    definirMassa(massa) {
        this.massa = massa;
        return this;
    }

    definirMolho(molho) {
        this.molho = molho;
        return this;
    }

    adicionarCobertura(cobertura) {
        this.coberturas.push(cobertura);
        return this;
    }
    

    construir() {
        return new Pizza(this.tamanho, this.massa, this.molho, this.coberturas);
    }
 }


 //Exemplo de uso
 const builder = new PizzaBuilder();

 const pizza1 = builder
    .definirTamanho("Grande")
    .definirMassa("Normal")
    .definirMolho("Molho de tomate")
    .adicionarCobertura("Frango")
    .adicionarCobertura("Bacon")
    .adicionarCobertura("Cebola")
    .construir();

pizza1.mostrarDetalhes();


const pizza2 = builder
    .definirTamanho("Grande")
    .definirMassa("Normal")
    .definirMolho("Molho")
    .adicionarCobertura("Queijo")
    .adicionarCobertura("Bacon")
    .adicionarCobertura("Cebola")
    .construir();

pizza2.mostrarDetalhes();
