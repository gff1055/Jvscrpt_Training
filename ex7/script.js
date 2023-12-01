let mamifero = {
    especie: "canino",
    
    som: "Som qualquer",

    emitirSom: function(){
        console.log(this.som)
    }
}

mamifero.emitirSom();



let cao = {
    som: "latido",
    emitirSom: function(){
        console.log(this.som);
    }
}

Object.setPrototypeOf(cao, mamifero);
cao.emitirSom();



let lobo = {
    especie: "canino",
    emitirSom: function(){
        console.log(this.som.toUpperCase())
    }
}

Object.setPrototypeOf(lobo, cao);
lobo.emitirSom();


Object.getPrototypeOf(lobo);
