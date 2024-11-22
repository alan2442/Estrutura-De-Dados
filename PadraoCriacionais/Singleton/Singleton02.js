// Projeto De Um E-COMMERCE de compra(sugestão: uso backend para produtos)


//Criação de um carrinho
const Carrinho = (function() {
    let instance;

    function createInstance() {
        let carrinho = [];


        function addProduto(produto) {
            carrinho.push(produto);
        }

        function getCarrinho() {
            return carrinho;
        }

        function limparCarrinho() {
            carrinho = [];
        }

        return{
            addProduto,
            getCarrinho,
            limparCarrinho,
        };
    }

    return{
        getInstance: function() {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }

}) ();


//Exemplo de Uso - Carrinho de compras de um e-commerce
console.log(" ---Criando os Carrinhos 1 e 2 ---")
const carrinho1 = Carrinho.getInstance();
const carrinho2 = Carrinho.getInstance();

console.log(" ---Comparando se Carrinho 1 == Carrinho 2 ---")
console.log(carrinho1 == carrinho2) //ture

console.log(" ---INICIA COMPRA - ADICIONANDO PRODUTOS (Produto A no Carrinho 1) ---")
carrinho1.addProduto({id: 1, produto: "produto A", preco: 10.00});
carrinho2.addProduto({id: 2, produto: "produto B", preco: 20.00});

console.log(" ---Mostrar o conteudo dos carrinhos (1 e 2 - antes se limpar o carrinho)---")
console.log(carrinho1.getCarrinho());
console.log(carrinho2.getCarrinho());

console.log(" ---Limpar o carrinho 1---");
carrinho1.limparCarrinho();

console.log(" ---Mostrar o conteudo dos carrinhos (Com o carrinho limpado)---")
console.log(carrinho1.getCarrinho());
console.log(carrinho2.getCarrinho());