
let multiplicacao = function(...args){

    //let numes = Array.from();
    let resul = 1
    
    for(let i=0; i<=args.length-1; i++){
        resul = resul * args[i];
    }

    console.log(args, resul);
    
}


let subtraRedu = function(...args){

    //let numes = Array.from(arguments);

    let resul = args.reduce(function(acum, valorAtu){
        return acum - valorAtu;
    });

    console.log(resul);
}


let multiUmPorTodos = function(opeMulti, ...args){

    let arrResul = [];

    for(let i=0; i<=args.length-1; i++){
        arrResul[i] = opeMulti * args[i];
    }
    console.log(arrResul);
}
