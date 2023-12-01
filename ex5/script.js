let mostraNome = (nome) => alert("Ola "+nome);

let cumprimenta = (func) => {
    nome = prompt("Digite seu nome");
    func(nome);
}

cumprimenta(mostraNome);



let processa = (x,y,operacao) => operacao(x,y);

let multiplicacao = (x,y) => alert (x*y);

processa(2,3,multiplicacao);