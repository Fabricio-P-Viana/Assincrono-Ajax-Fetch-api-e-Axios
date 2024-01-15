

document.addEventListener("click", e =>{
    const el = e.target; // pega o elemento clicado
    const tag = el.tagName.toLowerCase(); // pega a tag do elemento clicado e deixa ele em lowecase
    if(tag === "a"){ // caso a tag seja a que é o elemento que possui o link
        e.preventDefault(); // não deixe ele enviar o formulario
        carregaPagina(el); // carregue essa pagina
    }
});

 async function carregaPagina(el) { // async para usa await 
    try{
        const href = el.getAttribute("href"); // pega o link pagina1.html..
        const response = await fetch(href); // carregando link
        // fetch já retorna um objeto Response deixando o codigo mais limpo possivel
        if(response.status !== 200) throw new Error("erro 404!"); // status mostra o numero do erro ou sucesso

        const html = await response.text(); // pega os texto do html selecionado
        loadResult(html); // carrega esses texto na pagina atual
    } catch(e) {
        console.log(e);
    }
}

function loadResult(response){
    const resultado = document.querySelector(".resultado"); // seleciona onde quero colocar meu resultado
    resultado.innerHTML = response; // colocando meu resultado
}
