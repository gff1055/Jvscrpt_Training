let mecanico = function(nome, idade, marcaEspecialista, especializacao){

    this.nome = nome;
    this.idade = idade;
    this.marcaEspecialista = marcaEspecialista;
    this.especializacao = especializacao;

    this.saudacao = function(){
        console.log(`Oi! Eu sou ${this.especializacao}, trabalho com ${this.marcaEspecialista} e me chamo ${this.nome}`)
    }
}

mecanico1 = new mecanico("Astolfo",41,"Fiat","mecanico de carros");
mecanico2 = new mecanico("Londrino",42,"Ford","mecanico de carros");


mecanico1.saudacao();
mecanico2.saudacao();


let mecanicoCaminhao = function(nome, idade, marcaEspecialista, especializacao, quantidadeEixos){
    let lMecanico = new mecanico(nome, idade, marcaEspecialista, especializacao);
    this.quantidadeEixos = quantidadeEixos;
    Object.setPrototypeOf(this,lMecanico);
}




let mecanicoCarros = function(nome, idade, marcaEspecialista, especializacao, tipoCombustivel){
    let lMecanico = new mecanico(nome, idade, marcaEspecialista, especializacao, tipoCombustivel);
    this.tipoCombustivel = tipoCombustivel;
    Object.setPrototypeOf(this,lMecanico);

}


mecanico3 = new mecanicoCaminhao("Gaudencio",47, "Volvo","mecanico de caminhao", 6);
mecanico4 = new mecanicoCarros("Bimbo",41,"Fiat","mecanico de carros","Hibrido");

mecanico3.saudacao();
mecanico4.saudacao();