// classe base
class EtapaProcesso {
    constructor() {
        this.proximaEtapa = null
    }

    setProximaEtapa(proximaEtapa) {
        this.proximaEtapa = proximaEtapa
    }

    processar(pagamento) {
        throw new Error("Este método deve ser implementado pelas subclasses")
    }
}

// etapas concretas
class EtapaConexao extends EtapaProcesso {
    processar(pagamento) {
        console.log("Estabelecendo conexão...")
            // logica de conexao
        if(true) {
            if(this.proximaEtapa) {
                this.proximaEtapa.processar(pagamento)
            }
        }
        else {
            console.log("Falha na conexao - Encerrando")
        }
    }
}

class EtapaValidacao extends EtapaProcesso {
    processar(pagamento) {
        console.log("Validando informações de pagamento...")
            // logica de validacao
        if(pagamento.valor > 0) {
            console.log("Informações validadas")
            if(this.proximaEtapa) {
                this.proximaEtapa.processar(pagamento)
            }
        }
        else {
            console.log("Informações inválidas - Encerrando")
        }
    }
}

class EtapaEnvioInformacao extends EtapaProcesso {
    processar(pagamento) {
        console.log("Enviando informação...")
            // logica de envio de informacao
        console.log("Informações enviadas")
        if(this.proximaEtapa) {
            this.proximaEtapa.processar(pagamento)
        }
    }
}

class EtapaAutenticacao extends EtapaProcesso {
    processar(pagamento) {
        console.log("Autenticando pagamento...")
            // logica de autenticacao
        if(true) {
            console.log("Pagamento autenticado")
            if(this.proximaEtapa) {
                this.proximaEtapa.processar(pagamento)
            }
        }
        else {
            console.log("Falha na autenticacao - Encerrando")
        }
    }
}

class EtapaConfirmacao extends EtapaProcesso {
    processar(pagamento) {
        console.log("Confirmando pagamento...")
            // logica de confirmacao
        console.log("Pagamento confirmado com sucesso")
    }
}

// objeto alvo - pagamento
class Pagamento {
    constructor(valor) {
        this.valor = valor
    }
}

// cliente
class Cliente {
    iniciarProcessoPagamento(valor) {
        // criacao das etapas
        const etapaConexao = new EtapaConexao()
        const etapaValidacao = new EtapaValidacao()
        const etapaEnvioInformacao = new EtapaEnvioInformacao()
        const etapaAutenticacao = new EtapaAutenticacao()
        const etapaConfirmacao = new EtapaConfirmacao()

        // configuracao da cadeia de processamento
        etapaConexao.setProximaEtapa(etapaValidacao)
        etapaValidacao.setProximaEtapa(etapaEnvioInformacao)
        etapaEnvioInformacao.setProximaEtapa(etapaAutenticacao)
        etapaAutenticacao.setProximaEtapa(etapaConfirmacao)

        // criacao do pagamento
        const pagamento = new Pagamento(valor)

        // inicio do processo
        etapaConexao.processar(pagamento)
    }
}

// uso do chain of responsibility como fluxo de pagamento

const cliente = new Cliente()
cliente.iniciarProcessoPagamento(100.00)