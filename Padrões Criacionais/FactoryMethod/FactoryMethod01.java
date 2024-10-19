//Classe base de veiculo
class Veiculo{

    private String modelo;

    public Veiculo(String modelo){
        this.modelo = modelo;
    }
    public void mostrarDetalhes(){
        System.out.println("modelo: " + modelo);
    }
}

//Subclasse de veiculo

class Carro extends Veiculo{
    public Carro(String modelo) {
        super(modelo);
        //TODO Auto-generated constructor stub
    }
}

class Moto extends Veiculo{
    public Moto(String modelo) {
        super(modelo);
        //TODO Auto-generated constructor stub
    }
}

class Barco extends Veiculo{
    public Barco(String modelo) {
        super(modelo);
        //TODO Auto-generated constructor stub
    }
}

//Fabrica Abstrata de veiculo

abstract class FabricaDeVeiculos{
    public abstract Veiculo criarVeiculo(String modelo);
}

//Fabrica Concreta de Carros
class FabricaDeCarros extends FabricaDeVeiculos{
    public Veiculo criarVeiculo(String modelo){
        return new Carro(modelo);
    }
}

    //Fabrica Concreta de Moto
    class FabricaDeMotos extends FabricaDeVeiculos{
        public Veiculo criarVeiculo(String modelo){
            return new Moto(modelo);
        }
    }

   //Fabrica Concreta de Barco
   class FabricaDeBarcos extends FabricaDeVeiculos{
    public Veiculo criarVeiculo(String modelo){
        return new Barco(modelo);
    }
}
//Uso de FACTORYMETHOD

public class FactoryMethod01{
    public static void main(String[] args) {
    FabricaDeCarros fabricaDeCarros = new FabricaDeCarros();
    Veiculo carro01 = fabricaDeCarros.criarVeiculo("Hatch");
    carro01.mostrarDetalhes();


    Veiculo carro02 = fabricaDeCarros.criarVeiculo("Sedan");
    carro02.mostrarDetalhes();

    FabricaDeMotos fabricaDeMoto = new FabricaDeMotos();
    Veiculo moto = fabricaDeMoto.criarVeiculo("CB");
    moto.mostrarDetalhes();

    FabricaDeBarcos fabricaDeBarco = new FabricaDeBarcos();
    Veiculo barco = fabricaDeBarco.criarVeiculo("Lancha");
    barco.mostrarDetalhes();
    }
}