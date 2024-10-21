class Pizza{
    constructor(sabor, preco, tamanho, borda) {
        this.sabor = sabor;
        this.preco = preco;
        this.tamanho = tamanho;
        this.borda = borda;
    }
 
    clone() {
        return new Pizza(this.sabor, this.preco, this.tamanho, this.borda);
    }
}
 
class PedidoPizza{
    constructor(cliente, pizzas) {
        this.cliente = cliente;
        this.pizzas = pizzas;
    }
 
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
        this.cardapio = {}
    }
 
    adicionarPizza(sabor, preco, tamanho, borda) {
        this.cardapio[sabor] = new Pizza(sabor, preco, tamanho, borda)
    }
 
    fazerPedido(cliente, sabores, tamanhos, bordas) {

        const pizzas = []


        sabores.forEach(sabor => {
            if (this.cardapio.hasOwnProperty(sabor)) {
                pizzas.push(this.cardapio[sabor].clone())
            } else {
                console.log(`Desculpe, ${this.nome} não oferece a pizza de sabor ${sabor}`);
            }
        })



        tamanhos.forEach(tamanho => {
            if (this.cardapio.hasOwnProperty(tamanho)) {
                pizzas.push(this.cardapio[tamanho].clone())
            } else {
                console.log(`Desculpe, ${this.nome} não oferece a pizza de tamanho ${tamanho}`)
            }
        })



        bordas.forEach(borda => {
            if (this.cardapio.hasOwnProperty(borda)) {
                pizzas.push(this.cardapio[borda].clone())
            } else {
                console.log(`Desculpe, ${this.nome} não oferece a pizza de borda ${borda}`)
            }
        })

        
        if(pizzas.length > 0) {
            const pedido = new PedidoPizza(cliente, pizzas)
            console.log(`pedido recebido de ${cliente}:`);
            pedido.pizzas.forEach(pizza => {
                console.log(`${pizza.sabor} - ${pizza.tamanho} - ${pizza.borda} R$ ${pizza.preco.toFixed(2)}`);
            })
            console.log(`Total: R$ ${pedido.calculaTotal().toFixed(2)}`);
        }
    }
}
 
const minhaPizzaria = new Pizzaria("Minha Pizzaria")
 
minhaPizzaria.adicionarPizza("Mussarela", 30, "padrão", "catupiry")
minhaPizzaria.adicionarPizza("Calabresa", 35, "media", "cheddar")
minhaPizzaria.adicionarPizza("Lombo", 40, "pequena", "chocolate")
 
minhaPizzaria.fazerPedido("João", ["Mussarela", "Lombo"], ["gigante", "pequena"], ["catupiry", "chocolate"])