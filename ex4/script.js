class Pessoa{

    constructor(nome, idade, altura){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }

    t = function (){
        console.log(this);
        console.log(this.nome);
        console.log(this.idade);
        console.log(this.altura);
    };
 
}


teste = new Pessoa("EU", 123, 1.23);
teste.t();