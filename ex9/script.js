let a = parseInt(prompt("Digite um numero para A"));
let b = parseInt(prompt("Digite um numero para B"));
let c = parseInt(prompt("Digite um numero para C"));



let oMenor = new Promise((resolve, reject) => {
    if(a + b < c){
       resolve("C é MENOR que a soma de A+B")
    }
    else{
        resolve("C é MAIOR que a soma de A+B")
    }
    
});


let positivoOuNegativo = new Promise((resolve, reject) => {

//    let a = parseInt(prompt("Digite um numero para A"));

console.log(a);

    if(a > 0){
        resolve("Numero positivo")
    }
    else if(a < 0){
        resolve("Numero negativo")
    }
    else{
        reject("C é zero ou nulo")
    }
});


let parImpar = new Promise((resolve, reject) => {

//    let a = parseInt(prompt("Digite um numero para A"));

    if(a%2){
        resolve("Numero impar")
    }
    else if(a%2 == 0){
        resolve("Numero par")
    }
    else{
        reject("ERRO")
    }
});

let todasAsPromessas = Promise.all([oMenor, positivoOuNegativo, parImpar])
.then((messages) => console.log(messages))
.catch((messages) => console.log(messages));

let racePromessas = Promise.race([oMenor, positivoOuNegativo, parImpar]).then((messages) => console.log(messages));

