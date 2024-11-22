//Classe Componente
class Componente {
    constructor(nome) {
        this.nome = nome;
    }

    adicionar(){}

    remover(){}

    obterNome() {}
    
}

//Classe Folha
class Folha extends Componente{
    constructor(nome, preco) {
        super(nome)
        this.preco = preco
    }

    obterNome() {
        return this.nome;
    }

    obterPreco() {
        return this.preco;
    }
}


class Container extends Componente {
    constructor(nome) {
        super(nome);
        this.componentes = [];
    }

    adicionar(componente) {
        this.componentes.push(componente);
    }

    remover(componente) {
        const index = this.componentes.indexOf(componente);
        this.componentes.splice(index, 1);
    }

    obterNome() {
        return this.nome;
    }

    obterPreco() {
        let preco = 0;
        this.componentes.forEach(componente => {
            preco+= componente.obterPreco();
        })

        return preco;
    }
}

// Interface do Usuario - Utilizaçao do Padrão:
const maca = new Folha('Maçã', 4.59);
const laranja = new Folha('Laranja', 2.98);
const uva = new Folha('Uva', 5.00);
const abacaxi = new Folha('Abacaxi', 3.99);

//// A embalagem ao inves de criar como uma variavel, foi inserido direto (abaixo)
const emabalagem = new Folha('Embalagem', 4.00);

//Tabela de Frete
const freteSP = new Folha('SP', 10.00);
const freteRJ = new Folha('RJ', 20.00);
const freteMG = new Folha('MG', 30.00);

const frutas = new Container('Frutas');
frutas.adicionar(maca);
frutas.adicionar(laranja);
frutas.adicionar(uva);

const caixa = new Container('Caixa de Frutas');
caixa.adicionar(frutas);
caixa.adicionar(emabalagem)

//caixa.adicionar(new Folha('Embalagem', 4.00));

const frete = new Container('Frete');
frete.adicionar(caixa);
frete.adicionar(freteMG);


console.log(`Preço Frutas (apenas as frutas): R$ ${frutas.obterPreco()}`)
console.log(`Preço Caixa de Frutas (Frutas + Embalagem): R$ ${caixa.obterPreco()}`)
console.log(`Preço Frete (Caixa de fruta + frete) - Preço Total: R$ ${frete.obterPreco()}`)
