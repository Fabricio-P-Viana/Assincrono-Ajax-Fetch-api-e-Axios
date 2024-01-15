// utilizando axios precisa exportar no html o cdn dele
// consiguimos pegar um arquivo Json e exportar ele atraves de uma unica linha
axios("pessoas.json").then(resposta => carregaElementosNaPagina(resposta.data));

//===============================================================================
//utilizando fetch conseguimos em 3 linhas a mesma coisa do axios

// fetch("pessoas.json") // selecionando um arquivo JSON
// .then(resposta => resposta.json()) // transformando ele em um array de objetos
// .then(json => carregaElementosNaPagina(json)); // printando ele no console do navegador

//===============================================================================

function carregaElementosNaPagina(json) {
    const table = document.createElement("table");// criando tabela
    for(let pessoa of json){
        const tr = document.createElement("tr"); // criando uma linha

        let td1 = document.createElement("td"); // criando uma coluna
        td1.innerHTML = pessoa.nome;
        tr.appendChild(td1);

        let td2 = document.createElement("td"); // criando uma coluna
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);

        let td3 = document.createElement("td"); // criando uma coluna
        td3.innerHTML = pessoa.salario;
        tr.appendChild(td3);

        table.appendChild(tr); // 1 linha e 3 colunas
    }

    const resposta = document.querySelector(".resultado");
    resposta.appendChild(table);
}