
function aleatorio(min=0,max=3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random()*(max-min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve,reject)=> {
        if(typeof msg !== "string") {
            reject("bad value");
            return;
        }; // reject quando dar errado.
        setTimeout(() =>{
        resolve(msg); // quando der certo a função vai cair no then
    },tempo);
    });

}

// esperaAi("fase 1.",aleatorio())
//     .then(valor => {
//         console.log(valor);
//         return esperaAi("Fase 2.",aleatorio())
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperaAi('fase 3.',aleatorio())
//     })
//     .then(fase => {
//         console.log(fase);
//     })
//     .catch(e => console.log(e));

// async e await

// se utilizar a palavra async posso usar a palavra await dentro da função
async function executa() {
    try{
        // await ele espera terminar para executar e o proximo
        const fase1 = await esperaAi("fase 1.",aleatorio());
        console.log(fase1);

        const fase2 = await esperaAi("fase 2.",aleatorio());
        console.log(fase2);

        const fase3 = await esperaAi("fase 3.",aleatorio());
        console.log(fase3);
     
    } catch(e){
        console.log(e);
    } 
}
executa();
// estados do promises = Pendente -> reject || fullfiled