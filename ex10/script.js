
let p3200 = () => new Promise((resolve)=>{
    setTimeout(() => resolve("Promise 3200 terminou"), 800);
});
let p1600 = () =>  new Promise((resolve)=>{
    setTimeout(() => resolve("Promise 1600 terminou"), 400);
});
let p400 = () =>  new Promise((resolve)=>{
    setTimeout(() => resolve("Promise 400 terminou"), 200);
});
let p100 = () =>  new Promise((resolve)=>{
    setTimeout(() => resolve("Promise 100 terminou"), 100);
});


async function chama(){
    let cp100 = await p100();
    let cp3200 = await p3200();
    let cp1600 = await p1600();
    let cp400 = await p400().then((msg) => console.log(msg));
    

    console.log(cp3200,cp1600,cp400,cp100);
}

chama();