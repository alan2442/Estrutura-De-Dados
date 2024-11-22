//interface do cliente
class Target {
    request() {}
}


//Cliente
class Cliente {
    constructor(target) {
        this.target = target
    }

    criarRequest() {
        console.log("Fazendo uma requisição")
        this.target.request;
    }
}


//Serviço Existente
class Adaptee {
    requestEspecifico() {
        console.log("Requisição específica do Adaptee");
    }
}




//Adaptador
class Adapter {
    constructor(adaptee){
        this.adaptee - adaptee
    }

    request() {
        this.adaptee.requestEspecifico();
    }
}


// Utilização do Adaptador:
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee)
const cliente = new Cliente(adapter)

cliente.criarRequest();