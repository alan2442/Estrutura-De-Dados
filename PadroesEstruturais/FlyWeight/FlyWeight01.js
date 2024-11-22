/* EXEMPLO DECODIGO–JAVASCRIPT 01:
 ▪ No exemplo,temos a classe FlyweightFactory, que atua como uma fábrica de objetos flyweight.

 ▪ A fábrica mantém um cache de flyweights existentes e retorna um flyweight existente ou cria um
 novo conforme necessário.

 ▪ A classe Flyweight representa o objeto flyweight em si, que contém o estado intrínseco
 compartilhado.nos estados intrínseco e extrínseco.
 ▪ O método operation recebe o estado extrínseco como parâmetro e executa uma operação com base

 ▪ O cliente utiliza a fábrica de flyweights para obter os objetos flyweight desejados e chama o método
 operation, passando o estado extrínseco específico.

 ▪ Dessa forma, o padrão Flyweight permite economizar memória compartilhando o estado intrínseco
 entre objetos flyweight, reduzindo a duplicação de dados e permitindo o uso eficiente de recursos. */


//Flywight Factory
class FlyweightFactory {
    constructor() {
        this.flyweights = {};
    }

    getFlyweight(key) {
        if (!this.flyweights[key]) {
            this.flyweights[key] = new Flyweight(key);
        }
        return this.flyweights[key];
    }
}





// Flyweight 
class Flyweight {
    constructor(intrinsicState) {
        this.intrinsicState = intrinsicState;
    }

    operation(extrinsicState) {
        console.log(`Intrinsic State: ${this.intrinsicState}, Extrinsic State: ${extrinsicState}`);
    }
}


class Client {
    constructor() {
        this.flyweightFactory = new FlyweightFactory();
    }

    run() {
        const flyweightA = this.flyweightFactory.getFlyweight('A');
        const flyweightB = this.flyweightFactory.getFlyweight('B');
        const flyweightC = this.flyweightFactory.getFlyweight('C');

        flyweightA.operation('State 1');
        flyweightB.operation('State 2');
        flyweightC.operation('State 3');
    }
}


//Usage
const client = new Client();
client.run();