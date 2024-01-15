// promises assincrono - não temos ideia do tempo que vai ser executado
function aleatorio(min,max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random()*(max-min) + min);
}

// function esperaAi(msg, tempo, callback) {
//     setTimeout(() =>{
//         console.log(msg);
//     },tempo);
// }
// fuções com callback para definir uma ordem progressiva deixam o codigo confuso
// esperaAi("Frase 1",aleatorio(1,3),function () {
//     esperaAi("Frase 2",aleatorio(1,3),function () {
//         esperaAi("Frase 3",aleatorio(1,3));
//     });
// });

// promisses faz isso de forma mais limpa e de facil entendimento

function esperaAi(msg, tempo) {
    return new Promise((resolve,reject)=> {
        if(typeof msg !== "string") reject("bad value"); // reject quando dar errado.
        setTimeout(() =>{
        resolve(msg); // quando der certo a função vai cair no then
    },tempo);
    });

}
// com then eu capturo a respota da função e posso chamar outra dentro dela assim posso
// fazer uma cadeia de funçoes lineares
esperaAi("conexão com o BD",aleatorio(1,3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi("Buscando dados", aleatorio(1,3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(222,aleatorio(1,3))
    .then(resposta => {
        console.log(resposta);
    }).then(() =>{
        console.log("eu serei o ultimo a ser exibido.");
    })
    })
    .catch(e =>{ // quando der erro vai cair para o catch
        console.log("ERRO:",e);
    }); // catch captura o erro