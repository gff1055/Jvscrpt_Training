
/** */
let arwFntn = () => {
    console.log("A function Expression")
}
arwFntn();

/** */
let arwFntnIIFE = (() => {console.log("A function Expression IIFE")})()



/** */
let arwFntnApntPrGlbl = () => {
    console.log(this);    
}
arwFntnApntPrGlbl();

/** */
let arwFntnApntPrGlbl_IIFE = (() => {console.log(this);})()


/** */
let somaNumeros = (n,q) => { return n + q; }


/** */
let ArrwFnctnApntPrObjt = {
    atrbt: function(){
        let arrFnc = (() => {
            console.log(this)
        })()
    }

}

ArrwFnctnApntPrObjt.atrbt();
