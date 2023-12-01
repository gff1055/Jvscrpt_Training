class pessoa{

    constructor(nome, idade, altura){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }


    cumprimenta = (nome) => alert(`ola ${nome}`);


    exibePrompt = (acao) => {
        let nme = prompt("Digite seu nome");
        acao(nme);
    }
    


    operacao = (op1, op2, processa) => processa(op1, op2);


    multiplicacao = (x, y) => x * y;

    resultado = () => {
        let res = this.operacao(2,3,this.multiplicacao);
        console.log(res);
    }
}

pessoa1 = new pessoa("Paul", 30, 1.43);
pessoa2 = new pessoa("Set", 29, 1.53);


pessoa1.cumprimenta("Toad");
pessoa1.exibePrompt(pessoa1.cumprimenta);
pessoa1.resultado();


console.log(pessoa1, pessoa2);