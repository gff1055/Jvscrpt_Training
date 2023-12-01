
getNascimento = () => {
    let idade = prompt("Digite a sua idade");
    return idade;
}


/*prAptoVotar = (idade,callback, erroCallback) => {
    idade = parseInt(idade);

    if(idade>0)     callback(idade);
    else            erroCallback();

}*/

prAptoVotar = new Promise((resolve, reject) => {
    let idade = getNascimento();

    idade = parseInt(idade);

    if(idade>0)     resolve(idade);
    else            reject("Dados inconsistentes");

});


/*estaApto = (idade) => {
    if(idade>=16)   alert("Voce está apto a votar");
    else            alert("Voce nao esta apto para votar");
}*/


/*erroEntrada = () => {
    alert("Houve um erro na estrada de dados");
}*/


//prAptoVotar(getNascimento(), estaApto, erroEntrada);

prAptoVotar
.then((idade)=>{
    console.log(idade);
    if(idade>=16)   alert("Voce está apto a votar");
    else            alert("Voce nao esta apto para votar");

    return idade;
})
.then((idade) => {
    if(idade>=70)   alert("VOTO FACULTATIVO");
})
.catch((msg) => {
    console.log(msg)
    alert("Houve um erro na estrada de dados"); 
});






