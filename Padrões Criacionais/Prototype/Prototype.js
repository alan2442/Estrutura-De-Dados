// Classe Pessoa - Usada como referência para ser clonada
class Pessoa {
    //Método Construtor
    constructor(id, nome, idade) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }

    //Metodo clone para realizar a copia(instância) do objeto;
    clone() {
        return new Pessoa(this.id, this.nome, this.idade);
    }
}


//Classe GerenciamentoPessoa para gerenciar instâncias de Pessoas;
class GerenciamentoPessoa {
    constructor() {
        this.pessoa = {};
    }

    // Adiciona uma nova pessoa ao dicionário de pessoas
    adicionarPessoa(id, nome, idade) {
        const pessoa = new Pessoa(id, nome, idade);
        this.pessoa[id] = pessoa;
    }

    // Solicita uma pessoa pelo id e retorna uma copia dela;
    getPessoaById(id) {
        const pessoaOriginal = this.pessoa[id];

        if (pessoaOriginal) {
            return pessoaOriginal.clone();
        } else {
            return null;
        }
    }
}

// Criando uma instância de GerenciamentoPessoa;
const gerencia = new GerenciamentoPessoa();


//Adicionando Pessoas e modificando informações:
gerencia.adicionarPessoa(1, "João da Silva", 20);
gerencia.adicionarPessoa(2, "Maria da Silva", 35);
gerencia.adicionarPessoa(1, "Paulo da Silva", 50);


//Clonando pessoas e modificando informaçõe;
const pessoaClone1 = gerencia.getPessoaById(1);
if (pessoaClone1) {
    pessoaClone1.nome = "Ricardo de Oliveira";
}



//Exibindo pessoas;
console.log("------ Pessoa Original --------");
console.log(gerencia.getPessoaById(1));
console.log(gerencia.getPessoaById(2));
console.log(gerencia.getPessoaById(3));

console.log("------ Pessoa Clonada --------");
console.log(pessoaClone1);


