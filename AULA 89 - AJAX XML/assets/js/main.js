
const request = obj => {
    return new Promise((resolve,reject) => {
       const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener("load", () => {
        // protocolos HTTP entre 200 a 300 são referenciados de sucesso na execução
        if(xhr.status >= 200 && xhr.status < 300){ 
            resolve(xhr.responseText);
        } else {
            reject(xhr.statusText);
        }
        }); 
    });
};

document.addEventListener("click", e =>{
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if(tag === "a"){
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    const href = el.getAttribute("href"); // link pagina1.html..
    const objConfig = {
        method: "GET",
        url: href,
    };
    try{
        const response = await request(objConfig);
        loadResult(response);
    } catch(e) {
        console.log(e);
    };
}

function loadResult(response){
    const resultado = document.querySelector(".resultado");
    resultado.innerHTML = response;
}