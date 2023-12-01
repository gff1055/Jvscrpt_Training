class mecanico{

    constructor(nome, idade, marcaEspecialista, especializacao){
        this.nome = nome;
        this.idade = idade;
        this.marcaEspecialista = marcaEspecialista;
        this.especializacao = especializacao;
    }

    saudacao(){
        console.log(`Oi! Eu sou ${this.especializacao}, trabalho com ${this.marcaEspecialista} e me chamo ${this.nome}`)
    }
}

mecanico1 = new mecanico("Astolfo",41,"Fiat","mecanico de carros");
mecanico2 = new mecanico("Londrino",42,"Ford","mecanico de carros")


mecanico1.saudacao();
mecanico2.saudacao();


class mecanicoCaminhao extends mecanico{

    constructor(nome, idade, marcaEspecialista, especializacao, quantidadeEixos){
        super(nome, idade, marcaEspecialista, especializacao);
        this.quantidadeEixos = quantidadeEixos;
    }
}



class mecanicoCarros extends mecanico{

    constructor(nome, idade, marcaEspecialista, especializacao, tipoCombustivel){
        super(nome, idade, marcaEspecialista,especializacao);
        this.tipoCombustivel = tipoCombustivel;
    }
}


mecanico3 = new mecanicoCaminhao("Gaudencio",47, "Volvo","mecanico de caminhao", 6);
mecanico4 = new mecanicoCarros("Bimbo",41,"Fiat","mecanico de carros","Hibrido");

mecanico3.saudacao();
mecanico4.saudacao();
