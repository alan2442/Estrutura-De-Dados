/*No exemplo,aclasse ServicoReal, que representa o objeto real com a lógica primária.

 ▪ Em seguida,temos aclasse ProxyServico, que atua como um proxy para o objeto real.

 ▪ O proxy possui a mesma  interface que o objeto real e contém uma instânciado objeto real.

 ▪ Quando o método executar() é chamado no proxy, ele executa código adicional antes e depois de
 delegar a chamada ao objeto real.

 ▪ No exemplo,ao criar uma instânciado proxy e chamar o método executar() */


 //Objeto Real
 class ServicoReal {
    executar() {
        console.log("Executando o serviço real")
    }
 }

 //Proxy
 class ProxyServico {
    constructor() {
        this.servicoReal = new ServicoReal();
    }

    executar() {
        console.log("Antes da execução do serviço");
        this.servicoReal.executar();
        console.log("Depois da execulçao do serviço")
    }
 }


 //Uso do Proxy
 const proxy = new ProxyServico();
 proxy.executar();