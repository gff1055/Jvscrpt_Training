
let arrFnc = (() => "function expression")();

for(letra of arrFnc){
    console.log(letra.toUpperCase());
}

/*class Pessoa{

    constructor(nome, idade, altura, sexo){
        this.nome = nome;
        this.altura = altura;
        this.idade = idade;
        this.sexo = sexo;
    }

    aNome = function(nome){
        this.nome = nome;
    }

    aAltura = (altura) => this.altura = altura;
    aIdade = (idade) => this.idade = idade;

    altera(dado, atributo){
        atributo(dado);
    }

    saudacao = () => {console.log(`Oi Sou ${this.nome}. Sou do sexo ${this.sexo}, e tenho ${this.idade} anos`)}
}



class Homem extends Pessoa{
    constructor(nome, idade, altura, sexo){
        super(nome, idade, altura, sexo);
    }
}*/


let pessoa = function(nome, altura, idade, sexo){

    this.nome = nome;
    this.altura = altura;
    this.idade = idade;
    this.sexo = sexo;
  
    this.saudacao = () => {console.log(`Oi Sou ${this.nome}. Sou do sexo ${this.sexo}, e tenho ${this.idade} anos`)}
}



let homem = function(nome, altura, idade, sexo) {
    let lPessoa = new pessoa(nome, altura, idade, sexo);
    Object.setPrototypeOf(this,lPessoa);
}



let pessoa1 = new pessoa("A", 12, 1.2,"masculino");
let pessoa2 = new pessoa("B", 22, 2.2,"feminino");
let pessoa3 = new homem("C",32,3.2,"masculino");

info = () => {n = prompt("Digite um nome"); return n};

callInfo = (callb) => {
    nome = callb();
    pessoa1.nome = nome;
}

callInfo(info);

console.log(pessoa1, pessoa2);
pessoa1.saudacao();
pessoa3.saudacao();

let promessa = new Promise((resolve,reject) => {
    n1 = 1;
    n2 = 2;
    n3 = 4;

    if(n1+n2 < n3){
        resolve("n3 eh menor");
    }
    else reject("n3 eh maior")
});

promessa.then((mensagem) => {
    console.log(mensagem);
}).catch((mensagem) => {
    console.log(mensagem);
});


let promessa2 = new Promise((resolve,reject) => {
    n1 = 1;
    n2 = 2;
    n3 = 4;

    if(n1+n2 < n3){
        resolve("n3 eh menor");
    }
    else reject("n3 eh maior")
});

promessa.then((mensagem) => {
    console.log(mensagem);
}).catch((mensagem) => {
    console.log(mensagem);
});

let todasPromessas = ([promessa, promessa2]);
console.log(todasPromessas);

Promise.all(todasPromessas).then((message) => console.log(message));