/* EXEMPLO DECODIGO–JAVASCRIPT 02–COMERCIO ELETRONICO:
 ▪ No exemplo,temos três subsistemas que representam diferentes funcionalidades de atendimento ao
 cliente em um comércio eletrônico: autenticação, cadastro de usuário e criação de pedidos.

 ▪ A classe AtendimentoCliente atua como uma fachada para esses subsistemas, simplificando a
 interação do cliente com o sistema.

 ▪ Aochamar o método realizarAtendimento na instância de AtendimentoCliente, a fachada coordena
 as ações dos subsistemas para autenticar o usuário, criar um pedido e cadastrar o usuário, se
 necessário.

 ▪ Ocliente não precisa se preocupar com os detalhes de cada subsistema, pois a fachada cuida de
 todos os passos necessários para realizar o atendimento.

 ▪ No exemplo de uso, criamos uma instância de AtendimentoCliente e realizamos um atendimento
 para um usuário específico, fornecendo sua senha e uma lista de produtos. A fachada lida com a
 autenticação do usuário, criação do pedido e, se necessário, realiza o cadastro do usuário. No final,
 exibimos uma mensagem de sucesso com o ID do pedido ou uma mensagem de falha, caso a
 autenticação não seja bem-sucedida. */


//Subsistema 1
class SistemaAutenticacao {
    autenticarUsuario(usuario, senha) {
        console.log(`Autenticando usuário ${usuario}...`);
        //Lógica de autenticação
        return true; //Simulando autenticaçaõ bem-sucedida
    }
}

//Subsistema 2 
class SistemaCadastro {
    cadastrarUsuario(usuario) {
        console.log(`Cadastrando usuário ${usuario}...`);
        //Lógica de cadastro de usuário
        return true; //Simulando cadastro bem-sucedido
    }
}

//Subsistema 3 
class SistemaPedido {
    criarPedido(produtos) {
        console.log(`Criando pedido com produtos: ${produtos}`);
        //Lógica de criação de pedido
        return 'PED-123'; //Simulando criação de pedido com um ID
    }
}

class AtendimentoCliente {
    constructor() {
        this.autenticacao = new SistemaAutenticacao();
        this.cadastro = new SistemaCadastro();
        this.pedido = new SistemaPedido();
    }

    realizarAtendimento(usuario, senha, produtos) {
        if (this.autenticacao.autenticarUsuario(usuario, senha)) {
            const pedidoId = this.pedido.criarPedido(produtos);
            this.cadastro.cadastrarUsuario(usuario);
            console.log(`Atendimento realizado com sucesso. Pedido ID: ${pedidoId}`);
        } else {
            console.log('Falha na autenticação. Atendimento não realizado');
        }
    }
}


//Exemplo de uso 
const atendimento = new AtendimentoCliente();

const usuario = 'Joao123';
const senha = 'secreta';
const produtos = ['Camiseta', 'Calça', 'Tenis'];

atendimento.realizarAtendimento(usuario, senha, produtos);

