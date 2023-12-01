let divisao = (op1, op2) => {

    try {
        if(op2 == 0) throw new Error("Divisão por 0 nao existe");
        let res = op1/op2;
        alert(`O resultado da divisao é ${res}`);

    } catch (error) {
        console.error(`Houve um erro - ${error}`);
    } finally{
        console.log("Fim do calculo");
    }
}


let raizQuadra = (op) => {
    try {
        if(op < 0) throw new Error("Raiz quadrada de um numero negativo não é REAL");
    
        res = Math.sqrt(op);
        alert(`O resultado da radiciacao é ${res}`);

    } catch (error) {
        console.error(`Houve um erro - ${error}`);
    } finally{
        console.log("Fim do calculo");
    }
    
}


ehRealVali = (dado) => {
    let dadoOri = dado;
    let dadoConverReal = parseFloat(dado);

    return dadoOri == dadoConverReal;
}


let pegaDados = (() =>{

    try{
        let op1 = parseFloat(prompt("Primeiro numero"));
        let op2 = parseFloat(prompt("Primeiro numero"));

        if(!ehRealVali(op1) || !ehRealVali(op2)){
            throw new Error("Nao pode ser inserido letras ou caracteres especiais, apenas numeros");
        }

        divisao(op1, op2);
        raizQuadra(op1);

    }catch(error){
        console.error(`Houve um erro - ${error}`);
    }
})()