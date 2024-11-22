// classe base
class EtapaProcesso {
    constructor() {
        this.proximaEtapa = null
    }

    setProximaEtapa(proximaEtapa) {
        this.proximaEtapa = proximaEtapa
    }

    processar(aluno) {
        throw new Error("Este método deve ser implementado pelas subclasses")
    }
}

// etapas concretas
class Inscricao extends EtapaProcesso {
    processar(aluno) {
        console.log("Realizando inscrição...")
        if(this.proximaEtapa) {
            this.proximaEtapa.processar(aluno)
        }
    }
}

class RealizacaoProva extends EtapaProcesso {
    processar(aluno) {
        console.log("Realizando prova...")
        let nota = 750
        aluno.nota = nota
        if(this.proximaEtapa) {
            this.proximaEtapa.processar(aluno)
        }
    }
}

class LancamentoNota extends EtapaProcesso {
    processar(aluno) {
        console.log("Lançando nota...")
        if(aluno.nota >= 600) {
            aluno.aprovado = true
            console.log(`Aluno aprovado com nota ${aluno.nota}`)
            if(this.proximaEtapa) {
                this.proximaEtapa.processar(aluno)
            }
        }
        else {
            console.log(`Aluno reprovado com nota ${aluno.nota}`)
        }
    }
}

class Matricula extends EtapaProcesso {
    processar(aluno) {
        console.log("Realizando matricula...")
        aluno.matricula = Date.now()
        if(this.proximaEtapa) {
            this.proximaEtapa.processar(aluno)
        }
    }
}

class InicioDasAulas extends EtapaProcesso {
    processar(aluno) {
        console.log("Iniciando as aulas...")
        console.log(`Número da matrícula: ${aluno.matricula}`)
    }
}

// objeto alvo - pagamento
class Aluno {
    constructor(nota) {
        this.nota = nota
        this.aprovado = false
        this.matricula = null
    }
}

// cliente
class Cliente {
    iniciarProcessoAvaliacao() {
        // criacao das etapas
        const inscricao = new Inscricao()
        const realizacaoProva = new RealizacaoProva()
        const lancamentoNota = new LancamentoNota()
        const matricula = new Matricula()
        const inicioDasAulas = new InicioDasAulas()

        // configuracao da cadeia de processamento
        inscricao.setProximaEtapa(realizacaoProva)
        realizacaoProva.setProximaEtapa(lancamentoNota)
        lancamentoNota.setProximaEtapa(matricula)
        matricula.setProximaEtapa(inicioDasAulas)

        // criacao do pagamento
        const aluno = new Aluno(0)

        // inicio do processo
        inscricao.processar(aluno)
    }
}

// uso do chain of responsibility como fluxo de pagamento

const cliente = new Cliente()
cliente.iniciarProcessoAvaliacao()