// promises assincrono - não temos ideia do tempo que vai ser executado
// metodos uteis
// Promise.all | Promise.race | Promise.resolve | Promise.reject

function aleatorio(min,max) {
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

// Promise.all | Promise.race | Promise.resolve | Promise.reject

// Promise.all =============================================

const promises = [
    // "primeiro valor",
    esperaAi("promise 1",aleatorio(1,5)),
    esperaAi("promise 2",aleatorio(1,5)),
    esperaAi("promise 3",aleatorio(1,5)),
    // "outro valor"
];

Promise.all(promises) // usando array podemos usar a função all com promises resolve todas
    // esperaAi(1000,1000), um erro para todo o all e cai no catch
    .then(function(valor){
        console.log(valor);
    })
    .catch(function (erro) {
        console.log(erro);
    })

// Promise.race ========================================================

Promise.race(promises) // usando array ele retorna a que terminar mais rapido
    // caso a mais rapida não dê nenhum erro ele executa normalmente
    .then(function(valor){
        console.log(valor);
    })
    .catch(function (erro) {
        console.log(erro);
    })

// Promise.resolve ===============================================
// quando eu ja tiver a promise resolvida posso usar resolve

function baixaPagina() {
    const emCache = false;
    if(emCache){
        return Promise.resolve("pagina em cache");
    } else{
        return esperaAi("baixei a pagina", 3000); // caso essa promesa não tenha sido resolvida 
        // ela cai no else e é executada para assim entrar no if
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log(e));

// Promise.reject ====================
// o inverso do resolve caso seja verdadeiro ele cai no catch