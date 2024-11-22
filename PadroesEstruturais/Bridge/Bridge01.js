//Implementação das Cores  --------------------------------------------------------

//Interface de cores
class Cor {
    constructor(cor) {
        this.cor = cor;
    }

    getCor() {
        return this.cor;
    }
}


//classe concreta de Cores:
class VermelhoCor extends Cor {
    constructor() {
        super("vermelho");
    }
}

class AzulCor extends Cor {
    constructor() {
        super("azul");
    }
}

class VerdeCor extends Cor {
    constructor() {
        super("verde");
    }
}


//Implementação das Formas ------------------------------------------------------

// Interface de Formas
class Forma {
    constructor(cor) {
        this.cor = cor;
    }

    setCor(cor){
        this.cor = cor;
    }

    desenho(){
        throw new Error("Este método precisa ser implementado pela subclasse")
    }
}

//Abstração Refinada - Implementação do Padrão Bridge
class Circulo extends Forma {
    desenho() {
        console.log(`Desenhando um circulo ${this.cor.getCor()}`)
    }
}

class Quadrado extends Forma {
    desenho() {
        console.log(`Desenhando um quadrado ${this.cor.getCor()}`)
    }
}


class Triangulo extends Forma {
    desenho() {
        console.log(`Desenhando um triangulo ${this.cor.getCor()}`)
    }
}



//Cliente -----------------------------------------------------------------
const vermelho = new VermelhoCor();
const azul = new AzulCor();
const verde = new VerdeCor();


const circulo1 = new Circulo(vermelho);
const circulo2 = new Circulo(azul);
const circulo3 = new Circulo(verde);
const circulo4 = new Circulo(vermelho);



const quadrado1 = new Quadrado(vermelho);
const quadrado2 = new Quadrado(azul);
const quadrado3 = new Quadrado(verde);
const quadrado4 = new Quadrado(vermelho);


const triangulo1 = new Triangulo(vermelho);
const triangulo2 = new Triangulo(azul);
const triangulo3 = new Triangulo(verde);
const triangulo4 = new Triangulo(vermelho);



circulo1.desenho()
circulo2.desenho()
circulo3.desenho()
circulo4.desenho()

console.log("___________________________________________________")

quadrado1.desenho()
quadrado2.desenho()
quadrado3.desenho()
quadrado4.desenho()

console.log("___________________________________________________")


triangulo1.desenho()
triangulo2.desenho()
triangulo3.desenho()
triangulo4.desenho()


