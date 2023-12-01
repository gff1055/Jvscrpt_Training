let paises = ["Brasil", "Chile", "Uruguai", "Paraguai", "Bolivia"];

for(let pais of paises){
    console.log(pais+" é um país da américa do sul");
}

let frase = "esta frase é minuscula";
for(let letra of frase){
    console.log(letra.toUpperCase());
}




functionExpression = () => {
    console.log("Function expression")
    console.log(this);
}
functionExpression();


let obj = {
    atr: function(){
        //(() =>{
            console.log(this);
        //})()
    }    
}
obj.atr();



