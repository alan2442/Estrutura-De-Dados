/* ▪ No exemplo, é criado um software que simula a
 construção de uma aplicação de gerenciamento de
 faculdade.
 ▪ É utilizado o padrão de projeto Builder para criar
 objetos do tipo "Estudante“.
 ▪ OBuilder nos permite configurar os atributos de cada
 estudante de forma flexível, mantendo a criação dos
 objetos separada da sua representação final.
 ▪ Isso pode ser útil em sistemas de gerenciamento
 educacional onde os detalhes dos estudantes podem
 ser configurados de maneira personalizada. */


class Estudante {
    constructor(nome, matricula, idade, curso, periodo) {
        this.nome = nome;
        this.matricula = matricula;
        this.idade = idade;
        this.curso = curso;
        this.periodo = periodo;
    }

    mostrarDetalhes() {
        console.log(`
           Dados do Aluno:
           Nome: ${this.nome},
           Matricula: ${this.matricula},
           Idade: ${this.idade},
           Curso: ${this.curso},
           Periodo: ${this.periodo}
        `)
    }
 }


 class EstudanteBuilder {
    constructor() {
        this.nome = null;
        this.matricula = null;
        this.idade = null;
        this.curso = null;
        this.periodo = null;
    }

    definirNome(nome) {
        this.nome = nome;
        return this;
    }

    definirMatricula(matricula) {
        this.matricula = matricula;
        return this;
    }

    definirIdade(idade) {
        this.idade = idade;
        return this;
    }

    definirCurso(curso) {
        this.curso = curso;
        return this;
    }

    definirPeriodo(periodo) {
        this.periodo = periodo;
        return this;
    }

    construir() {
        return new Estudante(this.nome, this.matricula, this.idade, this.curso, this.periodo);
    }
 }


 const builder = new EstudanteBuilder();


 const estudante1 = builder
    .definirNome("João")
    .definirMatricula("20313503")
    .definirIdade(20)
    .definirCurso("Desenvolvimento Web")
    .definirPeriodo("Manhã")
    .construir();


const estudante2 = builder
    .definirNome("Gabriele")
    .definirMatricula("13451235")
    .definirIdade(25)
    .definirCurso("Administraçao")
    .definirPeriodo("Tarde")
    .construir();


estudante1.mostrarDetalhes();
estudante2.mostrarDetalhes();