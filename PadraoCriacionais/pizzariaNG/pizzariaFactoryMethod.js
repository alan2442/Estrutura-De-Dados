//Definindo partes da Pizza
/*class Tamanho{
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

class IngredientesExtra {
    constructor (ingredientesExtra) {
        this.ingredientesExtra = ingredientesExtra;
    }
}

class IngredientesOpcionais {
    constructor (ingredientesOpcionais) {
        this.ingredientesOpcionais = ingredientesOpcionais;
    }
}*/







//Classe base de Pizza
class BasePizza {

    constructor(tamanho, sabor, borda, ingredientesExtra, ingredientesOpcionais, preco) {
        this.tamanho = tamanho;
        this.sabor = sabor;
        this.borda = borda;
        this.ingredientesExtra = ingredientesExtra;
        this.ingredientesOpcionais = ingredientesOpcionais;
        this.preco = preco;
    }

    mostrarDetalhes() {
        console.log(`Detalhes da Pizza: 
            Tamanho da Pizza:${this.tamanho}
            Sabor: ${this.sabor}
            Borda: ${this.borda}
            Ingredientes Extra: ${this.ingredientesExtra}
            Ingredientes Opcionais: ${this.ingredientesOpcionais}
            Preco: ${this.preco}
            `)
    }

    clone() {
        return new BasePizza(this.tamanho, this.sabor, this.borda, this.ingredientesExtra, this.ingredientesOpcionais, this.preco);
    }

}

//Subclasse de BasePizza
class Pizza extends BasePizza {
    constructor(tamanho, sabor, borda, ingredientesExtra, ingredientesOpcionais, preco) {
        super(tamanho, sabor, borda, ingredientesExtra, ingredientesOpcionais, preco)
    }

}



//Fábrica Abstrata de Pizzas
class AbstrataPizza {
    criarPizza(tamanho, sabor, borda, ingredientesExtra, ingredientesOpcionais, preco) {
        throw new Error("Opção inexistente");
    }
}

//Fábrica Concreta de Pizzas
class FabricaDePizzas extends AbstrataPizza {
    criarPizza(tamanho, sabor, borda, ingredientesExtra, ingredientesOpcionais, preco) {
        return new Pizza(tamanho, sabor, borda, ingredientesExtra, ingredientesOpcionais, preco);
    }
}


//Classe Pedido Pizza
class PedidoPizza {
    constructor(cliente, pizzas) {
        this.cliente = cliente;
        this.pizzas = pizzas;
    }

    //Metodo para calcular o total das pizzas
    calculaTotal() {
        let total = 0;
        this.pizzas.forEach(pizza => {
            total += pizza.preco;
        });
        return total;
    }
}

class Pizzaria{
    constructor(nome) {
        this.nome = nome;
        this.cardapio = {};
    }

    //Método para adicionar Pizza
    adicionarPizza(tamanho, sabor, borda, ingredientesExtra, ingredientesOpcionais, preco) {
        const pizza = new BasePizza(tamanho, sabor, borda, ingredientesExtra, ingredientesOpcionais, preco);
        this.cardapio[sabor] = pizza;
    }

    //Método para fazer pedido
    fazerPedido(cliente, tamanhos, sabores, bordas, ingredientesExtras, ingredientesOpcionais) {
        const pizzas = [];


       /*tamanhos.forEach(tamanho => {
            if(this.cardapio.hasOwnProperty(tamanho)) {
                pizzas.push(this.cardapio[tamanho].clone())
            } else {
                console.log(`Desculpe, ${this.nome} não oferece a pizza de tamanho ${tamanho}`);
            }
        })


        sabores.forEach(sabor => {
            if(this.cardapio.hasOwnProperty(sabor)) {
                pizzas.push(this.cardapio[sabor].clone())
            } else {
                console.log(`Desculpe, ${this.nome} não oferece a pizza de sabor ${sabor}`);
            }
        })

        bordas.forEach(borda => {
            if(this.cardapio.hasOwnProperty(borda)) {
                pizzas.push(this.cardapio[borda].clone())
            } else {
                console.log(`Desculpe, ${this.nome} não oferece a pizza de borda ${borda}`);
            }
        })

        ingredientesExtras.forEach(ingredientesExtra => {
            if(this.cardapio.hasOwnProperty(ingredientesExtra)) {
                pizzas.push(this.cardapio[ingredientesExtra].clone())
            } else {
                console.log(`Desculpe, ${this.nome} não oferece a pizza com ingrediente extra ${ingredientesExtra}`);
            }
        })

        
        ingredientesOpcionais.forEach(ingredientesOpcionais => {
            if(this.cardapio.hasOwnProperty(ingredientesOpcionais)) {
                pizzas.push(this.cardapio[ingredientesOpcionais].clone())
            } else {
                console.log(`Desculpe, ${this.nome} não oferece a pizza con ingrediente opcional ${ingredientesOpcionais}`);
            }
        })*/

        if(pizzas.length > 0) {
            const pedido = new PedidoPizza(cliente, pizzas);
            console.log(`pedido recebido de ${cliente}`);
            pedido.pizzas.forEach(pizza => {
                console.log(`${pizza.tamanho} - ${pizza.sabor} - ${pizza.borda} - ${pizza.ingredientesExtra} - ${pizza.ingredientesOpcionais} - ${pizza.preco}`);
            })
            console.log(`Total: R$ ${pedido.calculaTotal().toFixed(2)}`);
        }
        
    }
}


//Uso do FACTORYMETHOD
const fabricaDePizzas = new FabricaDePizzas();

const pizza01 = fabricaDePizzas.criarPizza("Padrão", "Calabresa", "Cheddar", "Milho", "Pimenta do Reino");
pizza01.mostrarDetalhes();



//Uso do Prototype
const minhaPizzaria = new Pizzaria("Rei Da Pizza");

minhaPizzaria.adicionarPizza("Padrão", "Calabresa", "Cheddar", "Milho", "Pimenta do Reino");

minhaPizzaria.fazerPedido("Alan", ["Padrão"], ["Calabresa"], ["Cheddar"], ["Milho"], ["Pimenta do Reino"]);

