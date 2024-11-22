//implementaçao das Tamanho------------------------------------
//interface das Tamanho
class Tamanho{
    constructor(tamanho){
        this.tamanho = tamanho
    }
    getTamanho(){
        return this.tamanho
    }
}


//concreta das Tamanho
class TamanhoBrotinho extends Tamanho{
    constructor(){
        super("brotinho")
    }
}

class TamanhoTradicional extends Tamanho{
    constructor(){
        super("tradicional")
    }
}

class TamanhoGrande extends Tamanho{
    constructor(){
        super("grande")
    }    
}

//implementação das formas-----------------------------------
//interface de formas
class Forma{
    constructor(tamanho){
        this.tamanho = tamanho
    }
    setTamanho(tamanho){
        this.tamanho = tamanho
    }
    producaoPizza(){
        throw new Error("Este método precisa ser implementado pela subclasse")
    }
}


//Abstração refinada
class Mussarela extends Forma{
    producaoPizza(){
        console.log(`Produzindo uma pizza de Mussarela ${this.tamanho.getTamanho()}.`)
    }
}
class Calabresa extends Forma{
    producaoPizza(){
        console.log(`Produzindo uma pizza de Calabresa${this.tamanho.getTamanho()}.`)
    }
}
class Peperoni extends Forma{
    producaoPizza(){
        console.log(`Produzindo uma pizza de Peperoni ${this.tamanho.getTamanho()}.` )
    }
}
//cliente----------------------------------------------------
const tamanhoGrande = new TamanhoGrande()
const tamanhoTradicional = new TamanhoTradicional()
const tamanhoBrotinho = new TamanhoBrotinho()

const pizza1 = new Mussarela(tamanhoBrotinho)
const pizza2 = new Peperoni(tamanhoGrande)
const pizza3 = new Calabresa(tamanhoTradicional)

pizza1.producaoPizza()
pizza2.producaoPizza()
pizza3.producaoPizza()