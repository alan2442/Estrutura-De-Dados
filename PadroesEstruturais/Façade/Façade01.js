/* ▪ No exemplo, um sistema de loja online utiliza o padrão façade para simplificar a interação com os
 subsistemas internos: SistemaPagamento, SistemaLogistica e SistemaNotificacao.

 ▪ Aclasse LojaOnline atua como a fachada, oferecendo o método realizarCompra para encapsular a
 interação com os subsistemas.

 ▪ Ao chamar o método loja.realizarCompra, a fachada processa o pagamento, envia o produto e
 notifica o cliente por e-mail. simplificada para o cliente realizar a compra na loja online.

 ▪ Os detalhes internos desses subsistemas são abstraídos pela fachada, tornando a interface

 ▪ Esse exemplo demonstra a capacidade do padrão facade em simplificar o uso de subsistemas
 complexos, proporcionando uma interface unificada e fácil de usar para os clientes. */


 // Subsistema 1
 class SistemaPagamento {
    processarPagamento(valor) {
        console.log(`Processando pagamento no valor de ${valor} reais`);
    }
 }

 //Subsistema 2 
 class SistemaLogistica {
    enviarProduto(destinatario) {
        console.log(`Enviando produto para ${destinatario}.`);
    }
 }

 //Subsistema 3
 class SistemaNotificacao {
    enviarEmail (destinatario, mensagem) {
        console.log(`Enviando e-mail para ${destinatario}: ${mensagem}`);
    }
 }


 //Fachada
 class LojaOnline {
    constructor() {
        this.pagamento = new SistemaPagamento();
        this.logistica = new SistemaLogistica();
        this.notificacao = new SistemaNotificacao();
    }

    realizarCompra(produto, destinatario) {
        this.pagamento.processarPagamento(produto.preco);
        this.logistica.enviarProduto(destinatario);
        this.notificacao.enviarEmail(destinatario, `Seu pedido ${produto.nome} foi enviado.`);
    }
 }


 //Exemplo de uso 
 const loja = new LojaOnline();

 const produto = {
    nome: 'Camiseta',
    preco: 29.99
 }


 const destinatario = 'alan@example.com';

 loja.realizarCompra(produto, destinatario);