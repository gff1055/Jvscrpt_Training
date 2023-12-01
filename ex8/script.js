let promessa = new Promise((resolve, reject) => {

    let a = parseInt(prompt("Digite um numero para A"));
    let b = parseInt(prompt("Digite um numero para B"));
    let c = parseInt(prompt("Digite um numero para C"));

    if(a + b < c){
        resolve("C é MENOR que a soma de A+B")
    }
    else{
        reject("C é MAIOR que a soma de A+B")
    }
});


promessa.then(function(resultado1){
    console.log(resultado1);
}).catch(function(resultado){
    console.log(resultado);
}).finally(function(){
    console.log("KBÔ");
});
