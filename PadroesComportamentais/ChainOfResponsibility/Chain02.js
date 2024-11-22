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
class EtapaRealizacaoP1 extends EtapaProcesso {
    processar(aluno) {
        console.log("Realizando prova P1...")
            // logica de realizacao de prova
        if(this.proximaEtapa) {
            this.proximaEtapa.processar(aluno)
        }
    }
}

class EtapaCorrecaoP1 extends EtapaProcesso {
    processar(aluno) {
        console.log("Corrigindo prova P1...")
            // logica de correcao de prova
        console.log("Informações validadas")
        if(this.proximaEtapa) {
            let notaP1 = Math.random(11).toFixed(2)
            aluno.p1 = notaP1
            this.proximaEtapa.processar(aluno)
        }
    }
}

class EtapaRealizacaoP2 extends EtapaProcesso {
    processar(aluno) {
        console.log("Realizando prova P2...")
            // logica de realizacao de prova
        if(this.proximaEtapa) {
            this.proximaEtapa.processar(aluno)
        }
    }
}

class EtapaCorrecaoP2 extends EtapaProcesso {
    processar(aluno) {
        console.log("Corrigindo prova P2...")
            // logica de correcao de prova
        console.log("Informações validadas")
        if(this.proximaEtapa) {
            let notaP2 = Math.random(11).toFixed(1)
            aluno.p2 = notaP2
            this.proximaEtapa.processar(aluno)
        }
    }
}

class EtapaAprovacaoP1P2 extends EtapaProcesso {
    processar(aluno) {
        console.log("Verificando se aluno está aprovado após P1 e P2")
        let nota = ((aluno.p1 + aluno.p2) / 2).toFixed(1)
        if(nota >= 6) {
            aluno.aprovado = true
            console.log(`Aprovado com nota ${nota}`)
        }
        else {
            if(this.proximaEtapa) {
                this.proximaEtapa.processar(aluno)
            }
        }
    }
}

class EtapaRealizacaoP3 extends EtapaProcesso {
    processar(aluno) {
        console.log("Realizando prova P3...")
            // logica de realizacao de prova
        if(this.proximaEtapa) {
            this.proximaEtapa.processar(aluno)
        }
    }
}

class EtapaCorrecaoP3 extends EtapaProcesso {
    processar(aluno) {
        console.log("Corrigindo prova P3...")
            // logica de correcao de prova
        if(this.proximaEtapa) {
            let notaP3 = Math.random(11).toFixed(1)
            aluno.p3 = notaP3
            this.proximaEtapa.processar(aluno)
        }
    }
}

class EtapaAprovacaoP3 extends EtapaProcesso {
    processar(aluno) {
        console.log("Verificando se aluno está aprovado após P3")
        if(aluno.p3 >= 6) {
            aluno.aprovado = true
            console.log(`Aprovado com nota ${aluno.p3}`)
        }
        else {
            aluno.aprovado = false
            console.log(`Reprovado com nota ${aluno.p3}`)
        }
    }
}

// objeto alvo - pagamento
class Aluno {
    constructor(p1, p2, p3) {
        this.p1 = p1
        this.p2 = p2
        this.p3 = p3
        this.aprovado = false
    }
}

// cliente
class Cliente {
    iniciarProcessoAvaliacao() {
        // criacao das etapas
        const etapaRealizacaoP1 = new EtapaRealizacaoP1()
        const etapaCorrecaoP1 = new EtapaCorrecaoP1()
        const etapaRealizacaoP2 = new EtapaRealizacaoP2()
        const etapaCorrecaoP2 = new EtapaCorrecaoP2()
        const etapaAprovacaoP1P2 = new EtapaAprovacaoP1P2()
        const etapaRealizacaoP3 = new EtapaRealizacaoP3()
        const etapaCorrecaoP3 = new EtapaCorrecaoP3()
        const etapaAprovacaoP3 = new EtapaAprovacaoP3()

        // configuracao da cadeia de processamento
        etapaRealizacaoP1.setProximaEtapa(etapaCorrecaoP1)
        etapaCorrecaoP1.setProximaEtapa(etapaRealizacaoP2)
        etapaRealizacaoP2.setProximaEtapa(etapaCorrecaoP2)
        etapaCorrecaoP2.setProximaEtapa(etapaAprovacaoP1P2)
        etapaAprovacaoP1P2.setProximaEtapa(etapaRealizacaoP3)
        etapaRealizacaoP3.setProximaEtapa(etapaCorrecaoP3)
        etapaCorrecaoP3.setProximaEtapa(etapaAprovacaoP3)

        // criacao do pagamento
        const aluno = new Aluno(0, 0, 0)

        // inicio do processo
        etapaRealizacaoP1.processar(aluno)
    }
}

// uso do chain of responsibility como fluxo de pagamento

const cliente = new Cliente()
cliente.iniciarProcessoAvaliacao()