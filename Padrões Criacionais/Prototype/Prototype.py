import copy

# Classe Pessoa - Usada como referência para ser clonada
class Pessoa:
    # Metodo contrutor
    def __init__(self, id, nome, idade):
        self.id = id
        self.nome = nome
        self.idade = idade
        
    #Metodo clone para realizar a copia(instância) do objeto;    
    def clone(self):
        return copy.copy(self)
    
#Classe GerenciamentoPessoa para gerenciar instâncias de Pessoas;
class GerenciamentoPessoa:
    def __init__(self):
        self.pessoas = {}     
        
    # Adiciona uma nova pessoa ao dicionário de pessoas
    def adicionarPessoa(self, id, nome, idade):
        pessoa = Pessoa(id, nome, idade)
        self.pessoas[id] = pessoa
        
    # Solicita uma pessoa pelo id e retorna uma copia dela 
    def getPessoaById(self, id):
        pessoaOriginal = self.pessoas.get(id)
        if pessoaOriginal:
            return pessoaOriginal.clone()
        else:
            return None
        
#Criando uma instância de GerenciaPessoa:
gerencia = GerenciamentoPessoa()

#Adicionando Pessoas:
gerencia.adicionarPessoa(1, "João da Silva", 20)
gerencia.adicionarPessoa(2, "Maria da Silva", 35)
gerencia.adicionarPessoa(3, "Paulo da Silva", 50)


# Clonando pessoas e modificando informações:
pessoaClone1 = gerencia.getPessoaById(1)
if pessoaClone1:
    pessoaClone1.nome = "Ricardo de Oliveira"

#Exibindo Pessoas
print("------ Pessoa Original --------")
print(gerencia.getPessoaById(1).__dict__)
print(gerencia.getPessoaById(2).__dict__)
print(gerencia.getPessoaById(3).__dict__)

print("------ Pessoa Clonada --------")
print(pessoaClone1.__dict__)