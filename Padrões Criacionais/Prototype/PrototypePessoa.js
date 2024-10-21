/*  ➢ A classe Pessoa que representa um objeto que preten-se clonar.
 ➢ A classe PessoaManager é responsável por gerenciar as instâncias de Pessoa.
 ➢ Ao adicionar uma nova pessoa, cria-se uma nova instância de Pessoa e armazenamos no
 dicionário pessoas, usando o id como chave.
 ➢ Ao solicitar uma pessoa pelo id, chama-se o método clone() da instância correspondente de
 Pessoa, que faz uma cópia superficial (shallow copy) do objeto e retorna uma nova instância de
 Pessoa idêntica à original.
 ➢ Criando um objeto PessoaManager e adicionando duas pessoas.
 ➢ Nasequencia, clonando a primeira pessoa e modificamos o nome da cópia.
 ➢ Por fim, imprimimos as duas pessoas, mostrando que a modificação do nome não afetou a
 pessoa original.*/


 // Classe Pessoa que será clonada
 class Pessoa {
    constructor(id, nome, idade) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }

    //Método clone para realizar uma cópia superficial do objeto
    clone() {
        return new Pessoa(this.id, this.nome, this.idade);
    }
 }


 //Classe PessoaManager para gerenciar instâncias de Pessoa
 class PessoaManager {
    constructor() {
        this.pessoas = {};
    }

    adicionarPessoa(id, nome, idade) {
        const pessoa = new Pessoa(id,nome, idade);
        this.pessoas[id] = pessoa;
    }

    getPessoaById(id) {
        const pessoaOriginal = this.pessoas[id];
        if(pessoaOriginal) {
            return pessoaOriginal.clone();
        } else {
            return null;
        }
    }
 }
 

 //Criando uma instância de PessoaManager
 const manager = new PessoaManager();


 //Adicionando duas pessoas
 manager.adicionarPessoa(1, "João", "20");
 manager.adicionarPessoa(2, "Rafael", "26")


 // Clonando a primeira pessoa e modificando o nome da copia
 const pessoaClone = manager.getPessoaById(1);
 if(pessoaClone) {
    pessoaClone.nome = 'João Clonado';
 }


 // Imprimando as duas pessoas
 console.log('Pessoa Original')
 console.log(manager.getPessoaById(1));


 console.log('Pessoa Clonada')
 console.log(pessoaClone)