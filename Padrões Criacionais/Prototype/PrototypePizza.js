/* No exemplo é simulado o funcionamento de uma pizzaria, permitindo que os clientes façam
 pedidos de pizzas a partir de um cardápio pré-definido.
 ➢ OpadrãoPrototype é utilizado para garantir que o cardápio permaneça inalterado mesmo após
 os pedidos serem feitos, possibilitando a adição de novos tipos de pizza sem afetar os pedidos
 já feitos.
 ➢ Issoéalcançadoatravés da clonagem dos objetos Pizza quando são feitos os pedidos. 
 */

//Classe Pizza representa um tipo de pizza
class Pizza {
    constructor(sabor, preco) {
        this.sabor = sabor;
        this.preco = preco;
    }

    clone() {
        return new Pizza(this.sabor, this.preco);
    }
 }



 // Classe Pedido Pizza
 class PedidoPizza {
    constructor(cliente, pizzas) {
        this.cliente = cliente;
        this.pizzas = pizzas;
    }

    calcularTotal() {
        let total = 0;
        this.pizzas.forEach(pizza => {
            total += pizza.preco;
        });
        return total;
    }
 }

//Classe Pizzaria representa uma pizzaria
class Pizzaria {
    constructor(nome) {
        this.nome = nome;
        this.cardapio = {};
    }

    adicionarPizza(sabor, preco) {
        this.cardapio[sabor] = new Pizza(sabor, preco);
    }

    fazerPedido(cliente, sabores) {
        const pizzas = [];

        sabores.forEach(sabor => {
            if (this.cardapio.hasOwnProperty(sabor)) {
                pizzas.push(this.cardapio[sabor].clone());
            } else {
                console.log(`Desculpe, ${this.nome} não oferece pizza de ${sabor}.`);
            }
        });


        if (pizzas.length > 0) {
            const pedido = new PedidoPizza(cliente, pizzas);

            console.log(`Pedido recebido de ${cliente}:`);
            pedido.pizzas.forEach(pizza => {
                console.log(`${pizza.sabor} - R${pizza.preco.toFixed(2)}`);
            });
            console.log(`Total: R$ ${pedido.calcularTotal().toFixed(2)}`);
        }
    }
    
}



// Exemplo de uso 
const minhaPizzaria = new Pizzaria("Minha Pizzaria");


minhaPizzaria.adicionarPizza("Mussarela", 30);
minhaPizzaria.adicionarPizza("Calabresa", 35);
minhaPizzaria.adicionarPizza("Portuguesa", 40);


minhaPizzaria.fazerPedido("João", ["Mussarela", "Calabresa"]);
minhaPizzaria.fazerPedido("Maria", ["Mussarela", "Portuguesa"]);



