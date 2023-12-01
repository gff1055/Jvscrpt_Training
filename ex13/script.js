
let multiplicacao = function(){

    let numes = Array.from(arguments);
    let resul = 1
    
    for(let i=0; i<=numes.length-1; i++){
        resul = resul * numes[i];
    }

    console.log(resul);
    
}


let subtraRedu = function(){

    let numes = Array.from(arguments);

    let resul = numes.reduce(function(acum, valorAtu){
        return acum - valorAtu;
    });

    console.log(resul);


}
